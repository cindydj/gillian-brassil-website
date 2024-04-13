/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { ExperiencesType } from '../../data/experiences';
import { useState } from 'react';
import {
    shouldTextBeSmaller,
    useScreenSizeBreakpoints,
} from '../../hooks/useScreenSizeBreakpoints';
import { convertLongMonthToShortMonth } from '../../utils/date';

// const LOGO_SIZE = '40rem';
const GENERAL_NODE_SIZE = '1.2rem';
const LARGE_NODE_SIZE = '1.8rem';
const VERTICAL_GAP = '2rem';
const HORIZONTAL_GAP_LARGE = '1.7rem';
const HORIZONTAL_GAP_SMALL = '1.2rem';
const ONE_SIDE_WIDTH = '40vw';

const CSS_TIMELINE = css({
    position: 'relative',
});

const CSS_TIMELINE_EVENT_WRAPPER = css({
    display: 'flex',
    marginBottom: VERTICAL_GAP,
    ':nth-last-child(1) .timeline-node-parent::after': {
        display: 'none',
    },
});

const CSS_TIMELINE_EVENT = css({
    display: 'flex',
});

const CSS_NODE = css({
    position: 'relative',
    width: GENERAL_NODE_SIZE,
    height: GENERAL_NODE_SIZE,
    borderRadius: '50%',
});

const CSS_CURRENT_WORKPLACE_NODE = css({
    boxSizing: 'border-box',
    position: 'absolute',
    width: LARGE_NODE_SIZE,
    height: LARGE_NODE_SIZE,
    borderRadius: '50%',
    fill: 'transparent',
    top: `calc((${GENERAL_NODE_SIZE} - ${LARGE_NODE_SIZE}) / 2)`,
    left: `calc((${GENERAL_NODE_SIZE} - ${LARGE_NODE_SIZE}) / 2)`,
});

const CSS_DATE = css({
    position: 'absolute',
    top: `calc(-1 * ${GENERAL_NODE_SIZE} / 2)`,
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'end',
    width: ONE_SIDE_WIDTH,
});

const CSS_CONTENT = css({
    top: `calc(-1 * ${GENERAL_NODE_SIZE} / 2)`,
    borderRadius: '8px',
    position: 'relative',
    textDecoration: 'none',
});

const CSS_WORKPLACE_NAME_LINK = css({
    display: 'block',
    width: 'fit-content',
});

const CSS_WORKPLACE_NAME = css({
    fontWeight: 'bold',
    width: 'fit-content',
});

const CSS_DETAILS = css({
    fontSize: '1.2rem',
    marginTop: '0.4rem',
});

interface TimelineProps {
    events: ExperiencesType;
}

function Timeline(props: TimelineProps) {
    const { events } = props;
    const [hoveredEventIndex, setHoveredEventIndex] = useState<number>();
    const theme = useTheme();
    const screenSize = useScreenSizeBreakpoints();
    const horizontalGap = shouldTextBeSmaller(screenSize)
        ? HORIZONTAL_GAP_SMALL
        : HORIZONTAL_GAP_LARGE;

    return (
        <div
            css={CSS_TIMELINE}
            style={{
                left: shouldTextBeSmaller(screenSize) ? '20%' : '40%',
                width: shouldTextBeSmaller(screenSize) ? '80%' : '60%',
            }}
        >
            {events.map((event, index) => {
                const { name, details, role, url, startDate, endDate } = event;
                const displayedStartDate = shouldTextBeSmaller(screenSize)
                    ? convertLongMonthToShortMonth(startDate)
                    : startDate;
                const displayedEndDate = shouldTextBeSmaller(screenSize)
                    ? convertLongMonthToShortMonth(endDate)
                    : endDate;
                return (
                    <div key={index} css={CSS_TIMELINE_EVENT_WRAPPER}>
                        <div css={CSS_TIMELINE_EVENT}>
                            <div
                                css={css`
                                    position: relative;
                                    height: auto;
                                    margin: 0 ${horizontalGap};
                                    ::after {
                                        position: absolute;
                                        content: '';
                                        width: 0.2rem;
                                        background-color: ${theme.colors
                                            .primary};
                                        left: 0;
                                        right: 0;
                                        margin: 0 auto;
                                        top: ${GENERAL_NODE_SIZE};
                                        bottom: calc(-1 * ${VERTICAL_GAP});
                                    }
                                `}
                                className="timeline-node-parent"
                            >
                                <h5
                                    css={CSS_DATE}
                                    style={{
                                        right: `calc(100% + ${horizontalGap})`,
                                    }}
                                >
                                    {displayedStartDate} -
                                    <br />
                                    {displayedEndDate}&nbsp;&nbsp;
                                </h5>
                                <div
                                    css={CSS_NODE}
                                    style={{
                                        backgroundColor: theme.colors.primary,
                                    }}
                                    className="timeline-node"
                                >
                                    {/* Draw an extra circle to highlight the currently hovered event. */}
                                    {index === hoveredEventIndex && (
                                        <div
                                            css={CSS_CURRENT_WORKPLACE_NODE}
                                            style={{
                                                border: `0.18rem ${theme.colors.primary} solid`,
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                            <div css={CSS_CONTENT}>
                                {!!url ? (
                                    <a
                                        css={CSS_WORKPLACE_NAME_LINK}
                                        href={url ? url : ''}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        onMouseEnter={() => {
                                            setHoveredEventIndex(index);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredEventIndex(undefined);
                                        }}
                                    >
                                        <div
                                            css={CSS_WORKPLACE_NAME}
                                            style={{
                                                color: theme.colors.primary,
                                                textDecoration: 'underline',
                                            }}
                                        >
                                            {name}
                                        </div>
                                    </a>
                                ) : (
                                    <div
                                        css={CSS_WORKPLACE_NAME}
                                        style={{ color: theme.colors.primary }}
                                    >
                                        {name}
                                    </div>
                                )}
                                {!!role && (
                                    <h4
                                        style={{
                                            color: theme.colors.text.dark,
                                        }}
                                    >
                                        {role}
                                    </h4>
                                )}
                                {!!details && (
                                    <div css={CSS_DETAILS}>
                                        {details.split('\n').map((line) => {
                                            return <div>{line}</div>;
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Timeline;

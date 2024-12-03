/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import {
    shouldTextBeSmaller,
    useScreenSizeHorizontalBreakpoints,
} from '../../../hooks/useScreenSizeBreakpoints';
import { convertLongMonthToShortMonth } from '../../../utils/date';
import {
    GENERAL_NODE_SIZE,
    HORIZONTAL_GAP_LARGE,
    HORIZONTAL_GAP_SMALL,
    LARGE_NODE_SIZE,
    ONE_SIDE_WIDTH,
    VERTICAL_GAP,
} from './timeline_defs';

const CSS_NODE = css({
    position: 'relative',
    width: GENERAL_NODE_SIZE,
    height: GENERAL_NODE_SIZE,
    borderRadius: '50%',
    cursor: 'pointer',
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
    fontSize: '1.3rem',
    fontWeight: 'normal',
    margin: 0,
});

interface TimelineLineAndDateProps {
    startDate: string;
    endDate: string;
    isSelected: boolean;
    url?: string;
    setHoveredIndexToCurrent: () => void;
    resetHoveredIndex: () => void;
}

function TimelineLineAndDate(props: TimelineLineAndDateProps) {
    const {
        startDate,
        endDate,
        isSelected,
        url,
        setHoveredIndexToCurrent,
        resetHoveredIndex,
    } = props;

    const theme = useTheme();
    const screenSize = useScreenSizeHorizontalBreakpoints();

    const horizontalGap = shouldTextBeSmaller(screenSize)
        ? HORIZONTAL_GAP_SMALL
        : HORIZONTAL_GAP_LARGE;
    const displayedStartDate = shouldTextBeSmaller(screenSize)
        ? convertLongMonthToShortMonth(startDate)
        : startDate;
    const displayedEndDate = shouldTextBeSmaller(screenSize)
        ? convertLongMonthToShortMonth(endDate)
        : endDate;
    return (
        <div
            css={css`
                position: relative;
                height: auto;
                margin: 0 ${horizontalGap};
                ::after {
                    position: absolute;
                    content: '';
                    width: 0.2rem;
                    background-color: ${theme.colors.primary};
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    top: ${GENERAL_NODE_SIZE};
                    bottom: calc(-1 * ${VERTICAL_GAP});
                }
            `}
            className="timeline-node-parent"
        >
            <div
                css={css`
                    ${CSS_DATE};
                    color: ${theme.colors.neutral.grey_5};
                    font-family: ${theme.fonts.text};

                    @media screen and (max-width: ${theme.breakpoints.horizontal
                            .textAndImageSize}) {
                        font-size: 0.9rem;
                    }
                `}
                style={{
                    right: `calc(100% + ${horizontalGap})`,
                }}
                aria-label={`${displayedStartDate} to ${displayedEndDate}`}
            >
                {displayedStartDate} -
                <br />
                {displayedEndDate}&nbsp;&nbsp;
            </div>
            {url ? (
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    onMouseEnter={setHoveredIndexToCurrent}
                    onMouseLeave={resetHoveredIndex}
                    aria-labelledby={`timeline-event-${url}`}
                    // This link is hidden and not focusable because we have a duplicate link in TimelineEvent.tsx.
                    aria-hidden="true"
                    tabIndex={-1}
                >
                    <div
                        css={CSS_NODE}
                        style={{
                            backgroundColor: theme.colors.primary,
                        }}
                        className="timeline-node"
                    >
                        {/* Draw an extra circle to highlight the currently hovered event. */}
                        {isSelected && (
                            <div
                                css={CSS_CURRENT_WORKPLACE_NODE}
                                style={{
                                    border: `0.18rem ${theme.colors.primary} solid`,
                                }}
                            />
                        )}
                    </div>
                </a>
            ) : (
                <div
                    css={CSS_NODE}
                    onMouseEnter={setHoveredIndexToCurrent}
                    onMouseLeave={resetHoveredIndex}
                    style={{
                        backgroundColor: theme.colors.primary,
                        cursor: 'auto',
                    }}
                    className="timeline-node"
                >
                    {/* Draw an extra circle to highlight the currently hovered event. */}
                    {isSelected && (
                        <div
                            css={CSS_CURRENT_WORKPLACE_NODE}
                            style={{
                                border: `0.18rem ${theme.colors.primary} solid`,
                            }}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default TimelineLineAndDate;

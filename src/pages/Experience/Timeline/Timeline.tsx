/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ExperiencesType } from '../../../data/experiences';
import { useState } from 'react';
import {
    shouldTextBeSmaller,
    useScreenSizeHorizontalBreakpoints,
} from '../../../hooks/useScreenSizeBreakpoints';
import { VERTICAL_GAP } from './timeline_defs';
import TimelineLineAndDate from './TimelineLineAndDate';
import TimelineEvent from './TimelineEvent';

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

interface TimelineProps {
    events: ExperiencesType;
}

function Timeline(props: TimelineProps) {
    const { events } = props;
    const [hoveredEventIndex, setHoveredEventIndex] = useState<number>();
    const screenSize = useScreenSizeHorizontalBreakpoints();

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
                return (
                    <div key={index} css={CSS_TIMELINE_EVENT_WRAPPER}>
                        <div css={CSS_TIMELINE_EVENT}>
                            <TimelineLineAndDate
                                startDate={startDate}
                                endDate={endDate}
                                isSelected={index === hoveredEventIndex}
                                url={url}
                                setHoveredIndexToCurrent={() => {
                                    setHoveredEventIndex(index);
                                }}
                                resetHoveredIndex={() => {
                                    setHoveredEventIndex(undefined);
                                }}
                            />
                            <TimelineEvent
                                name={name}
                                details={details}
                                role={role}
                                url={url}
                                setHoveredIndexToCurrent={() => {
                                    setHoveredEventIndex(index);
                                }}
                                resetHoveredIndex={() => {
                                    setHoveredEventIndex(undefined);
                                }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Timeline;

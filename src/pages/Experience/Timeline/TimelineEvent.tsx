/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { GENERAL_NODE_SIZE } from './timeline_defs';

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

interface TimelineEventProps {
    name: string;
    details?: string;
    role?: string;
    url: string;
    setHoveredIndexToCurrent: () => void;
    resetHoveredIndex: () => void;
}

function TimelineEvent(props: TimelineEventProps) {
    const {
        name,
        details,
        role,
        url,
        setHoveredIndexToCurrent,
        resetHoveredIndex,
    } = props;
    const theme = useTheme();

    return (
        <div css={CSS_CONTENT}>
            {url ? (
                <a
                    id={`timeline-event-${url}`}
                    css={CSS_WORKPLACE_NAME_LINK}
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    onMouseEnter={setHoveredIndexToCurrent}
                    onMouseLeave={resetHoveredIndex}
                    aria-label={`${name} in new tab`}
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
                    style={{
                        color: theme.colors.primary,
                    }}
                >
                    {name}
                </div>
            )}
            {!!role && (
                <h2
                    style={{
                        color: theme.colors.text.dark,
                    }}
                >
                    {role}
                </h2>
            )}
            {!!details && (
                <div css={CSS_DETAILS}>
                    {details.split('\n').map((line) => {
                        return <div key={line}>{line}</div>;
                    })}
                </div>
            )}
        </div>
    );
}

export default TimelineEvent;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const CSS_TOOLTIP_WRAPPER = css({
    display: 'inline-block',
    position: 'relative',
});

const CSS_TOOLTIP = css({
    backgroundColor: '#333333',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 500,
    left: '50%',
    padding: '4px 8px',
    position: 'absolute',
    top: 'calc(100% + 4px)',
    transform: 'translateX(-50%)',
    whiteSpace: 'nowrap',
    zIndex: 1,
});

const CSS_TOOLTIP_TRIGGER = css({
    display: 'flex',
    '&:hover + .tooltip': {
        visibility: 'visible',
    },
});

interface TooltipProps {
    children: React.ReactNode;
    tooltip: string;
    /**
     * If overrideShow is set to true, then the tooltip will show up
     * regardless of whether the child is being hovered.
     */
    overrideShow?: boolean;
}

function Tooltip(props: TooltipProps) {
    const { children, tooltip, overrideShow } = props;
    return (
        <div css={CSS_TOOLTIP_WRAPPER}>
            <div css={overrideShow ? undefined : CSS_TOOLTIP_TRIGGER}>
                {children}
            </div>
            <div
                css={[
                    CSS_TOOLTIP,
                    { visibility: overrideShow ? 'visible' : 'hidden' },
                ]}
                className="tooltip"
            >
                {tooltip}
            </div>
        </div>
    );
}

export default Tooltip;

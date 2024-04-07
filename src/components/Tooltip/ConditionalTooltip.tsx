import Tooltip from './Tooltip';

interface ConditionalTooltipProps {
    children: React.ReactNode;
    tooltip: string;
    showTooltip: boolean;
}

function ConditionalTooltip(props: ConditionalTooltipProps) {
    const { children, tooltip, showTooltip } = props;
    return showTooltip ? (
        <Tooltip tooltip={tooltip} overrideShow>
            {children}
        </Tooltip>
    ) : (
        <>{children}</>
    );
}

export default ConditionalTooltip;

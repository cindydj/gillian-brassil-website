/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { getBoldFontWeight } from '../../../utils/text_formatting';
import { useScreenSizeBreakpoints } from '../../../hooks/useScreenSizeBreakpoints';
import ConditionalLink from '../../ConditionalLink/ConditionalLink';

interface LinkableRowContentProps {
    children: React.ReactNode;
    link: string;
    /**
     * There is default background color update when the hover state changes.
     * However, the parent can also control the hover state.
     */
    setIsHovered: (isHovered: boolean) => void;
    isHovered: boolean;
}

function LinkableRowContent(props: LinkableRowContentProps) {
    const { children, link, setIsHovered, isHovered } = props;
    const theme = useTheme();
    const screenSize = useScreenSizeBreakpoints();

    const cssPuzzleLinkHover = css({
        '&:hover': {
            backgroundColor: theme.colors.hover,
        },
    });
    const cssPuzzleLinkWrapper = css({
        alignItems: 'center',
        color: theme.colors.primary,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        fontWeight: getBoldFontWeight(screenSize),
    });
    const cssPuzzleLink = css({
        alignItems: 'center',
        boxSizing: 'border-box',
        color: theme.colors.primary,
        display: 'flex',
        height: '100%',
        padding: '10px',
        width: '100%',
    });
    return (
        <div
            css={[cssPuzzleLinkWrapper, isHovered ? cssPuzzleLinkHover : {}]}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ConditionalLink link={link} css={cssPuzzleLink}>
                {children}
            </ConditionalLink>
        </div>
    );
}

export default LinkableRowContent;

/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import ConditionalLink from '../ConditionalLink/ConditionalLink';
import { useScreenSizeBreakpoints } from '../../hooks/useScreenSizeBreakpoints';
import { getBoldFontWeight } from '../../utils/text_formatting';

export enum MenuItemType {
    PRIMARY_BACKGROUND = 'invisible_on_dark',
    WHITE_BACKGROUND = 'invisible_on_white',
}

interface DropdownMenuItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    link?: string;
    isSelected?: boolean;
    isDisabled?: boolean;
    menuItemType?: MenuItemType;
}

function DropdownMenuItem(props: DropdownMenuItemProps) {
    const {
        children,
        onClick,
        link,
        isSelected,
        isDisabled,
        menuItemType: menuItemTypeInput,
    } = props;
    const screenSize = useScreenSizeBreakpoints();
    const theme = useTheme();

    const menuItemType = menuItemTypeInput ?? MenuItemType.WHITE_BACKGROUND;
    const textColor =
        theme.colors.button[`${menuItemType}_${isSelected ? 'selected' : 'base'}_text_color`];
    const cssMenuItem = css({
        backgroundColor:
            theme.colors.button[
                `${menuItemType}_${isSelected ? 'selected' : 'base'}_background_color`
            ],
        '&:hover': {
            color: textColor,
            backgroundColor:
                theme.colors.button[
                    `${menuItemType}_${isSelected ? 'selected' : 'hover'}_background_color`
                ],
        },
        boxSizing: 'border-box',
        cursor: !isDisabled ? 'pointer' : 'auto',
        display: 'flex',
        fontWeight: getBoldFontWeight(screenSize),
        padding: '8px 16px',
        textDecoration: 'none',
        // Standard syntax to prevent text selection on double click.
        userSelect: 'none',
        width: '100%',
    });
    const cssLinkColor = css({
        '&:hover': {
            color: textColor,
        },
        color: textColor,
    });

    return (
        <ConditionalLink
            link={!isDisabled ? link : undefined}
            css={[cssMenuItem, cssLinkColor]}
            onClick={!isDisabled ? onClick : undefined}
        >
            {children}
        </ConditionalLink>
    );
}

export default DropdownMenuItem;

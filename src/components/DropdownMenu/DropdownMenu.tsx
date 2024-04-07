/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import ActionButton, { ActionButtonProps, ButtonState } from '../ActionButton/ActionButton';
import { css, useTheme } from '@emotion/react';
import DropdownMenuItem from './DropdownMenuItem';
import { ReactComponent as ArrowDropdownIcon } from '../../assets/icons/arrow_drop_down.svg';

export type MenuItemType = {
    [text: string]: {
        link?: string;
        onClick?: () => void;
        isDisabled?: boolean;
        customMenuItemContent?: React.ReactNode;
    };
};

interface DropdownMenuProps {
    buttonProps: Omit<ActionButtonProps, 'onClick' | 'children'> & {
        text: string;
    };
    menuItems: MenuItemType;
    /**
     * The text of the selected menu item.
     */
    selectedItem?: string;
    label?: string;
    opensLeft?: boolean;
    opensOnHover?: boolean;
    width?: string;
}

const CSS_LABEL = css({
    cursor: 'text',
    display: 'flex',
    fontSize: '15px',
    fontWeight: 450,
    paddingBottom: '7px',
    paddingRight: '8px',
    paddingLeft: '2px',
    width: 'fit-content',
});

const CSS_DROPDOWN_MENU = css({
    position: 'relative',
});

const CSS_BUTTON_CONTENT = css({
    alignItems: 'center',
    display: 'flex',
    width: '100%',
});

const CSS_BUTTON_TEXT = css({
    flex: 1,
});

/**
 * Dropdown menu containing text-only menu items. This menu opens on hover
 * and does not support any action upon clicking on the parent button.
 */
function DropdownMenu(props: DropdownMenuProps) {
    // TODO: Detect clicks outside of dropdown menu to close menu (+ escape key).
    const { buttonProps, menuItems, selectedItem, label, opensLeft, opensOnHover, width } = props;
    const { text, buttonStateOverride, ...otherButtonProps } = buttonProps;
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    const cssDropdownMenuContent = css({
        paddingTop: '4px',
        position: 'absolute',
        right: opensLeft ? '0px' : 'auto',
        width,
        zIndex: 10,
    });

    const cssMenuItemWrapper = css({
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: `2px 2px 6px ${theme.colors.text.dark}`,
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 0px',
    });

    return (
        <div
            css={CSS_DROPDOWN_MENU}
            onMouseEnter={() => {
                if (opensOnHover) {
                    setIsOpen(true);
                }
            }}
            onMouseLeave={() => {
                if (opensOnHover) {
                    setIsOpen(false);
                }
            }}
        >
            {label && (
                <label htmlFor={label} css={CSS_LABEL}>
                    {label}
                </label>
            )}
            <div id={label ?? text}>
                <ActionButton
                    {...otherButtonProps}
                    buttonStateOverride={
                        buttonStateOverride || (isOpen ? ButtonState.HOVERED : ButtonState.DEFAULT)
                    }
                    onClick={() => {
                        if (!opensOnHover) {
                            setIsOpen(!isOpen);
                        }
                    }}
                >
                    <div css={CSS_BUTTON_CONTENT}>
                        <div css={CSS_BUTTON_TEXT}>{text}</div>
                        {!opensOnHover && <ArrowDropdownIcon width="24px" height="24px" />}
                    </div>
                </ActionButton>
            </div>
            {isOpen && (
                <div css={cssDropdownMenuContent}>
                    <div css={cssMenuItemWrapper}>
                        {Object.entries(menuItems).map(
                            ([menuItem, { link, onClick, isDisabled, customMenuItemContent }]) => {
                                return (
                                    <DropdownMenuItem
                                        key={menuItem}
                                        onClick={() => {
                                            onClick?.();
                                            setIsOpen(false);
                                        }}
                                        link={link}
                                        isSelected={menuItem === selectedItem}
                                        isDisabled={isDisabled}
                                    >
                                        {customMenuItemContent ?? menuItem}
                                    </DropdownMenuItem>
                                );
                            },
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;

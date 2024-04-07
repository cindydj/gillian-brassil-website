/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeaderMenu from './HeaderMenu';
import DropdownMenuItem, { MenuItemType } from '../../components/DropdownMenu/DropdownMenuItem';
import ActionButton, { ButtonState, ButtonType } from '../../components/ActionButton/ActionButton';

const CSS_NAVIGATION_BAR = css({
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    margin: '0px',
});

interface NavigationOptionButtonProps {
    pageName: string;
    isMenu?: boolean;
}

function NavigationOptionButton(props: NavigationOptionButtonProps) {
    const { pageName, isMenu } = props;

    return (
        <li>
            {isMenu ? (
                <DropdownMenuItem
                    key={pageName}
                    link="/placeholder"
                    menuItemType={MenuItemType.PRIMARY_BACKGROUND}
                    isSelected={false}
                >
                    {pageName}
                </DropdownMenuItem>
            ) : (
                <ActionButton
                    key={pageName}
                    link="/placeholder"
                    buttonType={ButtonType.INVISIBLE}
                    buttonStateOverride={
                        false ? ButtonState.SELECTED : ButtonState.DEFAULT
                    }
                >
                    {pageName}
                </ActionButton>
            )}
        </li>
    );
}

interface NavigationOptionsContentProps {
    isMenu?: boolean;
}

function NavigationOptionsContent(props: NavigationOptionsContentProps) {
    const { isMenu } = props;
    return (
        <>
            <NavigationOptionButton pageName="About Me" isMenu={isMenu} />
            <NavigationOptionButton pageName="Contact" isMenu={isMenu} />
        </>
    );
}

interface NavigationOptionsProps {
    isMenu?: boolean;
}

/**
 * Navigation options shown in the top right of the page.
 * The buttons/dropdown menus are programatically generated from the hard-coded data.
 */
function NavigationOptions(props: NavigationOptionsProps) {
    const { isMenu } = props;
    return (
        <nav>
            <ul css={CSS_NAVIGATION_BAR}>
                {isMenu ? (
                    <HeaderMenu>
                        <NavigationOptionsContent isMenu />
                    </HeaderMenu>
                ) : (
                    <NavigationOptionsContent />
                )}
            </ul>
        </nav>
    );
}

export default NavigationOptions;

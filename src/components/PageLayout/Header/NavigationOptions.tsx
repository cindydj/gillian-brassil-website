/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeaderMenu from './HeaderMenu';
import DropdownMenuItem, {
    MenuItemType,
} from '../../DropdownMenu/DropdownMenuItem';
import ActionButton, {
    ButtonState,
    ButtonType,
} from '../../ActionButton/ActionButton';
import { convertToPathName } from '../../../utils/url';
import { useLocation } from 'react-router';

const CSS_NAVIGATION_BAR = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    listStyleType: 'none',
    margin: '0px',
});

interface NavigationOptionButtonProps {
    pageName: string;
    isMenu?: boolean;
}

function NavigationOptionButton(props: NavigationOptionButtonProps) {
    const { pageName, isMenu } = props;
    const location = useLocation();

    const isOptionSelected = convertToPathName(pageName) === location.pathname;

    return (
        <li>
            {isMenu ? (
                <DropdownMenuItem
                    key={pageName}
                    link={convertToPathName(pageName)}
                    menuItemType={MenuItemType.WHITE_BACKGROUND}
                    isSelected={isOptionSelected}
                >
                    {pageName}
                </DropdownMenuItem>
            ) : (
                <ActionButton
                    key={pageName}
                    link={convertToPathName(pageName)}
                    buttonType={ButtonType.INVISIBLE_ON_WHITE}
                    buttonStateOverride={
                        isOptionSelected
                            ? ButtonState.SELECTED
                            : ButtonState.DEFAULT
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
            <NavigationOptionButton pageName="About" isMenu={isMenu} />
            <NavigationOptionButton pageName="Experience" isMenu={isMenu} />
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

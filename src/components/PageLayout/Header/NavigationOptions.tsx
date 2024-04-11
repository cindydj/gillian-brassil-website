/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeaderMenu from './HeaderMenu';
import DropdownMenuItem, {
    MenuItemType,
} from '../../DropdownMenu/DropdownMenuItem';
import { convertToPathName } from '../../../utils/url';
import { useLocation } from 'react-router';
import NavigationButton from '../../Button/NavigationButton/NavigationButton';
import { ButtonState } from '../../Button/button_defs';

const CSS_NAVIGATION_BAR = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '1.5rem',
    listStyleType: 'none',
    margin: '0px',
});

interface NavigationOptionItemProps {
    pageName: string;
    isMenu?: boolean;
}

function NavigationOptionItem(props: NavigationOptionItemProps) {
    const { pageName, isMenu } = props;
    const location = useLocation();

    const link = convertToPathName(pageName);
    let isOptionSelected = convertToPathName(pageName) === location.pathname;

    return (
        <li>
            {isMenu ? (
                <DropdownMenuItem
                    key={pageName}
                    link={link}
                    menuItemType={MenuItemType.WHITE_BACKGROUND}
                    isSelected={isOptionSelected}
                >
                    {pageName}
                </DropdownMenuItem>
            ) : (
                <NavigationButton
                    key={pageName}
                    link={link}
                    buttonStateOverride={
                        isOptionSelected
                            ? ButtonState.SELECTED
                            : ButtonState.DEFAULT
                    }
                >
                    {pageName}
                </NavigationButton>
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
            <NavigationOptionItem pageName="About" isMenu={isMenu} />
            <NavigationOptionItem pageName="Experience" isMenu={isMenu} />
            <NavigationOptionItem pageName="Contact" isMenu={isMenu} />
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

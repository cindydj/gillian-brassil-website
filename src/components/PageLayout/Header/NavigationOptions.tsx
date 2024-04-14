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
import { createInternalUrl } from '../../../utils/router';

const PAGE_NAMES = ['About', 'Experience', 'Contact'];

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

    const link = createInternalUrl(convertToPathName(pageName));
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
            {PAGE_NAMES.map((pageName) => {
                return (
                    <NavigationOptionItem
                        pageName={pageName}
                        key={pageName}
                        isMenu={isMenu}
                    />
                );
            })}
        </>
    );
}

interface NavigationOptionsProps {
    isMenu?: boolean;
    isOpen?: boolean;
}

/**
 * Navigation options shown in the top right of the page.
 * The buttons/dropdown menus are programatically generated from the hard-coded data.
 */
function NavigationOptions(props: NavigationOptionsProps) {
    const { isMenu, isOpen } = props;
    return (
        <ul css={CSS_NAVIGATION_BAR}>
            {isMenu ? (
                <HeaderMenu isOpen={!!isOpen} items={PAGE_NAMES}>
                    <NavigationOptionsContent isMenu />
                </HeaderMenu>
            ) : (
                <NavigationOptionsContent />
            )}
        </ul>
    );
}

export default NavigationOptions;

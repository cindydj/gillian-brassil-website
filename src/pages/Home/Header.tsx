/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import ActionButton, {
    ButtonType,
} from '../../components/ActionButton/ActionButton';
import NavigationOptions from './NavigationOptions';
import { Link } from 'react-router-dom';
import MiddleDot from '../../components/MiddleDot/MiddleDot';

const CSS_HOME_NAVIGATION_WRAPPER = css({
    flex: 1,
});

const CSS_HOME_NAVIGATION = css({
    alignItems: 'center',
    display: 'flex',
    color: 'black',
    cursor: 'pointer',
    fontSize: '2.5rem',
    textDecoration: 'none',
    transition: '.2s all',
    whiteSpace: 'nowrap',
    width: 'fit-content',
});

interface HeaderProps {
    isMenu?: boolean;
}

/**
 * Website header that contains the "Home" logo and navigation options.
 * Every page should have this header via the PageLayout component.
 */
function Header(props: HeaderProps) {
    const { isMenu } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const cssHeaderContext = css({
        alignItems: 'center',
        display: 'flex',
        gap: '1rem',
        margin: '0 auto',
        padding: '0.5rem 1.8rem',
    });

    return (
        <div>
            <div css={cssHeaderContext}>
                <div css={CSS_HOME_NAVIGATION_WRAPPER}>
                    <Link
                        css={[CSS_HOME_NAVIGATION]}
                        style={{ fontFamily: 'Spectral' }}
                        to="/"
                    >
                        g<MiddleDot isSmall />b
                    </Link>
                </div>
                {!isMenu && <NavigationOptions />}
                {isMenu && (
                    <ActionButton
                        buttonType={ButtonType.INVISIBLE}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        isIcon
                    >
                        <MenuIcon width="24px" height="24px" />
                    </ActionButton>
                )}
            </div>
            {isMenuOpen && <NavigationOptions isMenu />}
        </div>
    );
}

export default Header;

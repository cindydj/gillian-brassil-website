/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';

import MiddleDot from '../../MiddleDot/MiddleDot';
import NavigationOptions from './NavigationOptions';
import { createInternalUrl } from '../../../utils/router';
import ConditionalLink from '../../ConditionalLink/ConditionalLink';

const CSS_HEADER_CONTEXT = css({
    alignItems: 'center',
    display: 'flex',
    gap: '1rem',
    margin: '0 auto',
    padding: '0.5rem 1.8rem',
    position: 'relative',
    zIndex: 2,
});

const CSS_HOME_NAVIGATION_WRAPPER = css({
    flex: 1,
});

const CSS_HOME_NAVIGATION = css({
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    fontFamily: 'Spectral',
    whiteSpace: 'nowrap',
});

const CSS_MENU_ICON = css({
    position: 'relative',
    width: '30px',
    height: '30px',
    transition: 'transform 0.3s',
    ':hover': {
        cursor: 'pointer',
    },
});

const MENU_BAR_CSS_SHARED = {
    left: '3px',
    width: '23px',
    height: '2px',
};

const CSS_MENU_BAR_1 = css({
    position: 'absolute',
    transition: 'transform .5s ease .1s,background .4s ease 0ms',
    ...MENU_BAR_CSS_SHARED,
});

const CSS_MENU_BAR_2 = css({
    position: 'absolute',
    transition: 'opacity .5s ease,background .4s ease',
    ...MENU_BAR_CSS_SHARED,
});

const CSS_MENU_BAR_3 = css({
    position: 'absolute',
    transition: 'transform .5s ease .1s,background .4s ease 0ms',
    ...MENU_BAR_CSS_SHARED,
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
    const theme = useTheme();

    return (
        <div>
            <div
                css={CSS_HEADER_CONTEXT}
                style={{
                    backgroundColor: theme.colors.background.general,
                }}
            >
                <div css={CSS_HOME_NAVIGATION_WRAPPER}>
                    <ConditionalLink
                        css={CSS_HOME_NAVIGATION}
                        style={{
                            fontSize: isMenu ? '2rem' : '2.5rem',
                            color: theme.colors.primary,
                        }}
                        link={createInternalUrl('/')}
                        ariaLabel="Gillian Brassil logo"
                    >
                        g<MiddleDot isSmall />b
                    </ConditionalLink>
                </div>
                {!isMenu && <NavigationOptions />}
                {isMenu && (
                    <div
                        css={CSS_MENU_ICON}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div
                            css={CSS_MENU_BAR_1}
                            style={{
                                top: isMenuOpen ? '6.5px' : '6px',
                                background: theme.colors.text.dark,
                                transform: isMenuOpen
                                    ? 'rotate(45deg) translate3d(6px, 5.5px, 0)'
                                    : 'none',
                            }}
                        />
                        <div
                            css={CSS_MENU_BAR_2}
                            style={{
                                top: '14px',
                                opacity: isMenuOpen ? '0' : '1',
                                background: theme.colors.text.dark,
                            }}
                        />
                        <div
                            css={CSS_MENU_BAR_3}
                            style={{
                                top: '22px',
                                background: theme.colors.text.dark,
                                transform: isMenuOpen
                                    ? 'rotate(-45deg) translate3d(5.5px, -5px, 0)'
                                    : 'none',
                            }}
                        />
                    </div>
                )}
            </div>
            {isMenu && <NavigationOptions isMenu isOpen={isMenuOpen} />}
        </div>
    );
}

export default Header;

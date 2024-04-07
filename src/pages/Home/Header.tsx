/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useState } from "react";

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

const CSS_HOME_NAVIGATION_WRAPPER = css({
    flex: 1,
});

const CSS_HOME_NAVIGATION = css({
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    gap: '8px',
    textDecoration: 'none',
    transition: '.2s all',
    whiteSpace: 'nowrap',
    width: 'fit-content',
});

const CSS_LOGO = css({
    height: '40px',
    width: '40px',
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

    const cssHeaderContext = css({
        alignItems: 'center',
        display: 'flex',
        gap: '4px',
        margin: '0 auto',
        padding: '12px',
    });

    const cssHomeText = css({
        color: 'red',
        fontWeight: 400,
        // Standard syntax to prevent text selection on double click.
        userSelect: 'none',
    });

    return (
        <div css={[{ backgroundColor: theme.colors.primary }]}>
            <div css={cssHeaderContext}>
                <div css={CSS_HOME_NAVIGATION_WRAPPER}>
                    {/* <Link css={[CSS_HOME_NAVIGATION]} to="/">
                        <OrangeLogo css={CSS_LOGO} />
                        <h1 css={cssHomeText}>Vitamin C Squad</h1>
                    </Link> */}
                </div>
                {/* {!isMenu && <NavigationOptions />} */}
                {isMenu && (
                    // <ActionButton
                    //     buttonType={ButtonType.INVISIBLE}
                    //     onClick={() => setIsMenuOpen(!isMenuOpen)}
                    //     isIcon
                    // >
                    <MenuIcon width="24px" height="24px" />
                    // </ActionButton>
                )}
            </div>
            {/* {isMenuOpen && <NavigationOptions isMenu />} */}
        </div>
    );
}

export default Header;

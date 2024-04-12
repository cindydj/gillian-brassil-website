/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

const APPROXIMATE_NAVIGATION_OPTION_HEIGHT = 3.2;

const CSS_HEADER_MENU_OPTIONS = css({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    left: '0px',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'max-height 0.3s ease-in-out, padding-bottom 0.05s ease-in-out',
    width: '100%',
    zIndex: 2,
});

const CSS_SCREEN = css({
    backgroundColor: 'rgba(0, 0, 0, 70%)',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
});

interface HeaderMenuProps {
    children: React.ReactNode;
    isOpen: boolean;
    items: string[];
}

function HeaderMenu(props: HeaderMenuProps) {
    const { children, isOpen, items } = props;
    const theme = useTheme();

    return (
        <>
            <div
                css={CSS_HEADER_MENU_OPTIONS}
                style={{
                    backgroundColor: theme.colors.background.general,
                    maxHeight: isOpen
                        ? `${APPROXIMATE_NAVIGATION_OPTION_HEIGHT * items.length}rem`
                        : '0',
                    paddingBottom: isOpen ? '0.5rem' : '0',
                }}
            >
                {children}
            </div>

            {/* Grey out the background so that the header is in focus. */}
            {isOpen && <div css={CSS_SCREEN} />}
        </>
    );
}

export default HeaderMenu;

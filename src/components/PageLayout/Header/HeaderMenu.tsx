/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

const CSS_HEADER_MENU_OPTIONS = css({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    left: '0px',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'max-height 0.2s ease-in-out, padding-bottom 0.2s ease-in-out',
    width: '100%',
    zIndex: 2,
});

interface HeaderMenuProps {
    children: React.ReactNode;
    isOpen: boolean;
}

function HeaderMenu(props: HeaderMenuProps) {
    const { children, isOpen } = props;
    const theme = useTheme();

    return (
        <>
            <div
                css={CSS_HEADER_MENU_OPTIONS}
                style={{
                    backgroundColor: theme.colors.background.general,
                    maxHeight: isOpen ? '100vh' : '0',
                    paddingBottom: isOpen ? '0.5rem' : '0',
                }}
            >
                {children}
            </div>
        </>
    );
}

export default HeaderMenu;

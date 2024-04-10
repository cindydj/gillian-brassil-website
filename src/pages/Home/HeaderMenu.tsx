/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface HeaderMenuProps {
    children: React.ReactNode;
}

function HeaderMenu(props: HeaderMenuProps) {
    const { children } = props;

    const cssHeaderMenuOptions = css({
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        left: '0px',
        paddingBottom: '8px',
        position: 'absolute',
        width: '100%',
        zIndex: 1,
    });

    return <div css={cssHeaderMenuOptions}>{children}</div>;
}

export default HeaderMenu;

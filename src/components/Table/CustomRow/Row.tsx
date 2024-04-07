/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

interface RowProps {
    children: React.ReactNode;
}

function Row(props: RowProps) {
    const { children } = props;
    const theme = useTheme();

    const cssRow = css({
        '&:first-of-type': {
            borderTop: `1px solid ${theme.colors.neutral.grey_3}`,
        },
        borderBottom: `1px solid ${theme.colors.neutral.grey_3}`,
        display: 'flex',
    });
    return <div css={cssRow}>{children}</div>;
}

export default Row;

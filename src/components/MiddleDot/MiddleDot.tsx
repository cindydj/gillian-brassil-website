/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const CSS_MIDDLE_DOT = css({
    margin: '0 0.1vw',
});

function MiddleDot() {
    return <span css={CSS_MIDDLE_DOT}>•</span>;
}

export default MiddleDot;

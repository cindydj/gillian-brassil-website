/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import BANNER_PROFILE_PICTURE from '../../assets/images/gillian_banner.jpg';
import MiddleDot from '../MiddleDot/MiddleDot';

const CSS_BANNER = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '28vw',
    width: '100%',
});

const CSS_BANNER_TEXT = css({
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    margin: '0 8vw',
});

const CSS_SUBTITLE = css({
    marginTop: '-0.7vw',
});

const CSS_BODY_TEXT = css({
    marginTop: '1.2vw',
});

const CSS_PROFILE_PICTURE = css({
    height: '28vw',
    width: '28vw',
    objectFit: 'cover',
    objectPosition: '0 100%',
    clipPath: 'polygon(30% 0, 0 100%, 100% 100%, 100% 0)',
});

function Banner() {
    const theme = useTheme();

    return (
        <div
            css={CSS_BANNER}
            style={{
                backgroundImage: `linear-gradient(to right, ${theme.colors.background.header_left} , ${theme.colors.background.header_right})`,
                color: theme.colors.text.light,
            }}
        >
            <div css={CSS_BANNER_TEXT}>
                <h1>
                    gil
                    <MiddleDot />
                    li
                    <MiddleDot />
                    an bras
                    <MiddleDot />
                    sil
                </h1>
                <h2 css={CSS_SUBTITLE}>
                    writer, multimedia reporter, political correspondant
                </h2>
                <h3 css={CSS_BODY_TEXT}>
                    Reporting from Capitol Hill about decisions that impact.
                </h3>
            </div>
            <img
                src={BANNER_PROFILE_PICTURE}
                alt="Gillian Brassil"
                css={CSS_PROFILE_PICTURE}
            />
        </div>
    );
}

export default Banner;

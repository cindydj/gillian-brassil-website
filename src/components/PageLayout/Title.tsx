/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BackButton from '../BackButton/BackButton';

const CSS_TITLE_WITH_BACK_BUTTON = css({
    margin: '0 2rem',
});

const CSS_PAGE_TITLE = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
});

interface TitleProps {
    children: string;
    backButtonLink?: string;
}

function Title(props: TitleProps) {
    const { children: title, backButtonLink } = props;
    return backButtonLink ? (
        <>
            <BackButton link={backButtonLink} />
            <div css={CSS_TITLE_WITH_BACK_BUTTON}>
                <h3 css={CSS_PAGE_TITLE}>{title}</h3>
            </div>
        </>
    ) : (
        <h3 css={CSS_PAGE_TITLE}>{title}</h3>
    );
}

export default Title;

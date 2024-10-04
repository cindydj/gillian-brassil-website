/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BackButton from '../Button/BackButton/BackButton';

const CSS_TITLE_WITH_BACK_BUTTON = css({
    margin: '0 2rem',
});

const CSS_PAGE_TITLE = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '1rem 0 0 0',
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
                <h1 css={CSS_PAGE_TITLE}>{title}</h1>
            </div>
        </>
    ) : (
        <h1 css={CSS_PAGE_TITLE}>{title}</h1>
    );
}

export default Title;

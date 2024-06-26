/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PageLayout from '../../components/PageLayout/PageLayout';
import ActionButton from '../../components/Button/ActionButton/ActionButton';

const CSS_ERROR_PAGE = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const CSS_HOME_BUTTON = css({
    marginTop: '3rem',
});

function ErrorPage() {
    return (
        <PageLayout title="Oops!">
            <div css={CSS_ERROR_PAGE}>
                Sorry, this page doesn't exist.
                <div css={CSS_HOME_BUTTON}>
                    <ActionButton link="/">Go home</ActionButton>
                </div>
            </div>
        </PageLayout>
    );
}

export default ErrorPage;

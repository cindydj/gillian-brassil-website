/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import PageLayout from '../../components/PageLayout/PageLayout';
import ActionButton from '../../components/ActionButton/ActionButton';

const CSS_INTRO_WRAPPER = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '100%',
    flex: 1,
});

const CSS_INTRO_BLURB = css({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginTop: '1.5rem',
    maxWidth: '80%',
    textAlign: 'center',
});

function HomePage() {
    const theme = useTheme();
    const emphasisStyle = {
        color: theme.colors.text.emphasis,
    };

    return (
        <PageLayout>
            <div css={CSS_INTRO_WRAPPER}>
                <div css={CSS_INTRO_BLURB}>
                    Gillian is a national political correspondent in Washington
                    D.C., relentlessly{' '}
                    <span style={emphasisStyle}>pursuing the truth</span> and
                    holding power to account.
                </div>
                <ActionButton link="/work">See works</ActionButton>
            </div>
        </PageLayout>
    );
}

export default HomePage;

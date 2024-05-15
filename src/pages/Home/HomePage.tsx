/** @jsxImportSource @emotion/react */
import PageLayout from '../../components/PageLayout/PageLayout';
import ActionButton from '../../components/Button/ActionButton/ActionButton';
import { css, useTheme } from '@emotion/react';
import Banner from './Banner';
import {
    isScreenVerySmall,
    shouldHomePageBeMobileFriendly,
    shouldHomePageButtonBeShown,
    useScreenSizeHorizontalBreakpoints,
    useScreenSizeVerticalBreakpoints,
} from '../../hooks/useScreenSizeBreakpoints';
import PROFILE_PICTURE_PATH from '../../assets/images/gillian_home_page_mobile.png';
import { createInternalUrl } from '../../utils/router';

const CSS_PROFILE_IMAGE_WRAPPER = css({
    overflow: 'hidden',
    width: '100%',
});

const CSS_PROFILE_IMAGE = css({
    objectFit: 'cover',
    width: '100%',
    height: '35vh',
});

const CSS_INTRO_WRAPPER = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
});

const CSS_INTRO_BLURB = css({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginTop: '1.5rem',
    maxWidth: '60%',
});

const CSS_MOBILE_WRAPPER = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
});

const CSS_SUBTITLE = css({
    marginTop: '1rem',
    fontWeight: 'bold',
});

const CSS_PRIMARY_BUTTON = css({
    marginTop: '2rem',
});

const CSS_PRIMARY_BUTTON_FOR_SMALL_SCREEN = css({
    marginTop: '1rem',
});

function HomePage() {
    const theme = useTheme();
    const screenSizeHorizontal = useScreenSizeHorizontalBreakpoints();
    const screenSizeVertical = useScreenSizeVerticalBreakpoints();
    const isScreenVerySmallBoolean = isScreenVerySmall(
        screenSizeHorizontal,
        screenSizeVertical,
    );

    const emphasisStyle = {
        color: theme.colors.text.emphasis,
    };

    const experienceLink = createInternalUrl('/experience');

    return shouldHomePageBeMobileFriendly(screenSizeHorizontal) ? (
        <PageLayout
            fullWidthChildren={
                <div css={CSS_PROFILE_IMAGE_WRAPPER}>
                    <img
                        src={PROFILE_PICTURE_PATH}
                        alt="Gillian Brassil"
                        css={CSS_PROFILE_IMAGE}
                    />
                </div>
            }
            isContentCentered
            isMainPage
        >
            <div css={CSS_MOBILE_WRAPPER}>
                {/* 411px is the smallest width where the name fits on one line. */}
                <title
                    style={{
                        fontSize: isScreenVerySmallBoolean
                            ? '2.5rem'
                            : '3.8rem',
                    }}
                >
                    Gillian Brassil
                </title>
                <div
                    css={CSS_SUBTITLE}
                    style={{
                        color: theme.colors.neutral.grey_4,
                        fontSize: isScreenVerySmallBoolean
                            ? '1.8rem'
                            : '2.25rem',
                    }}
                >
                    National political correspondent
                </div>
                {shouldHomePageButtonBeShown(
                    screenSizeHorizontal,
                    screenSizeVertical,
                ) && (
                    <div
                        css={
                            isScreenVerySmallBoolean
                                ? CSS_PRIMARY_BUTTON_FOR_SMALL_SCREEN
                                : CSS_PRIMARY_BUTTON
                        }
                    >
                        <ActionButton link={experienceLink}>
                            See experiences
                        </ActionButton>
                    </div>
                )}
            </div>
        </PageLayout>
    ) : (
        <PageLayout fullWidthChildren={<Banner />} isContentCentered isMainPage>
            <div css={CSS_INTRO_WRAPPER}>
                <div css={CSS_INTRO_BLURB}>
                    Gillian is a national political correspondent in Washington
                    D.C., relentlessly{' '}
                    <span style={emphasisStyle}>pursuing the truth</span> and
                    holding power to account.
                </div>
                <div css={CSS_PRIMARY_BUTTON}>
                    <ActionButton link={experienceLink}>
                        See experiences
                    </ActionButton>
                </div>
            </div>
        </PageLayout>
    );
}

export default HomePage;

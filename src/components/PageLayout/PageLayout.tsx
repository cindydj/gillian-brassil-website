/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

import {
    ScreenSize,
    isLargerThanOrEqual,
    isSmallerThanOrEqual,
    useScreenSizeBreakpoints,
} from '../../hooks/useScreenSizeBreakpoints';
import Header from '../../pages/Home/Header';
import HOME_PROFILE_PICTURE from '../../assets/kiwi_square.png';

const CSS_PAGE_LAYOUT = css({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
});

const CSS_BANNER = css({
    alignItems: 'center',
    borderTop: '1px solid black',
    display: 'flex',
    flexDirection: 'row',
    height: '500px',
    width: '100%',
});

const CSS_BANNER_TEXT = css({
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    gap: '16px',
    marginLeft: '120px',
});

const CSS_TITLE = css({
    fontSize: '90px',
    fontWeight: '500',
});

const CSS_SUBTITLE = css({
    fontSize: '45px',
    fontStyle: 'italic',
});

const CSS_BODY_TEXT = css({
    fontSize: '40px',
});

const CSS_PROFILE_PICTURE = css({
    height: '500px',
    width: '500px',
});

function Banner() {
    const theme = useTheme();

    return (
        <div
            css={CSS_BANNER}
            style={{
                backgroundColor: theme.colors.background.header,
                color: theme.colors.text.light,
            }}
        >
            <div css={CSS_BANNER_TEXT}>
                <div css={CSS_TITLE}>gillian • brassil</div>
                <div css={CSS_SUBTITLE}>
                    writer, multimedia reporter, political correspondant
                </div>
                <div css={CSS_BODY_TEXT}>
                    Reporting, writing and pitching stories from Capitol Hill
                    about issues, ideas and decisions that impact.
                </div>
            </div>
            <img
                src={HOME_PROFILE_PICTURE}
                alt="Gillian Brassil"
                css={CSS_PROFILE_PICTURE}
            />
        </div>
    );
}

interface PageLayoutProps {
    /**
     * Content of the page, under the header.
     */
    children: React.ReactNode;
    maxWidth?: string;
}

/**
 * Structures the overall page, including the header.
 * Every single accessible page on this website should use PageLayout.
 */
function PageLayout(props: PageLayoutProps) {
    const { children, maxWidth } = props;
    const screenSize = useScreenSizeBreakpoints();
    const useMinimalPadding = isSmallerThanOrEqual(
        screenSize,
        ScreenSize.MEDIUM,
    );

    const cssPageContent = css({
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        margin: '0 auto 24px auto',
        padding: useMinimalPadding ? '12px' : '32px',
        width: useMinimalPadding ? '90vw' : '80vw',
        maxWidth: maxWidth ?? '800px',
    });

    return (
        <div css={CSS_PAGE_LAYOUT}>
            <Header
                isMenu={isSmallerThanOrEqual(screenSize, ScreenSize.LARGE)}
            />
            <Banner />
            <div css={cssPageContent}>{children}</div>
        </div>
    );
}

export default PageLayout;

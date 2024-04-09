/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import {
    ScreenSize,
    isLargerThanOrEqual,
    isSmallerThanOrEqual,
    useScreenSizeBreakpoints,
} from '../../hooks/useScreenSizeBreakpoints';
import Header from '../../pages/Home/Header';
import Banner from './Banner';

const CSS_PAGE_LAYOUT = css({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
});

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

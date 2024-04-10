/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import {
    ScreenSize,
    isLargerThanOrEqual,
    isSmallerThanOrEqual,
    useScreenSizeBreakpoints,
} from '../../hooks/useScreenSizeBreakpoints';
import Header from './Header/Header';
import ContactFooter from './ContactFooter';

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
    fullWidthChildren?: React.ReactNode;
}

/**
 * Structures the overall page, including the header.
 * Every single accessible page on this website should use PageLayout.
 */
function PageLayout(props: PageLayoutProps) {
    const { children, maxWidth, fullWidthChildren } = props;
    const screenSize = useScreenSizeBreakpoints();
    const useMinimalPadding = isSmallerThanOrEqual(
        screenSize,
        ScreenSize.MEDIUM,
    );

    const cssPageContent = css({
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        margin: '0 auto 2rem auto',
        padding: useMinimalPadding ? '1rem' : '2rem',
        width: useMinimalPadding ? '80vw' : '60vw',
        maxWidth: maxWidth ?? '100%',
    });

    return (
        <div css={CSS_PAGE_LAYOUT}>
            <Header
                isMenu={isSmallerThanOrEqual(screenSize, ScreenSize.LARGE)}
            />
            {fullWidthChildren}
            <div css={cssPageContent}>{children}</div>
            <ContactFooter />
        </div>
    );
}

export default PageLayout;

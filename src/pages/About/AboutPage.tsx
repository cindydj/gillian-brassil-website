/** @jsxImportSource @emotion/react */
import PageLayout from '../../components/PageLayout/PageLayout';
import GILLIAN_PHOTO from '../../assets/images/gillian_about.jpg';
import { css } from '@emotion/react';
import {
    shouldScreenBeColumn,
    useScreenSizeHorizontalBreakpoints,
} from '../../hooks/useScreenSizeBreakpoints';

const CSS_ABOUT_SECTION = css({
    display: 'flex',
    gap: '3rem',
    marginBottom: '1rem',
});

const CSS_PHOTO = css({
    objectFit: 'scale-down',
});

function AboutPage() {
    const screenSize = useScreenSizeHorizontalBreakpoints();
    const isSmallScreen = shouldScreenBeColumn(screenSize);

    return (
        <PageLayout title="About">
            <div
                css={CSS_ABOUT_SECTION}
                style={{
                    alignItems: isSmallScreen ? 'center' : 'flex-start',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                }}
            >
                <img
                    css={CSS_PHOTO}
                    src={GILLIAN_PHOTO}
                    width={isSmallScreen ? '200rem' : '400rem'}
                    alt="Gillian headshot"
                />
                Gillian Rose Brassil reports on securities litigation at
                Bloomberg Law. She lives in Washington, DC.
                <br />
                <br />
                Previously, she covered federal politics for McClatchy's
                California papers. She graduated from Stanford University with a
                Master's in Journalism and a Bachelor's in Communication in
                2019.
                <br />
                <br />
                In her free time, she practices artistic swimming, writes (short
                stories, poems and novels) or plays soccer with her Yorkie.
            </div>
        </PageLayout>
    );
}

export default AboutPage;

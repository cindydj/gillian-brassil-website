/** @jsxImportSource @emotion/react */
import PageLayout from '../../components/PageLayout/PageLayout';
import GILLIAN_PHOTO from '../../assets/images/gillian_about.jpg';
import { css } from '@emotion/react';
import {
    shouldScreenBeColumn,
    useScreenSizeBreakpoints,
} from '../../hooks/useScreenSizeBreakpoints';

const CSS_ABOUT_SECTION = css({
    display: 'flex',
    gap: '3rem',
});

const CSS_PHOTO = css({
    objectFit: 'scale-down',
});

function AboutPage() {
    const screenSize = useScreenSizeBreakpoints();
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
                    alt="Gillian"
                />
                Gillian Rose Brassil is a national political correspondent in
                Washington D.C. for McClatchy's five California papers: The
                Sacramento Bee, Fresno Bee, Modesto Bee, San Luis Obispo Tribune
                and Merced Sun-Star.
                <br />
                <br />
                Prior to joining McClatchy, Brassil was a sports reporting
                fellow at The New York Times. She graduated from Stanford
                University with a Master's in Journalism and a Bachelor's in
                Communication in 2019.
                <br />
                <br />
                In her free time, she practices artistic swimming, writes (short
                stories, poems and novels) or plays soccer with her Yorkie.
            </div>
        </PageLayout>
    );
}

export default AboutPage;

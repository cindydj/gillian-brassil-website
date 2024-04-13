/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { EXPERIENCES } from '../../data/experiences';
import Timeline from './Timeline/Timeline';

const CSS_INTRO = css({
    paddingBottom: '3rem',
    textAlign: 'center',
});

const CSS_WRAPPER = css({});

function ExperiencePage() {
    return (
        <PageLayout title="Experience">
            <div css={CSS_WRAPPER}>
                <div css={CSS_INTRO}>
                    Explore Gillian Brassil's clips, linked below!
                </div>
                <Timeline events={EXPERIENCES} />
            </div>
        </PageLayout>
    );
}

export default ExperiencePage;

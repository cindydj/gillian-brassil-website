/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { EXPERIENCES } from '../../data/experiences';

const LOGO_SIZE = '40rem';

const CSS_EXPERIENCE_LIST = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    listStyleType: 'none',
    padding: '0',
});

const CSS_EXPERIENCE_ITEM = css({
    alignItems: 'center',
    display: 'flex',
    gap: '1rem',
});

const CSS_WORKSPLACE_DETAILS = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
});

const CSS_WORKPLACE_NAME = css({
    fontWeight: 'bold',
});

const CSS_ROLE_TEXT = css({
    fontSize: '1.4rem',
});

interface WorkplaceDetailsProps {
    name: string;
    logo?: string;
    url?: string;
    role?: string;
}

function WorkplaceDetails(props: WorkplaceDetailsProps) {
    const { name, logo, url, role } = props;
    return (
        <span css={CSS_WORKSPLACE_DETAILS}>
            {logo && (
                <img
                    src={logo}
                    alt={`${name} logo`}
                    width={LOGO_SIZE}
                    height={LOGO_SIZE}
                />
            )}
            {!!url ? (
                <a href={url ? url : ''} css={CSS_WORKPLACE_NAME}>
                    {name}
                </a>
            ) : (
                <div css={CSS_WORKPLACE_NAME}>{name}</div>
            )}
            {role && <div css={CSS_ROLE_TEXT}>{role}</div>}
        </span>
    );
}

function ExperiencePage() {
    return (
        <PageLayout title="Experience" isContentCentered>
            Check out my clips below.
            <ul css={CSS_EXPERIENCE_LIST}>
                {Object.entries(EXPERIENCES).map(
                    ([workplaceName, details], index) => {
                        return (
                            <li css={CSS_EXPERIENCE_ITEM} key={workplaceName}>
                                <WorkplaceDetails
                                    name={workplaceName}
                                    logo={details.logo}
                                    url={details.url}
                                    role={details.role}
                                />
                            </li>
                        );
                    },
                )}
            </ul>
        </PageLayout>
    );
}

export default ExperiencePage;

/** @jsxImportSource @emotion/react */
import PageLayout from '../../components/PageLayout/PageLayout';
import { LINKEDIN_URL, X_URL } from '../../data/contact';
import GILLIAN_CONTACT_PHOTO from '../../assets/images/gillian_and_cubby.webp';
import { css } from '@emotion/react';
import {
    shouldImageBeHorizontal,
    useScreenSizeBreakpoints,
} from '../../hooks/useScreenSizeBreakpoints';

const CSS_PHOTO_HORIZONTAL = css({
    paddingTop: '3rem',
    width: '40rem',
});

const CSS_PHOTO_VERTICAL = css({
    paddingTop: '3rem',
    height: '25rem',
    width: '20rem',
    objectFit: 'cover',
    objectPosition: '10 100%',
});

function ContactPage() {
    const screenSize = useScreenSizeBreakpoints();

    return (
        <PageLayout title="Contact" isContentCentered>
            <span>
                Connect with me on <a href={LINKEDIN_URL}>LinkedIn</a> or follow
                me on X at <a href={X_URL}>@Gillian_Brassil</a>.
                <br />
                <br />
                You can also reach me via email(TODO: implement javascript
                function)!
            </span>
            {shouldImageBeHorizontal(screenSize) ? (
                <img
                    src={GILLIAN_CONTACT_PHOTO}
                    alt="Gillian with her dog Cubby"
                    css={CSS_PHOTO_HORIZONTAL}
                />
            ) : (
                <img
                    src={GILLIAN_CONTACT_PHOTO}
                    alt="Gillian with her dog Cubby"
                    css={CSS_PHOTO_VERTICAL}
                />
            )}
        </PageLayout>
    );
}

export default ContactPage;

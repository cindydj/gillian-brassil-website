/** @jsxImportSource @emotion/react */
import PageLayout from '../../components/PageLayout/PageLayout';
import { LINKEDIN_URL, X_URL } from '../../data/contact';
import GILLIAN_CONTACT_PHOTO from '../../assets/images/gillian_and_cubby.webp';
import { css } from '@emotion/react';

const CSS_PHOTO = css({
    paddingTop: '3rem',
    width: '40rem',
});

function ContactPage() {
    return (
        <PageLayout title="Contact" isContentCentered>
            <span>
                Connect with me on <a href={LINKEDIN_URL}>LinkedIn</a> or follow
                me on X, <a href={X_URL}>@Gillian_Brassil</a>!
            </span>
            <img
                src={GILLIAN_CONTACT_PHOTO}
                alt="Gillian with her dog Cubby"
                css={CSS_PHOTO}
            />
        </PageLayout>
    );
}

export default ContactPage;

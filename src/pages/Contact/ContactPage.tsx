/** @jsxImportSource @emotion/react */
import PageLayout from '../../components/PageLayout/PageLayout';
import Title from '../../components/PageLayout/Title';
import { LINKEDIN_URL, X_URL } from '../../data/contact';

function ContactPage() {
    return (
        <PageLayout isContentCentered>
            <Title>Contact</Title>
            <span>
                Connect with me on <a href={LINKEDIN_URL}>LinkedIn</a> or follow
                me on X, <a href={X_URL}>@Gillian_Brassil</a>.
                <br />
                <br />
                You can also contact me below if you have any questions or just
                want to say hello!
            </span>
        </PageLayout>
    );
}

export default ContactPage;

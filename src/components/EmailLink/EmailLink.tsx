/** @jsxImportSource @emotion/react */
import { ReactComponent as MailIconColored } from '../../assets/icons/mail.svg';
import { ReactComponent as MailIconBlack } from '../../assets/icons/mail_black.svg';
import { GILLIAN_EMAIL } from '../../data/contact';

interface EmailLinkWrapperProps {
    children: React.ReactNode;
}

function EmailLinkWrapper(props: EmailLinkWrapperProps) {
    const { children } = props;

    return (
        <a
            href={`mailto:${GILLIAN_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Opens empty email addressed to Gillian in new tab"
        >
            {children}
        </a>
    );
}

interface EmailTextLinkProps {
    text: string;
}

interface EmailIconLinkProps {
    dimension: string;
    isIconColored: boolean;
}

type EmailLinkProps = EmailTextLinkProps | EmailIconLinkProps;

function EmailLink(props: EmailLinkProps) {
    const text = 'text' in props ? props['text'] : undefined;
    const dimension = 'dimension' in props ? props['dimension'] : undefined;
    const isIconColored =
        'isIconColored' in props ? props['isIconColored'] : undefined;

    return !!text ? (
        <EmailLinkWrapper>{text}</EmailLinkWrapper>
    ) : isIconColored ? (
        <EmailLinkWrapper>
            <MailIconColored width={dimension} height={dimension} />
        </EmailLinkWrapper>
    ) : (
        <EmailLinkWrapper>
            <MailIconBlack width={dimension} height={dimension} />
        </EmailLinkWrapper>
    );
}

export default EmailLink;

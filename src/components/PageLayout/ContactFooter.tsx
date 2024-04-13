/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { ReactComponent as XIconColored } from '../../assets/icons/X.svg';
import { ReactComponent as XIconBlack } from '../../assets/icons/X_black.svg';
import { ReactComponent as LinkedinIconColored } from '../../assets/icons/linkedin.svg';
import { ReactComponent as LinkedinIconBlack } from '../../assets/icons/linkedin_black.svg';
import { ReactComponent as MailIconColored } from '../../assets/icons/mail.svg';
import { ReactComponent as MailIconBlack } from '../../assets/icons/mail_black.svg';
import { LINKEDIN_URL, X_URL } from '../../data/contact';
import EmailLink from '../EmailLink/EmailLink';

const ICON_DIMENSION_LARGE = '3rem';
const ICON_DIMENSION_SMALL = '2rem';

const CSS_FOOTER = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
});

const CSS_CONTACT_LINK_WRAPPER = css({
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content',
});

const CSS_COPYRIGHT_FOOTNOTE = css({
    fontSize: '1rem',
    padding: '0.5rem 0 1.2rem 0',
});

interface ContactFooterProps {
    isMainPage?: boolean;
}

function ContactFooter(props: ContactFooterProps) {
    const { isMainPage } = props;
    const theme = useTheme();
    const iconDimension = isMainPage
        ? ICON_DIMENSION_LARGE
        : ICON_DIMENSION_SMALL;
    const LinkedinIcon = isMainPage ? LinkedinIconColored : LinkedinIconBlack;
    const XIcon = isMainPage ? XIconColored : XIconBlack;

    return (
        <div css={CSS_FOOTER}>
            <div
                css={CSS_CONTACT_LINK_WRAPPER}
                style={{
                    borderTop: `1px ${theme.colors.text.dark} solid`,
                    gap: isMainPage ? '0.7rem' : '0.5rem',
                    padding: isMainPage ? '1.5rem 0 0.5rem 0' : '1rem 0 0 0',
                }}
            >
                <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinIcon
                        width={iconDimension}
                        height={iconDimension}
                    />
                </a>
                <a href={X_URL} target="_blank" rel="noopener noreferrer">
                    <XIcon width={iconDimension} height={iconDimension} />
                </a>
                <EmailLink
                    dimension={iconDimension}
                    isIconColored={!!isMainPage}
                />
            </div>
            <div css={CSS_COPYRIGHT_FOOTNOTE}>
                © Copyright 2024 Gillian Rose Brassil
            </div>
        </div>
    );
}

export default ContactFooter;

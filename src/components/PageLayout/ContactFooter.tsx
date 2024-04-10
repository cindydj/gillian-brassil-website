/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { ReactComponent as XIcon } from '../../assets/icons/X.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';

const ICON_DIMENSION = '3rem';

const CSS_FOOTER = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
});

const CSS_CONTACT_LINK_WRAPPER = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '0.7rem',
    padding: '1.5rem 0',
    width: 'fit-content',
});

function ContactFooter() {
    const theme = useTheme();

    return (
        <div css={CSS_FOOTER}>
            <div
                css={CSS_CONTACT_LINK_WRAPPER}
                style={{
                    borderTop: `1px ${theme.colors.text.dark} solid`,
                }}
            >
                <a
                    href="https://www.linkedin.com/in/gillianrosebrassil/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinIcon
                        width={ICON_DIMENSION}
                        height={ICON_DIMENSION}
                    />
                </a>
                <a
                    href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fgillianrosebrassil.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5EGillian_Brassil&region=follow_link&screen_name=Gillian_Brassil"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <XIcon width={ICON_DIMENSION} height={ICON_DIMENSION} />
                </a>
                <a>
                    <MailIcon width={ICON_DIMENSION} height={ICON_DIMENSION} />
                </a>
            </div>
        </div>
    );
}

export default ContactFooter;

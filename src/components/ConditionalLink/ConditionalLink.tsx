/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';

import { css } from '@emotion/react';

import { isRelativeUrl } from '../../utils/url';

const CSS_LINK = css({
    width: 'fit-content',
});

const CSS_TEXT_UNDERLINE = css({
    textDecoration: 'none',
});

interface ConditionalLinkProps {
    children: React.ReactNode;
    /**
     * Relative links (starting with "/") will show in the current tab without reloading the entire page.
     * Absolute links will open in a new tab.
     */
    link: string | undefined;
    className?: string;
    onClick?: () => void;
    showUnderline?: boolean;
}

function ConditionalLink(props: ConditionalLinkProps) {
    const { children, link, className, onClick, showUnderline } = props;

    const cssConditionalLink = showUnderline ? null : CSS_TEXT_UNDERLINE;

    if (link) {
        if (isRelativeUrl(link)) {
            return (
                <Link
                    to={link}
                    className={className}
                    css={[CSS_LINK, cssConditionalLink]}
                    onClick={onClick}
                >
                    {children}
                </Link>
            );
        }
        return (
            <Link
                to={link}
                className={className}
                css={cssConditionalLink}
                target="_blank"
                rel="noreferrer noopener"
                onClick={onClick}
            >
                {children}
            </Link>
        );
    }
    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    );
}

export default ConditionalLink;

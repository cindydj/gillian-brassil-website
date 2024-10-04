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
    style?: React.CSSProperties;
    onClick?: () => void;
    showUnderline?: boolean;
    ariaLabel?: string;
}

function ConditionalLink(props: ConditionalLinkProps) {
    const {
        children,
        link,
        className,
        style,
        onClick,
        showUnderline,
        ariaLabel,
    } = props;

    const cssConditionalLink = showUnderline ? null : CSS_TEXT_UNDERLINE;

    if (link) {
        if (isRelativeUrl(link)) {
            return (
                <Link
                    to={link}
                    className={className}
                    css={[CSS_LINK, cssConditionalLink]}
                    style={style}
                    onClick={onClick}
                    // This is to indicate to accessibility readers that this
                    // link is not a same-page link. Because we are using HashRouter,
                    // all links will have # in it, which accessibility readers
                    // will think is a same-page link and expect a matching header.
                    role="button"
                    aria-label={ariaLabel}
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
                style={style}
                target="_blank"
                rel="noreferrer noopener"
                onClick={onClick}
                aria-label={ariaLabel}
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

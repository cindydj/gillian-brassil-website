/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import ConditionalLink from '../../ConditionalLink/ConditionalLink';
import { ButtonState } from '../button_defs';

const CSS_BUTTON_CONTENT = css({
    display: 'flex',
    fontSize: '1.3rem',
    textUnderlineOffset: '0.4rem',
    '&:hover': {
        textDecoration: 'underline',
    },
});

interface NavigationButtonProps {
    children: React.ReactNode;
    link: string;
    /**
     * Support setting state to override the default button behavior.
     * For example, we can highlight the button using the 'hovered'
     * state even if the mouse is not hovering over the button.
     */
    buttonStateOverride?: ButtonState;
}

function NavigationButton(props: NavigationButtonProps) {
    const { children, link, buttonStateOverride } = props;
    const theme = useTheme();

    let buttonStyle: React.CSSProperties = {
        color: theme.colors.primary,
    };
    if (buttonStateOverride === ButtonState.SELECTED) {
        buttonStyle['textDecoration'] = 'underline';
    }

    return (
        <ConditionalLink link={link}>
            <div css={CSS_BUTTON_CONTENT} style={buttonStyle}>
                {children}
            </div>
        </ConditionalLink>
    );
}

export default NavigationButton;

/** @jsxImportSource @emotion/react */
import { SerializedStyles, Theme, css, useTheme } from '@emotion/react';

import ConditionalLink from '../ConditionalLink/ConditionalLink';
import { getBoldFontWeight } from '../../utils/text_formatting';
import { useScreenSizeBreakpoints } from '../../hooks/useScreenSizeBreakpoints';

// The values in ButtonType and ButtonState need to match the keys in
// packages/frontend/src/theme.ts for colors.button, or else the
// CSS generation function won't work.
export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVISIBLE = 'invisible_on_dark',
    INVISIBLE_ON_WHITE = 'invisible_on_white',
}
export enum ButtonState {
    HOVERED = 'hover',
    SELECTED = 'selected',
    DISABLED = 'disabled',
    DEFAULT = 'base',
}

export enum Alignment {
    LEFT = 'left',
    CENTER = 'center',
}
export enum TextSize {
    SMALL = '14px',
    LARGE = '16px',
}

export interface ActionButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    /**
     * Use link instead of onClick to handle default linking behavior.
     */
    link?: string;
    width?: string;
    /**
     * Supports different themed buttons.
     */
    buttonType?: ButtonType;
    /**
     * Whether the button is the submit button in a form. This prop is
     * included to enable functionality to press the "Enter" key to submit the form.
     */
    isFormSubmit?: boolean;
    /**
     * Support setting state to override the default button behavior.
     * For example, we can highlight the button using the 'hovered'
     * state even if the mouse is not hovering over the button.
     */
    buttonStateOverride?: ButtonState;
    /**
     * Setting to true will fix the button padding to match better with icons.
     */
    isIcon?: boolean;
    /**
     * The horizontal alignment of the text in the button.
     */
    alignment?: Alignment;
    textSize?: TextSize;
}

function getActionButtonColorCss(
    theme: Theme,
    buttonStateOverride: ButtonState,
    buttonType: ButtonType,
): SerializedStyles {
    const noHoverColorCss = {
        backgroundColor:
            theme.colors.button[`${buttonType}_${buttonStateOverride}_background_color`],
        color: theme.colors.button[`${buttonType}_${buttonStateOverride}_text_color`],
        fill: theme.colors.button[`${buttonType}_${buttonStateOverride}_text_color`],
        border:
            buttonType === ButtonType.SECONDARY
                ? `1px solid ${theme.colors.button.secondary_border_color}`
                : 'none',
    };
    if (buttonStateOverride === ButtonState.DISABLED) {
        // The disabled button state is different in that there is no hover state or pointer cursor.
        return css({
            ...noHoverColorCss,
        });
    } else if (
        buttonStateOverride === ButtonState.SELECTED ||
        buttonStateOverride === ButtonState.HOVERED
    ) {
        return css({
            cursor: 'pointer',
            '&:hover': {
                // We still need to manually set the text color because the link behavior
                // will change the text color to something else if we don't set it here.
                color: theme.colors.button[`${buttonType}_hover_text_color`],
                fill: theme.colors.button[`${buttonType}_hover_text_color`],
            },
            ...noHoverColorCss,
        });
    }
    return css({
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colors.button[`${buttonType}_hover_background_color`],
            color: theme.colors.button[`${buttonType}_hover_text_color`],
            fill: theme.colors.button[`${buttonType}_hover_text_color`],
        },
        ...noHoverColorCss,
    });
}

/**
 * Just a normal button. \(≧∇≦)/
 */
function ActionButton(props: ActionButtonProps) {
    const {
        children,
        onClick,
        link,
        width,
        buttonType: buttonTypeInput,
        isFormSubmit,
        buttonStateOverride,
        isIcon,
        alignment,
        textSize,
    } = props;
    const theme = useTheme();
    const screenSize = useScreenSizeBreakpoints();

    const buttonType = buttonTypeInput ?? ButtonType.PRIMARY;
    const isDisabled = buttonStateOverride === ButtonState.DISABLED;

    const cssActionButtonBase = css({
        borderRadius: '8px',
        display: 'flex',
        fontFamily: theme.fonts.text,
        fontWeight: getBoldFontWeight(screenSize, true /* isExtraBold */),
        fontSize: textSize ?? TextSize.LARGE,
        height: 'fit-content',
        justifyContent: alignment === Alignment.LEFT ? 'flex-start' : 'center',
        padding: buttonType === ButtonType.INVISIBLE || isIcon ? '8px 8px' : '8px 12px',
        // Standard syntax to prevent text selection on double click.
        userSelect: 'none',
        width: width ?? 'fit-content',
        boxSizing: 'border-box',
    });
    const cssActionButtonColors = getActionButtonColorCss(
        theme,
        buttonStateOverride ?? ButtonState.DEFAULT,
        buttonType,
    );
    const cssActionButton = css([cssActionButtonBase, cssActionButtonColors]);
    const cssButtonContent = css({
        alignItems: 'center',
        display: 'flex',
        gap: '4px',
        justifyContent: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
    });

    return link ? (
        <ConditionalLink
            css={cssActionButton}
            link={isDisabled ? '' : link}
            onClick={!isDisabled ? onClick : undefined}
        >
            <div css={cssButtonContent}>{children}</div>
        </ConditionalLink>
    ) : (
        <button
            css={cssActionButton}
            type={isFormSubmit ? 'submit' : 'button'}
            onClick={!isDisabled ? onClick : undefined}
        >
            <div css={cssButtonContent}>{children}</div>
        </button>
    );
}

export default ActionButton;

/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { useScreenSizeBreakpoints } from '../../hooks/useScreenSizeBreakpoints';
import { getBoldFontWeight } from '../../utils/text_formatting';

const CSS_TEXT_FIELD_WRAPPER = css({
    'label:last-of-type': {
        paddingBottom: '6px',
    },
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
});

const CSS_LABEL = css({
    cursor: 'text',
    fontSize: '15px',
    fontWeight: 450,
    paddingRight: '8px',
    paddingLeft: '2px',
    width: 'fit-content',
});

interface TextFieldProps {
    value: string;
    setValue: (newValue: string) => void;
    label: string;
    width?: string;
    isPassword?: boolean;
    description?: string;
    placeholder?: string;
    errorMessage?: string;
}

function TextField(props: TextFieldProps) {
    const { value, setValue, label, width, isPassword, description, placeholder, errorMessage } =
        props;
    const screenSize = useScreenSizeBreakpoints();
    const theme = useTheme();

    const cssTextFieldBox = css({
        '&:focus-visible': {
            outline: 'none',
        },
        '::placeholder': {
            fontWeight: getBoldFontWeight(screenSize),
            color: '#909090',
        },
        border: !errorMessage
            ? `1px ${theme.colors.text.dark} solid`
            : `2px ${theme.colors.text.error} solid`,
        borderRadius: '4px',
        fontFamily: theme.fonts.text,
        fontSize: '14px',
        fontWeight: getBoldFontWeight(screenSize),
        padding: '8px 12px',
    });

    const cssErrorMessage = css({
        color: theme.colors.text.error,
        fontSize: '14px',
        paddingTop: '4px',
        paddingLeft: '2px',
    });

    const cssDescription = css({
        color: theme.colors.neutral.grey_4,
        cursor: 'text',
        fontSize: '14px',
        paddingLeft: '2px',
    });

    return (
        <div css={CSS_TEXT_FIELD_WRAPPER}>
            <label htmlFor={label} css={CSS_LABEL}>
                {label}
            </label>
            {description && (
                <label htmlFor={label} css={cssDescription}>
                    {description}
                </label>
            )}
            <input
                id={label}
                type={isPassword ? 'password' : 'text'}
                css={cssTextFieldBox}
                value={value}
                onChange={(updatedValue) => {
                    setValue(updatedValue.target.value);
                }}
                width={width}
                placeholder={placeholder}
            />
            {errorMessage && <div css={cssErrorMessage}>{errorMessage}</div>}
        </div>
    );
}

export default TextField;

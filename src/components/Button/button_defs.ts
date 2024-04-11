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
    SMALL = '0.8rem',
    LARGE = '1.3rem',
}

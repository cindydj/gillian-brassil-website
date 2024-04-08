// Neutral colors
const WHITE = 'white';
const GRAY_1 = '#ededed';
const GRAY_2 = '#dedede';
const GRAY_3 = '#bbbbbb';
const GRAY_4 = '#909090';
const GRAY_5 = '#737373';
const GRAY_6 = '#5f5f5f';
const GRAY_7 = '#404040';

// Primary color hues (bright pink)
const PINK_1 = '#feeff1';
const PINK_2 = '#ffe9ee';
const PINK_3 = '#ffdce0';
const PINK_4 = '#f98f99';
const PINK_5 = '#f47c8a';
const PINK_6 = '#f25f70';
const PINK_7 = '#d94657';

// Error/success message
const ERROR_MESSAGE_COLOR = '#cc331f';
const ERROR_BACKGROUND_COLOR = '#fcefee';
const SUCCESS_MESSAGE_COLOR = '#198754';
const PARTIAL_MESSAGE_COLOR = '#0463c2';

export const THEME = {
    breakpoints: {
        small: '600px',
        medium: '750px',
        large: '1150px',
    },
    colors: {
        primary: '#f25f70',
        background: {
            header: '#063d6e',
            selection: PINK_3,
            error: ERROR_BACKGROUND_COLOR,
        },
        hover: PINK_2,
        button: {
            primary_base_background_color: PINK_6,
            primary_base_text_color: WHITE,
            primary_hover_background_color: PINK_4,
            primary_hover_text_color: WHITE,
            primary_selected_background_color: PINK_7,
            primary_selected_text_color: WHITE,
            primary_disabled_background_color: GRAY_2,
            primary_disabled_text_color: GRAY_4,
            secondary_base_background_color: 'unset',
            secondary_base_text_color: PINK_6,
            secondary_border_color: PINK_3,
            secondary_hover_background_color: PINK_1,
            secondary_hover_text_color: PINK_6,
            secondary_selected_background_color: PINK_4,
            secondary_selected_text_color: PINK_6,
            secondary_disabled_background_color: GRAY_2,
            secondary_disabled_text_color: PINK_4,
            invisible_on_dark_base_background_color: 'unset',
            invisible_on_dark_base_text_color: PINK_2,
            invisible_on_dark_hover_background_color: PINK_5,
            invisible_on_dark_hover_text_color: WHITE,
            invisible_on_dark_selected_background_color: PINK_4,
            invisible_on_dark_selected_text_color: WHITE,
            // Placeholder.
            invisible_on_dark_disabled_background_color: GRAY_2,
            // Placeholder.
            invisible_on_dark_disabled_text_color: GRAY_4,
            invisible_on_white_base_background_color: 'unset',
            invisible_on_white_base_text_color: GRAY_7,
            invisible_on_white_hover_background_color: PINK_3,
            invisible_on_white_hover_text_color: GRAY_7,
            invisible_on_white_selected_background_color: WHITE,
            invisible_on_white_selected_text_color: PINK_6,
            // Placeholder.
            invisible_on_white_disabled_background_color: GRAY_2,
            // Placeholder.
            invisible_on_white_disabled_text_color: GRAY_4,
        },
        text: {
            light: PINK_2,
            dark: GRAY_7,
            error: ERROR_MESSAGE_COLOR,
            success: SUCCESS_MESSAGE_COLOR,
            partial: PARTIAL_MESSAGE_COLOR,
        },
        table: {
            border: GRAY_7,
        },
        neutral: {
            grey_1: GRAY_1,
            grey_2: GRAY_2,
            grey_3: GRAY_3,
            grey_4: GRAY_4,
            grey_5: GRAY_5,
            grey_6: GRAY_6,
            grey_7: GRAY_7,
        },
    },
    fonts: {
        header: 'Oswald',
        text: 'Quicksand',
    },
};

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
const BLUE_1 = '#ecf5fe';
const BLUE_2 = '#d8ebfd';
const BLUE_3 = '#b1d7fb';
const BLUE_4 = '#168CF3';
const BLUE_5 = '#08569B';
const BLUE_6 = '#074C88';
const BLUE_7 = '#063d6e';
const BLUE_8 = '#021526';

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
        primary: '#063d6e',
        background: {
            banner_right: BLUE_8,
            banner_left: BLUE_7,
            header: BLUE_7,
            header_shadow: BLUE_8,
            selection: GRAY_4,
            error: ERROR_BACKGROUND_COLOR,
        },
        hover: BLUE_2,
        button: {
            primary_base_background_color: BLUE_7,
            primary_base_text_color: WHITE,
            primary_hover_background_color: BLUE_6,
            primary_hover_text_color: WHITE,
            primary_selected_background_color: BLUE_8,
            primary_selected_text_color: WHITE,
            primary_disabled_background_color: GRAY_2,
            primary_disabled_text_color: GRAY_4,
            secondary_base_background_color: 'unset',
            secondary_base_text_color: BLUE_7,
            secondary_border_color: BLUE_3,
            secondary_hover_background_color: BLUE_1,
            secondary_hover_text_color: BLUE_7,
            secondary_selected_background_color: BLUE_5,
            secondary_selected_text_color: BLUE_7,
            secondary_disabled_background_color: GRAY_2,
            secondary_disabled_text_color: BLUE_5,
            invisible_on_dark_base_background_color: 'unset',
            invisible_on_dark_base_text_color: BLUE_2,
            invisible_on_dark_hover_background_color: BLUE_6,
            invisible_on_dark_hover_text_color: WHITE,
            invisible_on_dark_selected_background_color: BLUE_5,
            invisible_on_dark_selected_text_color: WHITE,
            // Placeholder.
            invisible_on_dark_disabled_background_color: GRAY_2,
            // Placeholder.
            invisible_on_dark_disabled_text_color: GRAY_4,
            invisible_on_white_base_background_color: 'unset',
            invisible_on_white_base_text_color: GRAY_7,
            invisible_on_white_hover_background_color: BLUE_2,
            invisible_on_white_hover_text_color: GRAY_7,
            invisible_on_white_selected_background_color: BLUE_3,
            invisible_on_white_selected_text_color: BLUE_7,
            // Placeholder.
            invisible_on_white_disabled_background_color: GRAY_2,
            // Placeholder.
            invisible_on_white_disabled_text_color: GRAY_4,
        },
        text: {
            light: WHITE,
            dark: GRAY_7,
            emphasis: BLUE_4,
            header: BLUE_7,
            error: ERROR_MESSAGE_COLOR,
            success: SUCCESS_MESSAGE_COLOR,
            partial: PARTIAL_MESSAGE_COLOR,
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
        logo: 'MonteCarlo',
        header: 'Spectral',
        text: 'Lato',
    },
};

import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        breakpoints: {
            small: string;
            medium: string;
            large: string;
        };
        colors: {
            primary: string;
            hover: string;
            button: {
                primary_base_background_color: string;
                primary_base_text_color: string;
                primary_hover_background_color: string;
                primary_hover_text_color: string;
                primary_selected_background_color: string;
                primary_selected_text_color: string;
                primary_disabled_background_color: string;
                primary_disabled_text_color: string;
                secondary_base_background_color: string;
                secondary_base_text_color: string;
                secondary_border_color: string;
                secondary_hover_background_color: string;
                secondary_hover_text_color: string;
                secondary_selected_background_color: string;
                secondary_selected_text_color: string;
                secondary_disabled_background_color: string;
                secondary_disabled_text_color: string;
                invisible_on_dark_base_background_color: string;
                invisible_on_dark_base_text_color: string;
                invisible_on_dark_hover_background_color: string;
                invisible_on_dark_hover_text_color: string;
                invisible_on_dark_selected_background_color: string;
                invisible_on_dark_selected_text_color: string;
                invisible_on_dark_disabled_background_color: string;
                invisible_on_dark_disabled_text_color: string;
                invisible_on_white_base_background_color: string;
                invisible_on_white_base_text_color: string;
                invisible_on_white_hover_background_color: string;
                invisible_on_white_hover_text_color: string;
                invisible_on_white_selected_background_color: string;
                invisible_on_white_selected_text_color: string;
                invisible_on_white_disabled_background_color: string;
                invisible_on_white_disabled_text_color: string;
            };
            background: {
                header: string;
                selection: string;
                error: string;
            };
            text: {
                light: string;
                dark: string;
                error: string;
                success: string;
                partial: string;
            };
            table: {
                border: string;
            };
            neutral: {
                grey_1: string;
                grey_2: string;
                grey_3: string;
                grey_4: string;
                grey_5: string;
                grey_6: string;
                grey_7: string;
            };
        };
        fonts: {
            header: string;
            text: string;
        };
    }
}

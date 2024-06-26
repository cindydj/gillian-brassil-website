import {
    ScreenSizeHorizontal,
    shouldTextBeSmaller,
} from '../hooks/useScreenSizeBreakpoints';

// Characters that error when put directly in Javascript.
// By importing them instead, the error is avoided.
export const SPECIAL_CHARACTERS = {
    RIGHT_PARENTHESIS: ')',
    EM_DASH: '—',
};

export function getCtrlOrCmd() {
    return window.navigator.userAgent.indexOf('Mac') !== -1 ? 'Cmd' : 'Ctrl';
}

export function getBoldFontWeight(
    screenSize: ScreenSizeHorizontal,
    isExtraBold?: boolean,
) {
    const boldFontWeight = isExtraBold ? 700 : 600;
    return shouldTextBeSmaller(screenSize) ? boldFontWeight : 550;
}

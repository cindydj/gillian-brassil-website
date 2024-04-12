import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@react-hook/media-query';

export enum ScreenSize {
    SIZE_1 = 'size1',
    SIZE_2 = 'size2',
    SIZE_3 = 'size3',
}

export function shouldScreenBeColumn(screenSize: ScreenSize) {
    return isSmallerThanOrEqual(screenSize, ScreenSize.SIZE_2);
}

export function shouldImageBeHorizontal(screenSize: ScreenSize) {
    return isLargerThanOrEqual(screenSize, ScreenSize.SIZE_2);
}

export function shouldTextBeSmaller(screenSize: ScreenSize) {
    return isSmallerThanOrEqual(screenSize, ScreenSize.SIZE_1);
}

function isSmallerThanOrEqual(
    screenSize1: ScreenSize,
    screenSize2: ScreenSize,
) {
    const screenSizeOrdering = Object.values(ScreenSize);
    return (
        screenSizeOrdering.findIndex((x) => x === screenSize1) <=
        screenSizeOrdering.findIndex((x) => x === screenSize2)
    );
}

function isLargerThanOrEqual(screenSize1: ScreenSize, screenSize2: ScreenSize) {
    const screenSizeOrdering = Object.values(ScreenSize);
    return (
        screenSizeOrdering.findIndex((x) => x === screenSize1) >=
        screenSizeOrdering.findIndex((x) => x === screenSize2)
    );
}

export function useScreenSizeBreakpoints() {
    const theme = useTheme();
    const size1Max = useMediaQuery(
        `(max-width: ${theme.breakpoints.textAndImageSize})`,
    );
    const size2Max = useMediaQuery(
        `(max-width: ${theme.breakpoints.flexDirectionSwap})`,
    );
    if (size1Max) {
        return ScreenSize.SIZE_1;
    }
    if (size2Max) {
        return ScreenSize.SIZE_2;
    }
    return ScreenSize.SIZE_3;
}

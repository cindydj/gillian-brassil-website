import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@react-hook/media-query';

export enum ScreenSizeHorizontal {
    SIZE_1,
    SIZE_2,
    SIZE_3,
    SIZE_4,
}

export enum ScreenSizeVertical {
    SIZE_1,
    SIZE_2,
    SIZE_3,
    SIZE_4,
}

interface ScreenSizesHorizontal {
    screenSizeA: ScreenSizeHorizontal;
    screenSizeB: ScreenSizeHorizontal;
}

interface ScreenSizesVertical {
    screenSizeA: ScreenSizeVertical;
    screenSizeB: ScreenSizeVertical;
}

type ScreenSizes = ScreenSizesHorizontal | ScreenSizesVertical;

export function shouldHomePageBeMobileFriendly(
    screenSize: ScreenSizeHorizontal,
) {
    return isSmallerThanOrEqual({
        screenSizeA: screenSize,
        screenSizeB: ScreenSizeHorizontal.SIZE_2,
    });
}

export function isScreenVerySmall(
    screenSizeHorizontal: ScreenSizeHorizontal,
    screenSizeVertical: ScreenSizeVertical,
) {
    return (
        isSmallerThanOrEqual({
            screenSizeA: screenSizeHorizontal,
            screenSizeB: ScreenSizeHorizontal.SIZE_1,
        }) &&
        isSmallerThanOrEqual({
            screenSizeA: screenSizeVertical,
            screenSizeB: ScreenSizeVertical.SIZE_3,
        })
    );
}

export function shouldHomePageButtonBeShown(
    screenSizeHorizontal: ScreenSizeHorizontal,
    screenSizeVertical: ScreenSizeVertical,
) {
    return isLargerThanOrEqual({
        screenSizeA: screenSizeVertical,
        screenSizeB: isScreenVerySmall(screenSizeHorizontal, screenSizeVertical)
            ? ScreenSizeVertical.SIZE_2
            : ScreenSizeVertical.SIZE_3,
    });
}

export function shouldScreenBeColumn(screenSize: ScreenSizeHorizontal) {
    return isSmallerThanOrEqual({
        screenSizeA: screenSize,
        screenSizeB: ScreenSizeHorizontal.SIZE_3,
    });
}

export function shouldImageBeHorizontal(screenSize: ScreenSizeHorizontal) {
    return isLargerThanOrEqual({
        screenSizeA: screenSize,
        screenSizeB: ScreenSizeHorizontal.SIZE_3,
    });
}

export function shouldTextBeSmaller(screenSize: ScreenSizeHorizontal) {
    return isSmallerThanOrEqual({
        screenSizeA: screenSize,
        screenSizeB: ScreenSizeHorizontal.SIZE_2,
    });
}

function isSmallerThanOrEqual(sizes: ScreenSizes) {
    const { screenSizeA, screenSizeB } = sizes;
    return screenSizeA <= screenSizeB;
}

function isLargerThanOrEqual(sizes: ScreenSizes) {
    const { screenSizeA, screenSizeB } = sizes;
    return screenSizeA >= screenSizeB;
}

export function useScreenSizeHorizontalBreakpoints() {
    const theme = useTheme();
    const size1Max = useMediaQuery(
        `(max-width: ${theme.breakpoints.horizontal.smallScreenSize})`,
    );
    const size2Max = useMediaQuery(
        `(max-width: ${theme.breakpoints.horizontal.textAndImageSize})`,
    );
    const size3Max = useMediaQuery(
        `(max-width: ${theme.breakpoints.horizontal.flexDirectionSwap})`,
    );
    if (size1Max) {
        return ScreenSizeHorizontal.SIZE_1;
    }
    if (size2Max) {
        return ScreenSizeHorizontal.SIZE_2;
    }
    if (size3Max) {
        return ScreenSizeHorizontal.SIZE_3;
    }
    return ScreenSizeHorizontal.SIZE_4;
}

export function useScreenSizeVerticalBreakpoints() {
    const theme = useTheme();
    const size1Max = useMediaQuery(
        `(max-height: ${theme.breakpoints.vertical.smallScreenHomePageButtonVisibility})`,
    );
    const size2Max = useMediaQuery(
        `(max-height: ${theme.breakpoints.vertical.homePageButtonVisibility})`,
    );
    const size3Max = useMediaQuery(
        `(max-height: ${theme.breakpoints.vertical.smallScreenSize})`,
    );
    if (size1Max) {
        return ScreenSizeVertical.SIZE_1;
    }
    if (size2Max) {
        return ScreenSizeVertical.SIZE_2;
    }
    if (size3Max) {
        return ScreenSizeVertical.SIZE_3;
    }
    return ScreenSizeVertical.SIZE_4;
}

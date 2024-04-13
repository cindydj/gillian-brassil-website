import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@react-hook/media-query';

export enum ScreenSizeHorizontal {
    SIZE_1,
    SIZE_2,
    SIZE_3,
}

export enum ScreenSizeVertical {
    SIZE_1,
    SIZE_2,
}

interface ScreenSizesHorizontal {
    screenSize1: ScreenSizeHorizontal;
    screenSize2: ScreenSizeHorizontal;
}

interface ScreenSizesVertical {
    screenSize1: ScreenSizeVertical;
    screenSize2: ScreenSizeVertical;
}

type ScreenSizes = ScreenSizesHorizontal | ScreenSizesVertical;

export function shouldHomePageBeMobileFriendly(
    screenSize: ScreenSizeHorizontal,
) {
    return isSmallerThanOrEqual({
        screenSize1: screenSize,
        screenSize2: ScreenSizeHorizontal.SIZE_1,
    });
}

export function shouldHomePageButtonBeShown(screenSize: ScreenSizeVertical) {
    return isLargerThanOrEqual({
        screenSize1: screenSize,
        screenSize2: ScreenSizeVertical.SIZE_2,
    });
}

export function shouldScreenBeColumn(screenSize: ScreenSizeHorizontal) {
    return isSmallerThanOrEqual({
        screenSize1: screenSize,
        screenSize2: ScreenSizeHorizontal.SIZE_2,
    });
}

export function shouldImageBeHorizontal(screenSize: ScreenSizeHorizontal) {
    return isLargerThanOrEqual({
        screenSize1: screenSize,
        screenSize2: ScreenSizeHorizontal.SIZE_2,
    });
}

export function shouldTextBeSmaller(screenSize: ScreenSizeHorizontal) {
    return isSmallerThanOrEqual({
        screenSize1: screenSize,
        screenSize2: ScreenSizeHorizontal.SIZE_1,
    });
}

function isSmallerThanOrEqual(sizes: ScreenSizes) {
    const { screenSize1, screenSize2 } = sizes;
    return screenSize1 <= screenSize2;
}

function isLargerThanOrEqual(sizes: ScreenSizes) {
    const { screenSize1, screenSize2 } = sizes;
    return screenSize1 >= screenSize2;
}

export function useScreenSizeHorizontalBreakpoints() {
    const theme = useTheme();
    const size1Max = useMediaQuery(
        `(max-width: ${theme.breakpoints.horizontal.textAndImageSize})`,
    );
    const size2Max = useMediaQuery(
        `(max-width: ${theme.breakpoints.horizontal.flexDirectionSwap})`,
    );
    if (size1Max) {
        return ScreenSizeHorizontal.SIZE_1;
    }
    if (size2Max) {
        return ScreenSizeHorizontal.SIZE_2;
    }
    return ScreenSizeHorizontal.SIZE_3;
}

export function useScreenSizeVerticalBreakpoints() {
    const theme = useTheme();
    const size1Max = useMediaQuery(
        `(max-height: ${theme.breakpoints.vertical.homePageButtonVisibility})`,
    );
    if (size1Max) {
        return ScreenSizeVertical.SIZE_1;
    }
    return ScreenSizeVertical.SIZE_2;
}

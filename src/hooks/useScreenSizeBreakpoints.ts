import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@react-hook/media-query';

export enum ScreenSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    XLARGE = 'xlarge',
}

export function isSmallerThanOrEqual(
    screenSize1: ScreenSize,
    screenSize2: ScreenSize,
) {
    const screenSizeOrdering = Object.values(ScreenSize);
    return (
        screenSizeOrdering.findIndex((x) => x === screenSize1) <=
        screenSizeOrdering.findIndex((x) => x === screenSize2)
    );
}

export function isLargerThanOrEqual(
    screenSize1: ScreenSize,
    screenSize2: ScreenSize,
) {
    const screenSizeOrdering = Object.values(ScreenSize);
    return (
        screenSizeOrdering.findIndex((x) => x === screenSize1) >=
        screenSizeOrdering.findIndex((x) => x === screenSize2)
    );
}

export function useScreenSizeBreakpoints() {
    const theme = useTheme();
    const smallMax = useMediaQuery(`(max-width: ${theme.breakpoints.small})`);
    const mediumMax = useMediaQuery(`(max-width: ${theme.breakpoints.medium})`);
    const largeMax = useMediaQuery(`(max-width: ${theme.breakpoints.large})`);
    if (smallMax) {
        return ScreenSize.SMALL;
    }
    if (mediumMax) {
        return ScreenSize.MEDIUM;
    }
    if (largeMax) {
        return ScreenSize.LARGE;
    }
    return ScreenSize.XLARGE;
}

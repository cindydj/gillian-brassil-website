export function convertToPathName(name: string) {
    let processedName = name
        .toLowerCase()
        .replaceAll('+', 'and')
        .replaceAll(' ', '-');
    if (processedName[0] !== '/') {
        processedName = '/' + processedName;
    }
    return processedName;
}

export function isRelativeUrl(url: string) {
    // PDF files start with `/static`, so we want them to open in a new tab
    // like external URLs.
    return url.startsWith('/') && !url.startsWith('/static/');
}

export function joinPaths(path1: string, path2: string) {
    let processedPath = path1;
    if (path1[0] !== '/') {
        processedPath = '/' + processedPath;
    }
    if (processedPath[-1] !== '/' && path2[0] !== '/') {
        processedPath = processedPath + '/';
    }
    return processedPath + path2;
}

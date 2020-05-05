export const required = (value) => {
    if (value) return undefined;
    return `field is required`
}

export const maxLengthCreator = (nededLength) => (value) => {
    if (value && value.length > nededLength) return `MaxLength is ${nededLength} symbols`;
    return undefined;
}
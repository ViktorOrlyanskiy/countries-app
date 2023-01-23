export const getNameFromUrl = (url) =>
    url
        .replace("-", " ")
        .split(" ")
        .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
        .join(" ");

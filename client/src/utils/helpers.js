export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

export function removeHyphensAndCapitalize(string) {
    return string
        .split('-')
        .map(capitalizeFirstLetter)
        .join(' ');
}

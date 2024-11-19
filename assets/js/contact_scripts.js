function isValidPhone(number) {
    return (
        number.match(
            `^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$`
        ) !== null
    );
}

function isValidEmail(email) {
    return email.match(
        `[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?` !==
            null
    );
}

function isValidMessage(message, minLength, maxLength) {
    if (message.replace(" ", "") === "") {
        return false;
    }

    if (message.length > maxLength || message.Length < minLength) {
        return false;
    }

    return true;
}

function sendMessage(email, phone, subject, message) {}

function submitForm() {}

document.addEventListener("submit", (event) => {
    submitForm();
    event.preventDefault();
});

let sentiment_checkbox = document.getElementById("sentiment-checkbox");
let password_generator_checkbox = document.getElementById(
    "password-generator-checkbox"
);
let password_length_input = document.getElementById("password-length");
let sentiment_text_input = document.getElementById("sentiment-text");
let api_key_input = document.getElementById("api-key");
let api_output = document.getElementById("api-output-text");

password_length_input.hidden = true;
sentiment_text_input.hidden = true;

function sentiment_checkbox_toggled() {
    if (!sentiment_checkbox.checked) {
        sentiment_text_input.value = "";
        sentiment_text_input.hidden = true;
        sentiment_text_input.required = false;
        return;
    }
    password_generator_checkbox.checked = false;
    password_generator_checkbox_toggled();
    sentiment_text_input.hidden = false;
    sentiment_text_input.required = "required";
    api_output.innerText = "";
}

function password_generator_checkbox_toggled() {
    if (!password_generator_checkbox.checked) {
        password_length_input.value = "";
        password_length_input.hidden = true;
        password_length_input.required = false;
        return;
    }
    sentiment_checkbox.checked = false;
    sentiment_checkbox_toggled();
    password_length_input.hidden = false;
    password_length_input.required = "required";
    api_output.innerText = "";
}

function get_sentiment() {
    let baseURL = "https://api.api-ninjas.com/v1/sentiment?text=";
    let requestURL = `${baseURL}${sentiment_text_input.value}`;

    fetch(requestURL, {
        headers: {
            "X-Api-Key": api_key_input.value,
            accept: "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Invalid API Key");
            }
            return response.json();
        })
        .then((response) => {
            console.log(response);
            api_output.innerText = response.sentiment;
        })
        .catch((error) => {
            api_output.innerText = error;
        });
}

function generate_password() {
    let baseURL = "https://api.api-ninjas.com/v1/passwordgenerator?length=";
    let requestURL = `${baseURL}${password_length_input.value}`;

    fetch(requestURL, {
        headers: {
            "X-Api-Key": api_key_input.value,
            accept: "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Invalid API Key");
            }
            return response.json();
        })
        .then((response) => {
            console.log(response);
            api_output.innerText = response.random_password;
        })
        .catch((error) => {
            api_output.innerText = error;
        });
}

function submit_form() {
    if (sentiment_checkbox.checked) {
        get_sentiment();
        return;
    }
    if (password_generator_checkbox.checked) {
        generate_password();
        return;
    }
    api_output.innerText = "No option selected";
}

document.addEventListener("change", (event) => {
    switch (event.target.id) {
        case "sentiment-checkbox":
            sentiment_checkbox_toggled();
            break;

        case "password-generator-checkbox":
            password_generator_checkbox_toggled();
            break;

        default:
            break;
    }
});

document.addEventListener("submit", (event) => {
    console.log("Form submitted");
    submit_form();
    event.preventDefault();
});

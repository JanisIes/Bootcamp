const validationForm = () => {
    event.preventDefault();
    const arrayOfInputs = document.getElementsByTagName("input");
    let isError = false;
    const information = {};
    for (let i = 0; i < arrayOfInputs.length; i++) {
        const input = arrayOfInputs[i];
        if (!input.value) {
            input.style.borderColor = 'red';
            isError = true;
        } else {
            input.style.borderColor = 'initial';
            isError = false;
            information[input.name] = input.value;
        }
    }
    return !isError;
};



/**
 * Function to make an AJAX request by provided parameters and return a string
 * @param {string} url
 * @param {string} requestMethod
 * @param {object|string} body
 * @returns {string}
 */
const sendApiRequest = (url, requestMethod, body = null) => {
    var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.open(requestMethod, url, false);
    xmlHTTP.send(body);
    return xmlHTTP.responseText;
};

const Planets = sendApiRequest(bunchOfUrls["planets"], "GET");

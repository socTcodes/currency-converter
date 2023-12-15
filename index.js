const usd = 1;
const eur = 0.91;
const chf = 0.87;

function getUserInput() {
    let userInput = document.getElementById('amountInUsd').value;

    if (!isNaN(userInput)) {
        userInput = Number(userInput);
        convertCurrency(userInput);
    } else {
        alert('Enter a valid amount in USD');
    }
}

function convertCurrency(userInput) {
    const toEur = userInput * eur / usd;
    const toChf = userInput * chf / usd;

    document.getElementById('eurLabel').innerHTML = `USD to EUR: ${toEur.toFixed(2)}`;
    document.getElementById('chfLabel').innerHTML = `USD to CHF: ${toChf.toFixed(2)}`;
}
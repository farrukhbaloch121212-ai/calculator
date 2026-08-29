function calculateInterest() {
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = Number(document.getElementById('rate').value);
    let years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        return 0;
    }

    let interest = (principal * rate * years) / 100;
    return interest;
}

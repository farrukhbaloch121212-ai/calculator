function calculateInterest() {
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = Number(document.getElementById('rate').value);
    let time = parseInt(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        return 0;
    }

    let interest = (principal * rate * time) / 100;
    return interest;
}

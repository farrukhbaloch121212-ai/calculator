function calculateInterest() {
    // Converting inputs to numbers prevents TypeErrors in the math logic
    let principal = Number(document.getElementById('principal').value);
    let rate = Number(document.getElementById('rate').value);
    let time = Number(document.getElementById('time').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }
    
    let interest = (principal * rate * time) / 100;
    document.getElementById('result').innerText = "Interest: $" + interest.toFixed(2);
    return interest;
}

// Export for Jasmine testing
if (typeof module !== 'undefined') {
    module.exports = { calculateInterest };
}
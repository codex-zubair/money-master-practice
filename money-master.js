// getting the input values
const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
// String Values
const totalExpenses = document.getElementById('total-expenses');
const totalBalance = document.getElementById('balance');
//percentage Input Filed
const percentage = document.getElementById('percentage');

// String Values
const savingAmount = document.getElementById('saving-amount');
const RemainingBalance = document.getElementById('remaining-balance')









// Button Field Start
const calculateBtn = document.getElementById('calculate');
const save = document.getElementById('save');
// Button Field End





// Calculate button Function
calculateBtn.addEventListener('click', () => {

    // Income
    const incomeValue = income.value;

    // Auto Sum Error Handling.
    if (incomeValue == '') {
        errorValue = 1;
    }

    else {
        errorValue = 0;
    }

    // Expenses
    const foodValue = food.value;
    const rentValue = rent.value;
    const clothesValue = clothes.value;




    // Checking incomeValue are not Empty... and doing sum operation.
    // Sum
    if (errorValue !== 1) {

        const totalValue = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);
        return totalValue;
    }
    else {
        alert("Only Number!")
        return;
    }

    // Changing Total Expense String Value
    // totalExpenses.innerText = totalValue;
    if (isNaN(totalValue)) {
        alert("Only Number")
        food.value = '';
        rent.value = '';
        clothesValue.value = '';

        return;
    }


    totalExpenses.innerText = totalValue;


    // Getting Total Expenses String Value.
    const totalExpensesValue = totalExpenses.innerText;

    // Converted String Value and stored into balance.
    const balance = parseFloat(incomeValue) - parseFloat(totalExpensesValue);


    if (isNaN(balance)) {
        alert("Only Number")
        return;
    }

    else {

        // Changing the Total balance String value... from balance Value.
        totalBalance.innerText = balance;

    }




});









// Calculating Percentage... Start
save.addEventListener('click', () => {


    // Getting Total Income Value...
    const incomeValue = income.value;


    //  Getting input Field percentage Value
    const percentageValue = percentage.value;


    // Error Handling.
    // TODO Later Need to handle this Error.
    if (percentageValue == '') {
        errorValue = 1;

    }
    else {
        errorValue = 0;
    }



    // saving-amount
    const savingAmountPercentage = ((parseFloat(percentageValue) / parseFloat(incomeValue)) * 100).toFixed(2);


    // changing the saving amount string value.
    savingAmount.innerText = savingAmountPercentage;


    // Changing Remaining balance string.
    RemainingBalance.innerText = String((incomeValue - savingAmountPercentage).toFixed(2));




})






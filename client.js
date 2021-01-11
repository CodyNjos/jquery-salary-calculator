$(document).ready(readyNow);
function readyNow() {
    console.log('js & jQuery linked')
    $('#submitButton').on('click', hireEmployee) // calls hire employee function when the button on the form is clicked
    $('body').on('click', '.fireButton', terminateEmployee); //calls terminateEmployee

}
let annualExpense = 0; // set global variable to store annual expense

function hireEmployee() { // Adds info from input fields to DOM
    console.log('Start hireEmployee Function');
    let first = $('#firstNameInput').val(); // pulls info from inputs to local variables
    let last = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let salary = $('#salaryInput').val();

    if (first === '' || last === '' || id === '' || title === '' || salary === '') { // Makes sure no inputs are empty
        alert('Please Enter All Employee Information');
        return false;
    }
    else if (id.length > 6) {  // Sets Employee ID numbers to a maximum of 6
        alert('Employee ID Numbers are Limited to 6 digits')
        return false;
    }
    else if (salary > 200000) { // Sets salary to a maximum of $200000
        alert('Maximum Annual Salary is $200,000. \nPlease See Admin if Override is Needed.')
        return false;
    }

    annualExpense += Number(salary); //Adds employee salary to annual expense when they're added to the table
    $('#table').append( // uses data from the input fields to add to table on DOM
        `<tr data-salary="${salary}"> 
            <td class = firstName >${first}</td>
            <td class = lastName>${last}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td class = salary>$${salary}</td>
            <td><button class = 'fireButton' type =button>Terminate Employee</button></td>
        </tr>`);

    $('#firstNameInput').val(''); // Reset input fields
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
    console.log(first, last, "added to payroll")
    updatePayroll(); // updates payroll on DOM with new employees salary added
    console.log('$' + salary + " added to annual payroll expense. Annual payroll expense is now $" + annualExpense)
}
function updatePayroll() { //Changes the payroll when an employee is added or removed
    console.log('Start updatePayroll Function')
    let monthlyExpense = annualExpense / 12;

    if (monthlyExpense > 20000) { // changes text color on DOM to red if the monthly expense is over 20k
        $('#payroll').css('color', 'red');
    }
    else {
        $('#payroll').css('color', 'black'); //reverts back to black if the monthly expense drops below 20k
    }

    $('#payroll').empty() // Empty the span that holds running tally of Monthly expense 
    $('#payroll').append(monthlyExpense.toFixed(2));// rounds the monthly expense to 2 decimal points, and posts to DOM

}

function terminateEmployee() { //removes employee from dom
    console.log('Start terminateEmployee Function')
    let empFirst = $(this).closest(`tr`).find(`.firstName`).text(); // pulls Name from row where button was clicked to be used in alerts
    let empLast = $(this).closest(`tr`).find(`.lastName`).text();
    //let subSalary = $(this).closest(`tr`).find(`.salary`).text(); // another way of doing what is on the line below
    let subSalary = $(this).closest(`tr`).data(`salary`);
    if (confirm("Do you want to remove " + empFirst + " " + empLast + " from the payroll?")) {
        $(this).closest(`tr`).remove(); // removes row closest to the buttun that has been pushed


        annualExpense -= subSalary; // subtracts removed employees salary from the annual expense
        updatePayroll(); // updates payroll on DOM with removed employees salary subtracted
        alert(empFirst + " " + empLast + " is no longer on the payroll.") // Informs user that the employee has been removed from payroll
        console.log(subSalary + ' removed from annual payroll expense. Annual payroll expense is now $' + annualExpense)
    }
    else {
        alert(empFirst + " " + empLast + " is still on the payroll.") // Informs that the selected employee has NOT been removed
    }
    // $(this).closest(`tr`).remove(); // Removes the table row that the button is on

}


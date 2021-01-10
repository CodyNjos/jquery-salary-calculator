$(document).ready(readyNow);
function readyNow() {
    console.log('js & jQuery linked')
    $('#submitButton').on('click' , hireEmployee) // calls hire employee function when the button on the form is clicked
    $('body').on('click', '.fireButton', terminateEmployee); //calls terminateEmployee
    
}
let annualExpense = 0;

function hireEmployee(){ // Adds info from input fields to DOM
    console.log('Start hireEmployee Function');
    let first = $('#firstNameInput').val();
    let last = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let salary  = $('#salaryInput').val();
    
    // UN-COMMENT AFTER TESTING!!
    
    if(first === '' || last === '' || id === ''|| title === ''|| salary === ''){
        alert('Please Enter All Employee Information');
        return false;
    }

    annualExpense += Number(salary); //Adds employee salary to annual expense when they're added to the table
    $('#table').append ( // uses data from the input fields to add to table on DOM
        `<tr data-salary="${salary}">
            <td class = firstName >${first}</td>
            <td class = lastName>${last}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td class = salary>${salary}</td>
            <td><button class = 'fireButton' type =button>Terminate Employee</button></td>
        </tr>`);
   
    $('#firstNameInput').val(''); // Reset input fields
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
    console.log(first , last , "added to payroll")
    updatePayroll(); // updates payroll on DOM with new employees salary added
    console.log('$'+ salary + " added to annual payroll expense. Annual payroll expense is now $" + annualExpense )
}
function updatePayroll() {
    console.log('Start updatePayroll Function')
    let monthlyExpense = annualExpense/12;
    
    if(monthlyExpense > 20000){ // changes text color on DOM to red if the monthly expense is over 20k
        $('#payroll').css('color' , 'red');
    }
    else{
        $('#payroll').css('color' , 'black'); //reverts back to black if the monthly expense drops below 20k
    }

    $('#payroll').empty() // Empty the span that holds running tally of Montly expense 
    $('#payroll').append(monthlyExpense.toFixed(2));
    
}

function terminateEmployee(){
    console.log('Start terminateEmployee Function')
    let empFirst = $(this).closest(`tr`).find(`.firstName`).text(); // pulls Name from row where button was clicked to be used in alerts
    let empLast = $(this).closest(`tr`).find(`.lastName`).text();
    //let subSalary = $(this).closest(`tr`).find(`.salary`).text(); // another way of doing what is on the line below
    let subSalary = $(this).closest(`tr`).data(`salary`);// target the closest tr with data matching `salary`
    if (confirm("Do you want to remove " + empFirst + " " + empLast + " from the payroll?")){
        $(this).closest(`tr`).remove(); // removes row closest to the buttun that has been pushed
        
        
        annualexpense -= subSalary; // subtracts removed employees salary from the annual expense
        updatePayroll(); // updates payroll on DOM with removed employees salary subtracted
        alert(empFirst + " " + empLast + " is no longer on the payroll.") // Informs user that the employee has been removed from payroll
        console.log(subSalary + ' removed from annual payroll expense. Annual payroll expense is now $' + annualexpense)
    }
    else{
        alert(empFirst + " " + empLast + " is still on the payroll.") // Informs that the selected employee has NOT been removed
    }
   // $(this).closest(`tr`).remove(); // Removes the table row that the button is on

} 


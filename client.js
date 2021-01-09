$(document).ready(readyNow);
function readyNow() {
    console.log('js & jQuery linked')
    $('#submitButton').on('click' , hireEmployee)
    $('body').on('click', '.fireButton', terminateEmployee);
    
}

let monthlyExpence = 0;

function hireEmployee(){
    let first = $('#firstNameInput').val();
    let last = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let salary  = $('#salaryInput').val();
    monthlyExpence += Number(salary / 12);


    $('#table').append (`
        <tr id = 'test'>
        <td>${first}</td>
        <td>${last}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${salary}</td>
        <td><button class = 'fireButton' type =button>Terminate Employee</button></td>
        </tr>`);
   
    $('#firstNameInput').val(''); // Reset input fields
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
    $('#payroll').empty() // Empty the span that holds running tally of Montly expence 
    $('#payroll').append(monthlyExpence.toFixed(2));
}


function terminateEmployee(){
    $(this).closest(`tr`).remove();
} 
console.log (monthlyExpence);

    
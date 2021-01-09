$(document).ready(readyNow);
function readyNow() {
    console.log('js & jQuery linked')
    $('#submitButton').on('click' , hireEmployee)
    $('body').on('click', '.fireButton', terminateEmployee);
    
}
let annualExpence = 0;

function hireEmployee(){ // Adds info from input fields to DOM
    let first = $('#firstNameInput').val();
    let last = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let salary  = $('#salaryInput').val();
    annualExpence += Number(salary); //Divide annual salary by 12 to get monthly expence

    $('#table').append ( //
        `<tr id = 'newEmpRow' data-salary="${salary}">
        <td>${first}</td>
        <td>${last}</td>
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
    updatePayroll();
    
}
function updatePayroll() {
    let monthlyExpence = annualExpence/12;
    $('#payroll').empty() // Empty the span that holds running tally of Montly expence 
    $('#payroll').append(monthlyExpence.toFixed(2));
}

function terminateEmployee(){
    console.log('start terminateEmployee');
    //let subSalary = $(this).closest(`tr`).find(`.salary`).text();
    let subSalary = $(this).closest(`tr`).data(`salary`);
    console.log(subSalary);
    annualExpence -= subSalary;
    updatePayroll();
    
    $(this).closest(`tr`).remove(); // Removes the table row that the button is on

} 
console.log (annualExpence);

    
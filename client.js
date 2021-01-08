$(document).ready(readyNow);
function readyNow() {
    console.log('js & jQuery linked')
    $('#submitButton').on('click' , submitEmployee)
}
let employeeArr = []
function enterEmployee(firstName , lastName , id , title , salary ) {
    const employee ={
        first: firstName ,
        last : lastName ,
        id : id ,
        title : title,
        salary: salary ,
    }
    employeeArr.push(employee);
    console.log(employeeArr)
    
}
function submitEmployee(){
    let first = $('#firstNameInput').val();
    let last = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let salary  = $('#salaryInput').val();

    enterEmployee(first , last , id , title , salary)

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
}
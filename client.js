$(document).ready(readyNow);
function readyNow() {
    console.log('js & jQuery linked')
    $('#submitButton').on('click' , submitEmployee)
}


function submitEmployee(){
    let first = $('#firstNameInput').val();
    let last = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let salary  = $('#salaryInput').val();

    $('#table').append (`
        <tr>
        <td>${first}</td>
        <td>${last}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${salary}</td>
        </tr>`);

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
}
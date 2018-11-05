//1. Validate using JQuery the name should be less than 50 characters
//When the input field is invalid, the border of the corresponding input should be changed to red
let checkName = $('.form-name');
checkName.keydown(function () {
    if (checkName.val().length > 49) {
        checkName.css("border-color", "red");
    } else {
        checkName.css("border-color", "black");
    }
});
//2. Validate phone number should be between 6 numbers to 16 numbers
let checkPhone = $('.form-phone');
checkPhone.keydown(function () {
    if (checkPhone.val().length < 6 || checkPhone.val().length > 16) {
        checkPhone.css("border-color", "red");
    } else {
        checkPhone.css("border-color", "black");
    }
});


//5.Add a Update Contacts list section for the page which has the same validation as the create contact list.
let checkName1 = $('.update-name');
checkName1.keydown(function () {
    if (checkName1.val().length > 49) {
        checkName1.css("border-color", "red");
    } else {
        checkName1.css("border-color", "black");
    }
});

let checkPhone1 = $('.update-phone');
checkPhone1.keydown(function () {
    if (checkPhone1.val().length < 6 || checkPhone1.val().length > 16) {
        checkPhone1.css("border-color", "red");
    } else {
        checkPhone1.css("border-color", "black");
    }
});

let rowIdCounter = $('#contact-list tbody').find('tr').length;

//6.When I click on the row of the contact list, the values of the contact list should be filled in to the update form.
$('#contact-list').on('click', '.row', function (e) {
    let rowElements = $(this).children();
    let updateFormElement = $('#form2 input').slice(0, rowElements.length);

    for (let i = 0; i < rowElements.length; i++) {
        $(updateFormElement[i]).val($(rowElements[i]).html());
    }
    $('#form2').prop('row-id', $(this).attr('id'));
});

//7.Alert the input of name , phone number and email after both forms are submitted and validated.
$('.contact-form').submit(function (event) {
    event.preventDefault();
    var formId = event.target.id;
    var name = event.target.name.value;
    var phone = event.target.phone.value;
    var email = event.target.email.value;
    const row = $(`
    <tr class = "row">
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
        </tr>`);
    
    if (formId === 'form1') {
        $(row).attr("id", `row-${rowIdCounter++}`);
        $('tbody').append(row);
        $(this).find('.clear').click();
    } else {
        $(row).attr("id", $(this).prop('row-id'));
        $('#'+$(this).prop('row-id')).replaceWith(row);
    }
    alert("Form submitted name:" + name + ", phone:" + phone + ", email:" + email);
});

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
$('#contact-list').append('<h1>Update Contact List</h1><form id="form2"><div id="row-name2"><input type="text" name="name" placeholder="Name" class="form-name" style="border-color: black;"><div id="row-phone2"><input type="text" name="phone" placeholder="Telephone Number" class="form-phone" style="border-color: red;"><div id="row-email2"><input type="text" name="email" placeholder="Email" class="form-email"></div><div id="row-submit"><input type="submit" value="submit"><input type="reset" value="clear"></div></form>')
//6.When I click on the row of the contact list, the values of the contact list should be filled in to the update form.

//7.Alert the input of name , phone number and email after both forms are submitted and validated.
$('#form1').submit(function (event) {
    event.preventDefault();
    let name = event.target.name.value;
    let phone = event.target.phone.value;
    let email = event.target.email.value;
    alert("Form submitted name:" + name + ", phone:" + phone + ", email:" + email);
});
//insert a new row of Peter into table
$('table').append('<tr><td>Peter</td><td>123456789</td><td>peter@gmail.com</td></tr>');

//Add a "clear" button next to submit
$('#row-submit').append('<input type="reset" value="clear"/>');

//Changing the title
var newTitle = $('#header h1').html();
newTitle = "Henry's contact list application"
$('#header h1').html(newTitle);

//Changing the text color of the table
$('table').css("color","#2b7cff");
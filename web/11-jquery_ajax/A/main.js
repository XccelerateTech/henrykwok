$(function(){
    $.ajax({
        url:"data.json",
        beforeSend:function(xhr){},

        type: "GET",
        data: {
            attr1: "name",
            attr2: "occupation"
        }
    }).done(function(data){
        console.log('The function is run successfully');
        console.log(data);
    }).fail(function(data){
        console.log('The function cannot run.');
    }).always(function(data){
        console.log('I will always run.')
    });
});
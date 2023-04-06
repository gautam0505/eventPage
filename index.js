$(document).ready(function(){

    $.getJSON("data.json", function(data){
        console.log(data)

        $('.info1').html(data.info1);
        $('.info2').html(data.info2);
        $('.info3').html(data.info3);

        
    }).fail(function(){
        console.log("check your code")
    })
})
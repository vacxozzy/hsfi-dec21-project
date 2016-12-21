$(document).ready(function(){
   $('.all-content').hide(); 
   $('#goals-content').show();
});

/*
When someone clicks goals-button we should hide all-content and show only goals-content
*/
$("#goals-button").click(function(){
    $('.all-content').hide();
    $('#goals-content').show();
});


/*
When someone clicks the info button we should hide all-content and show only info-content
*/
$("#info-button").click(function(){
    $('.all-content').hide();
    $('#info-content').show();
});

$("#takeover-button").click(function(){
    $('.all-content').hide();
    $('#takeover-content').show();
});

$("#takeover-form-button").click(function(){
    $("#site-title").html("Your site now belongs to: " + $("#takeover-input").val())
    $('#site-title').css('background-color', '#990000');
    $('#site-title').css('color', '#ffffff');
});

$("#past-button").click(function(){
    $('.all-content').hide();
    $('#past-content').show();
});

$("#dark-button").click(function(){
    $('body').css('background-color', '#333333');
    $('body').css('color', '#ffffff');
    
});

$('#donotpress-button').click(function(){
   alert('I TOLD YOU NOT TO PRES ME!') 
});
/*
This function is fired when the webpage is loaded
*/
$(document).ready(function(){
    $("#goals-content").show();
    $("#about-content").hide();
    $("#past-projects").hide();
    $("#takeover-content").hide();

$("#goals-button").click(function(){
     $("#goals-content").show();
     $("#about-content").hide();
     $("#past-projects").hide();
     $("#takeover-content").hide();
 });
 
$("#info-button").click(function(){
   $("#about-content").show();
   $("#goals-content").hide();
   $("#past-projects").hide();
   $("#takeover-content").hide();
 });
 
$("#projects-button").click(function(){
   $("#past-projects").show();
   $("#goals-content").hide();
   $("#about-content").hide();
   $("#takeover-content").hide();
 });

$("#takeover-button").click(function(){
    $("#takeover-content").show();
    $("#past-projects").hide();
    $("#goals-content").hide();
    $("#about-content").hide();
 });
 
$("#dark-button").click(function(){
    $("body").css("background-color", "#343638");
    $("body").css("color", "white");
});
    
$("#no-press").click(function(){
   alert("You shouldn't have pressed that!");
});

$("#takeover-form-button").click(function(){
   $("#site-title").html('<p>Your Site Now Belongs to:</p> '+ $("input").val()+'</p>');
   $("#site-title").css("background-color", "#a00806");
   $("#site-title").css("color", "white");
});
});
 
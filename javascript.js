/*
This function is fired when the webpage is loaded
*/
$(document).ready(function(){
 $("#goals-content").show();
 $("#about-content").hide();
 $("#past-projects").hide();
 $("#takeover-content").hide();
});

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
   
$("#dark-button").click(function(){
    ("body").css("color", "white");
    ("body").css("background-color", "black");
});
    
   
});
 
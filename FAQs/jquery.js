


// JavaScript Document






$("#question1").click(toggleAnswer1);
$("#question2").click(toggleAnswer2);
$("#question3").click(toggleAnswer3);


$("#answer1").hide();
function toggleAnswer1(){
  $("#answer1").slideToggle();
  $("#answer2").hide();
  $("#answer3").hide();
};


$("#answer2").hide();
function toggleAnswer2(){
  $("#answer2").slideToggle();
  $("#answer1").hide();
  $("#answer3").hide();
};


$("#answer3").hide();
function toggleAnswer3(){
  $("#answer3").slideToggle();
  $("#answer2").hide();
  $("#answer1").hide();
}




$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 100; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";
    

    $('.more').each(function() {
        var content = $(this).html();
 			console.log(content);
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


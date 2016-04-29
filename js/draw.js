$(document).ready(function() {
  
  //setting offset and dasharray of the class of path
  $(".path").css("stroke-dashoffset", "1000");
  $(".path").css("stroke-dasharray", "1000");

  //variable for the 'stroke-dashoffset' unit
  var $dashOffset = $(".path").css("stroke-dashoffset");//.star

  $(window).scroll(function () {    

    //how far have you scrolled:
    var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*100);    

    //converting dashoffset
    var $newUnit = parseInt($dashOffset, 10); 

    //substrackting from dashoffset
    var $offsetUnit = $percentageComplete * ($newUnit / 100);

    //creating the drawing effect by setting dashoffset value
    $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);

  });

});
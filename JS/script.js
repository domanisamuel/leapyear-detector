//business logic
var leapYear = function(year){
    if((year % 4 ===0 )&& (year % 100 !==0)||(year%400 === 0)){
        return true
    }
    else{
        return false
    }
}

//user interface logic
$(document).ready(function(){
   $("form#leap-year").submit(function(event){
      event.preventDefault();
       var year = parseInt($("input#year").val());
       var result = leapYear(year);
       $("#result").text(result);
       $("#result").fadeIn(1000);
       
       event.preventDefault()
   }); 
});


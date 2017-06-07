//user interface logic
$(document).ready(function(){
   $("form#leap-year").submit(function(event){
      event.preventDefault();
       var year = parseInt($("input#year").val());
       var result = leapYear(year);
       $("#result").text(result);
       
       event.preventDefault()
   }); 
});

//business logic
var leapYear = function(year){
    if((year % 4 ===0 )&& (year % 100 !==0)||(year%400 === 0)){
        alert("true");
    }
    else{
        alert("false");
    }leapYear
}
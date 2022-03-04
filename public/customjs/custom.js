let data={};
$(document).ready(function(){

  $(".gender-data").click(function(){
    
    data.gender=$(this).attr("data-gender1");
 console.log(data);
  });//malebutton

  $(".goal-data").click(function(){
    
    data.goal=$(this).attr("data-goal");
    console.log(data);
  });//goalbutton


  $(".body-type-data").click(function(){
    
    data.body_type=$(this).attr("data-bodyType");
    console.log(data);
  });//bodytype

  $(".daily-life-style-data").click(function(){
    
    data.daily_life_style=$(this).attr("data-DailyLifeStyle");
    console.log(data);
  });//dailylifestyle

  $(".last-time-data").click(function(){
    
    data.last_time=$(this).attr("data-LastTime");
    console.log(data);
  });//dailylifestyle

  $(".last-time-data").click(function(){
    
    data.last_time=$(this).attr("data-LastTime");
    console.log(data);
  });//dailylifestyle




























});//end on ready

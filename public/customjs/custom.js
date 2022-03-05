//for habit
var lateNightFood=0;
var dailySugar=0;
var badSleep=0;
var highSaltIntake=0;
var softDrinks=0;
//for vegtables
var Pepper=0;
var zucchini=0;
var spinach=0;
var beans=0;
var tomatoes=0;
var mushroom=0;
var sweetPotato=0;
var broccoli=0;
//foodproducts
let avocado=0;
let eggs=0;
let yogurt=0;
let quraishCheese=0;
let tofu=0;
let olive=0;
let peanutButter=0;
let nuts=0;
let mozzarellaCheese=0;
let milk=0;
//meat
let fish=0;
let chicken=0;
let pork=0;
let liveStockMeat=0;
let turkeyMeat=0;

let data={

  habits:{
    daily_sugar:0,
    bad_sleep:0,
    late_night_food:0,
    high_salt_intake:0,
    soft_drinks:0


  },
  vegtables:{
    Pepper:0,
    zucchini:0,
    spinach:0,
    beans:0,
    tomatoes:0,
    mushroom:0,
    sweet_potato:0,
    broccoli:0,

  },
  food_products:{
   avocado:0,
   eggs:0,
   yogurt:0,
   quraish_cheese:0,
   tofu:0,
   olive:0,
   peanut_butter:0,
   nuts:0,
   mozzarella_cheese:0,
   milk:0

  },
meat:{
fish:0,
chicken:0,
pork:0,
live_stock_meat:0,
turkey_meat:0
 },
 measurements:{
age:0,
height:0,
weigh:0,
weight_target:0
}

 

};//end for habit



$(document).ready(function(){

  $(".gender-data").click(function(){
    
    data.gender=$(this).attr("data-gender1");

  });//malebutton

  $(".goal-data").click(function(){
    
    data.goal=$(this).attr("data-goal");

  });//goalbutton


  $(".body-type-data").click(function(){
    
    data.body_type=$(this).attr("data-bodyType");

  });//bodytype

  $(".daily-life-style-data").click(function(){
    
    data.daily_life_style=$(this).attr("data-DailyLifeStyle");

  });//dailylifestyle

  $(".last-time-data").click(function(){
    
    data.last_time=$(this).attr("data-LastTime");

  });//dailylifestyle

  $(".habits").click(function(){
    



    switch($(this).attr("habit")) {
      case "nothing":
        data.habits= {
          daily_sugar:0,
          bad_sleep:0,
          late_night_food:0,
          high_salt_intake:0,
          soft_drinks:0};
          lateNightFood=0;
          dailySugar=0;
          badSleep=0;
          highSaltIntake=0;
          softDrinks=0;
        break;
      
      case "daily_sugar":
        dailySugar++;
        dailySugar=dailySugar%2;
        data.habits.daily_sugar=dailySugar;
        break;
      case "bad_sleep":
        badSleep++;
        badSleep=badSleep%2;
        data.habits.bad_sleep=badSleep;
        break;
        case "late_night_food":
          lateNightFood++;
          lateNightFood=lateNightFood%2;
          data.habits.late_night_food=lateNightFood;
          break;
          case "high_salt_intake":
            highSaltIntake++;
            highSaltIntake=highSaltIntake%2;
            data.habits.high_salt_intake=highSaltIntake;
            break;
            case "soft_drinks":
              softDrinks++;
              softDrinks=softDrinks%2;
              data.habits.soft_drinks=softDrinks;
              break;
    }//endswitch

  });//habits

  $(".fitness").click(function(){
    
    data.fitness=$(this).attr("fitness");

  });//fitness


  $(".energy").click(function(){
    
    data.energy=$(this).attr("energy");

  });//energy

  $(".sleep-schedule").click(function(){
    
    data.sleep_schedule=$(this).attr("sleepSchedule");

  });//sleep schedule

  $(".water-intake").click(function(){
    
    data.water_intake=$(this).attr("waterIntake");

  });//waterintake


  $(".motivation").click(function(){
    
    data.motivation=$(this).attr("motivation");

  });//motivation

  


  $(".life-concerns").click(function(){
    
    data.lifeConcerns=$(this).attr("lifeConcerns");

  });//lifeConcerns


  $(".vegtables").click(function(){    

    switch($(this).attr("vegtable")) {

        case "Pepper":
          Pepper++;
          Pepper=Pepper%2;
        data.vegtables.Pepper=Pepper;
        break;
        case "zucchini":
          zucchini++;
          zucchini=zucchini%2;
        data.vegtables.zucchini=zucchini;
        break;
        case "spinach":
          spinach++;
          spinach=spinach%2;
          data.vegtables.spinach=spinach;
          break;
        case "beans":
          beans++;
          beans=beans%2;
            data.vegtables.beans=beans;
            break;
        case "tomatoes":
          tomatoes++;
          tomatoes=tomatoes%2;
              data.vegtables.tomatoes=tomatoes;
              break;
        case "mushroom":
          mushroom++;
          mushroom=mushroom%2;
                data.vegtables.mushroom=mushroom;
                break; 
        case "sweet_potato":
          sweetPotato++;
          sweetPotato=sweetPotato%2;
                  data.vegtables.sweet_potato=sweetPotato;
                  break;      
         case "broccoli":
          broccoli++;
          broccoli=broccoli%2;
                    data.vegtables.broccoli=broccoli;
                    break;                  
        default:
                data.vegtables={
                  Pepper:0,
                  zucchini:0,
                  spinach:0,
                  beans:0,
                  tomatoes:0,
                  mushroom:0,
                  sweet_potato:0,
                  broccoli:0,
              
                };
                
    }//endswitch

  });// vegtables




  $(".food-products").click(function(){    

    switch($(this).attr("foodProduct")) {

        case "avocado":
          avocado++;
          avocado=avocado%2;
        data.food_products.avocado=avocado;
        break;
        case "eggs":
          eggs++;
          eggs=eggs%2;
        data.food_products.eggs=eggs;
        break;
        case "yogurt":
          yogurt++;
          yogurt=yogurt%2;
          data.food_products.yogurt=yogurt;
          break;
        case "quraish_cheese":
          quraishCheese++;
          quraishCheese=quraishCheese%2;
            data.food_products.quraish_cheese=quraishCheese;
            break;
        case "tofu":
          tofu++;
          tofu=tofu%2;
              data.food_products.tofu=tofu;
              break;
        case "olive":
          olive++;
          olive=olive%2;
                data.food_products.olive=olive;
                break; 
        case "peanut_butter":
          peanutButter++;
          peanutButter=peanutButter%2;
                  data.food_products.peanut_butter=peanutButter;
                  break;      
         case "nuts":
          nuts++;
          nuts=nuts%2;
                    data.food_products.nuts=nuts;
                    break;   
       case "mozzarella_cheese":
        mozzarellaCheese++;
        mozzarellaCheese=mozzarellaCheese%2;
                                data.food_products.mozzarella_cheese=mozzarellaCheese;
                                break;  
            case "milk":
              milk++;
              milk=milk%2;
                      data.food_products.milk=milk;
                    break;                                                 
        
                
    }//endswitch

  });//foodProducts

  $(".meats").click(function(){    

    switch($(this).attr("meat")) {

        case "fish":
          fish++;
          fish=fish%2;
        data.meat.fish=fish;
        break;
        case "pork":
          pork++;
          pork=pork%2;
        data.meat.pork=pork;
     
        break;
        case "chicken":
          chicken++;
          chicken=chicken%2;
          data.meat.chicken=chicken;
          break;
        case "liveStockMeat":
          liveStockMeat++;
          liveStockMeat=liveStockMeat%2;
            data.meat.live_stock_meat=liveStockMeat;
            break;
        case "turkeyMeat":
          turkeyMeat++;
          turkeyMeat=turkeyMeat%2;
              data.meat.turkey_meat=turkeyMeat;
              break;
                 
        default:
          data.meat={
            fish:0,
            chicken:0,
            pork:0,
            live_stock_meat:0,
            turkey_meat:0
            };
fish=0;
chicken=0;
 pork=0;
 liveStockMeat=0;
turkeyMeat=0;
                
    }//endswitch

  });//meat

  $("#input_next_button").click(function(){
    data.measurements={
      age: $("#age_input").val(),
      height: $("#height_input").val(),
      weigh: $("#weight_input").val(),
      weight_target: $("#weight_target_input").val()
      };
 
      
    

  });//measurements
  $(".cook-time").click(function(){
    
    data.cook_time=$(this).attr("time");

  });//motivation


  

  $("#final_submit").click(function(){
   
data.email=$("#email_input").val();

axios.post('/create/statistics', data)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log("an error occured");
});

    });


});//end on ready

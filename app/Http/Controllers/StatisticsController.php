<?php

namespace App\Http\Controllers;

use App\Models\Statistic;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    public function create(Request $request){

        //['gender'=>$request->gender,'email'=>$request->email,"goal"=>$request->goal,"body_type"=>$request->body_type,"daily_life_style","last_time","fitness","energy","sleep_schedule","water_intake","motivation","cook_time",'habits','vegtables','food_products','meat','measurements'];

$tobeinserted=$request->all();
$tobeinserted['habits']=json_encode($tobeinserted['habits']);
$tobeinserted['vegtables']=json_encode($tobeinserted['vegtables']);
$tobeinserted['food_products']=json_encode($tobeinserted['food_products']);
$tobeinserted['meat']=json_encode($tobeinserted['meat']);
$tobeinserted['measurements']=json_encode($tobeinserted['measurements']);
$statistic=new Statistic($tobeinserted);

$statistic->save();


    }
}

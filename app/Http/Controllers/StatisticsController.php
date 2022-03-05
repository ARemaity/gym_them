<?php

namespace App\Http\Controllers;

use App\Mail\UserInfo;
use App\Models\Statistic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class StatisticsController extends Controller
{
    public function store(Request $request)
    {
        $tobeinserted = $request->all();
        $tobeinserted['habits'] = json_encode($tobeinserted['habits']);
        $tobeinserted['vegtables'] = json_encode($tobeinserted['vegtables']);
        $tobeinserted['food_products'] = json_encode($tobeinserted['food_products']);
        $tobeinserted['meat'] = json_encode($tobeinserted['meat']);
        $tobeinserted['measurements'] = json_encode($tobeinserted['measurements']);
        $statistic = new Statistic($tobeinserted);
       //protected $fillable = ['gender','email',"goal","body_type","daily_life_style","last_time","fitness","energy","sleep_schedule","water_intake","motivation","cook_time","lifeConcerns",'habits','vegtables','food_products','meat','measurements'];


        $validator = Validator::make($tobeinserted, [

            "habits" => "required|json",
            'gender'=>"required|string",
            'email'=>"required|email",
            "food_products" => "required|json",
            "measurements" => "required|json",
            "meat" => "required|json",
            "vegtables" => "required|json",
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors()], 400); //return json includes the status of the method and the errors 0:not inserted in the databse validation err
        }

       
        if ($statistic->save()) {
            Mail::to($request->email)->send(new UserInfo());

            return response(['message' => "stat inserted and an email have been sent"], 200); //return when stat found
        } //ifstat is inserted to database send an email

        return response(['message' => "an error occured"], 400);
    }

    public function destroy(Request $request)
    {

        if (Statistic::find($request->id)->delete()) {
            return response(['status' => "deleted"], 200); //return when stat found

        }
        return response(['status' => 0, "message" => "Error or statistic already deleted"], 404); //retrun when stat not found

    }

    public function index($id)
    {

        if ($stat = Statistic::find($id)) {

            return response(['statistic' => $stat], 200); //return when stat found

        }
        return response(['message' => "Statistic not found"], 404); //retrun when stat not found

    }
    public function all()
    {
        if($all=Statistic::all()){
            return response(['statistics' =>$all], 200);


        } //return all statistics
        return response(['message' => "No data available"], 404); //retrun when no stat not found
    }

} //endclass

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    use HasFactory;
    protected $table = 'statistics';   
    protected $fillable = ['gender','email',"goal","body_type","daily_life_style","last_time","fitness","energy","sleep_schedule","water_intake","motivation","cook_time","lifeConcerns",'habits','vegtables','food_products','meat','measurements'];
}

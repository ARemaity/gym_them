<?php

use App\Http\Controllers\StatisticsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//public routes
Route::POST('/store/statistics', [StatisticsController::class, 'store'])->name('create.statistics');//addto data base from the form

Route::POST('/statstic/signin',[UserController::class,'login']);
Route::POST('/statstic/signup',[UserController::class,'register']);

//protected routes
Route::group(["middleware" => ['auth:sanctum']], function () {
Route::delete('/statstic/destroy',[StatisticsController::class,'destroy']);
Route::get('/statstic/{id}',[StatisticsController::class,'index']);
Route::get('/statstic/all',[StatisticsController::class,'all']);
Route::POST('/statstic/signout',[UserController::class,'logout']);
});//end protected route

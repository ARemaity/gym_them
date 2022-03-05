<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statistics', function (Blueprint $table) {
            $table->id();
            $table->text("gender",20);
            $table->text("email",44);
            $table->text("goal",50);
            $table->text("body_type",20);
            $table->text("daily_life_style",60);
            $table->text("last_time",30);
            $table->text("fitness",60);
            $table->text("energy",70);
            $table->text("sleep_schedule",50);
            $table->text("water_intake",60);
            $table->text("motivation",20);
            $table->text("lifeConcerns",40);
            $table->text("cook_time",60);
            $table->json('habits');
            $table->json('vegtables');
            $table->json('food_products');
            $table->json('meat');
            $table->json('measurements');
            $table->timestamps();








        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('statistics');
    }
};

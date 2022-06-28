<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOefeningTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('oefeningen', function (Blueprint $table) {
            $table->id();
            $table->text('naam_nl',);
            $table->text('beschrijving_nl',);
            $table->text('naam_en',);
            $table->text('beschrijving_en',);
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
        Schema::dropIfExists('oefeningen');
    }
}

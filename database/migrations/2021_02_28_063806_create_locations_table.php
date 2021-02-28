<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('Latitude');
            $table->string('Longitude');
            $table->integer('NumberOfParkingSlots');
            $table->integer('PerSpotCharge');
            $table->time('OpeningTime');
            $table->time('ClosingTime');
            $table->unsignedBigInteger('LocationStatus');
            $table->unsignedBigInteger('OwnerID');

            $table->foreign('LocationStatus')
            ->references('id')->on('location_statuses')
            ->onDelete('cascade')->onUpdate('cascade');

            $table->foreign('OwnerID')
            ->references('id')->on('user_information')
            ->onDelete('cascade')->onUpdate('cascade');

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
        Schema::dropIfExists('locations');
    }
}

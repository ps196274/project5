<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class oefeningenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oefeningen')->insert([
            [
                'name' => 'Squat',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::tomorrow(),
            ],
            [
                'name' => 'Push Up',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::tomorrow(),
            ],
            [
                'name' => 'Dip',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::tomorrow(),
            ],
            [
                'name' => 'Plank',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::tomorrow(),
            ],
            [
                'name' => 'paardentrap',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::tomorrow(),
            ],
            [
                'name' => 'Mountain Climber',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::tomorrow(),
            ],
            [
                'name' => 'Burpee',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::tomorrow(),
            ],
            [
                'name' => 'Lunge',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::tomorrow(),
            ],
            [
                'name' => 'Wall sit',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::tomorrow(),
            ],
            [
                'name' => 'Crunch',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::tomorrow(),
            ],
        ]);
    }
}


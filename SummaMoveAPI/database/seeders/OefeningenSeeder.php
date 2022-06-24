<?php

namespace Database\Seeders;

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
            ],
            [
            'name' => 'Push Up',
            ],
            [
            'name' => 'Dip',
            ],
            [
            'name' => 'Plank',
            ],
            [
            'name' => 'paardentrap',
            ],
            [
            'name' => 'Mountain Climber',
            ],
            [
            'name' => 'Burpee',
            ],
            [
            'name' => 'Lunge',
            ],
            [
            'name' => 'Wall sit',
            ],
            [
            'name' => 'Crunch',
            ],
        ]);
    }
}


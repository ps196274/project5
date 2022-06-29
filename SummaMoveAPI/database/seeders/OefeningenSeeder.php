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
                'naam_nl' => 'Squat',
                'beschrijving_nl' =>'Squat: <br> 1.	Ga liggen op de grond
<br>2.	Zorg ervoor dat je handen op de grond zitten en je tenen
<br>3.	Zak langzaam omlaag en raak met je borst de grond aan
<br>4.	Ga weer omhoog en herhaal dit 5 keer
',
                'naam_en' => 'Squat',
                'beschrijving_en' =>'1.	Stand up straight.
2.	Keep your arms level with your shoulders.
3.	Lower your legs slowly.
4.	Make sure your knees are at a 90-degree angle.
5.	Go back up slowly and repeat 5 times.
',
            ],
            [
                'naam_nl' => 'Push-up',
                'beschrijving_nl' =>'1.	Ga liggen op de grond
2.	Zorg ervoor dat je handen op de grond zitten en je tenen
3.	Zak langzaam omlaag en raak met je borst de grond aan
4.	Ga weer omhoog en herhaal dit 5 keer
',
                'naam_en' => 'Push-up',
                'beschrijving_en' =>'1.	Lie down on the floor.
2.	Make sure your hands are on the floor and your toes.
3.	Lower down slowly and touch the floor with your chest.
4.	Go back up and repeat 5 times.
',
            ],
            [
                'naam_nl' => 'Dip',
                'beschrijving_nl' =>'1.	Grijp de parallelle “Dip bars”, spring omhoog en strek je armen.
2.	Buig en kruis je benen zodat ze stabiel staan en om diep te zakken.
3.	Leun een klein beetje naar voren, maar zorg dat je je lichaam recht houd. Laat je lichaam zakken door je armen te buigen.
4.	Zip langzaam en rustig naar beneden, zorg dat je schouders op dezelfde hoogte zitten als je ellebogen.
5.	Til je lichaam weer op met een snelle vaart door je armen volledig te strekken. Adem daarna uit.
6.	Zet je ellebogen even vast.
7.	Herhaal vanaf stap 2.
',
                'naam_en' => 'Dip',
                'beschrijving_en' =>'1.	Grab the parallel “Dip bars”, jump up and straighten your arms.
2.	Bend and cross your legs so that they are stable and to lower yourself deeply.
3.	Lean forward slightly but make sure to keep your body straight. Lower your body by bending your arms.
4.	Zip down slowly and steadily, keeping your shoulders level with your elbows.
5.	Lift your body back up at a rapid pace by extending your arms fully. Then exhale.
6.	Brace your elbows for a moment.
7.	Repeat from step 2.
',
            ],
            [
                'naam_nl' => 'Plank',
                'beschrijving_nl' =>'1.	Ga liggen op de grond
2.	Houd je ellebogen op een hoek van 90 graden onder je schouders
3.	Steun op je ellebogen en je tenen en zorg ervoor dat je rug recht is
4.	Probeer zo veel mogelijk recht te blijven
5.	Houdt deze positie vast voor 30 seconden
',
                'naam_en' => 'Plank',
                'beschrijving_en' =>'1.	Lie down on the floor.
2.	Keep your elbows at a 90-degree angle below your shoulders.
3.	Support on your elbows and your toes and make sure your back is straight.
4.	Try to stay straight as much as possible.
5.	Hold this position for 30 seconds.
',
            ],
            [
                'naam_nl' => 'Paardentrap',
                'beschrijving_nl' =>'1.	Ga met je ellebogen en knieën op de grond liggen met je gezicht naar de grond toe.
2.	Strek je rechterbeen naar achteren. Doe dit niet te overdreven.
3.	Houd je been voor een paar seconden gestrekt en ga dan terug naar de originele positie.
4.	Herhaal deze oefening nu met je andere been.
',
                'naam_en' => 'Donkey Kicks',
                'beschrijving_en' =>'1.	Lie with your elbows and knees on the floor with your face toward the floor.
2.	Stretch your right leg back. Dont overdo this.
    3.	Keep your leg straight for a few seconds, then return to the original position.
    4.	Now repeat this exercise with your other leg.
',
            ],
            [
                'naam_nl' => 'Mountain climber',
                'beschrijving_nl' =>'1.	Ga liggen en zet je handen op de grond en steun op je tenen
2.	Span je buik en bilspieren aan
3.	Breng steeds 1 been richting je arm toe
4.	Herhaal deze oefening 10 keer
',
                'naam_en' => 'Mountain climber',
                'beschrijving_en' =>'1.	Lie down and put your hands on the floor and lean on your toes.
2.	Tighten your abs and glutes.
3.	Always bring 1 leg towards your arm.
4.	Repeat this exercise 10 times.
',
            ],
            [
                'naam_nl' => 'Burpee',
                'beschrijving_nl' =>'1.	Ga liggen in een push-up houding. Zorg dat je dit doet met een rechte rug.
2.	Spring met je voeten richting je handen en duw jezelf met je benen omhoog.
3.	Houd je armen gestrekt tijdens de sprong
4.	Plaats je handen als eerste op de grond tijdens de landing en ga vervolgens weer naar je push-up positie.
5.	Herhaal nu de oefening.
',
                'naam_en' => 'Burpee',
                'beschrijving_en' =>'1.	Lie down in a push-up position. Make sure you do this with a straight back.
2.	Jump your feet toward your hands and push yourself up with your legs.
3.	Keep your arms straight during the jump
4.	Place your hands on the floor first on the landing and then return to your push-up position.
5.	Now repeat the exercise.
',
            ],
            [
                'naam_nl' => 'Lunge',
                'beschrijving_nl' =>'1.	Sta rechtop en zet beide handen op je heupen
2.	Doe met 1 voet een grote stap naar voor zorg ervoor dat die knie een hoek van 90 graden heeft
3.	De andere knie moet ook een hoek van 90 graden hebben en moet net de grond niet kunnen aanraken
4.	Blijf 5 seconden in deze positie en ga dan weer terug in de startpositie
5.	Doe dit nu met je andere been
6.	Herhaal dit 10 keer
',
                'naam_en' => 'Lunge',
                'beschrijving_en' =>'1.	Stand up straight and put both hands on your hips.
2.	Take a big step forward with 1 foot making sure that the knee is at a 90-degree angle.
3.	The other knee should also be at a 90-degree angle and just barely touch the ground.
4.	Stay in this position for 5 seconds and then return to the starting position.
5.	Now do this with your other leg.
6.	Repeat this 10 times.
',
            ],
            [
                'naam_nl' => 'Wall sit',
                'beschrijving_nl' =>'1.	zoek een muur en ga daar met je rug tegenaan staan.
2.	Duw je rug tegen de muur en laat jezelf langzaam naar beneden zakken en ga in de squat positie staan.
3.	Houd spanning in je bovenbenen, buikspieren en zorg dat je je rug recht houd.
4.	Behoud deze positie totdat de tijd op is.
',
                'naam_en' => 'Wall sit',
                'beschrijving_en' =>'1.	Find a wall and stand with your back against it.
2.	Push your back against the wall and slowly lower yourself down into the squat position.
3.	Keep tension in your thighs, abs and make sure to keep your back straight.
4.	Hold this position until the time is up.
',
            ],
            [
                'naam_nl' => 'Crunch',
                'beschrijving_nl' =>'1.	Ga op je buik liggen en maak zorg ervoor dat je knieën een hoek hebben van 90 graden
2.	Zet je handen op je borst
3.	Til in die positie langzaam je schouders op richting je knieën
4.	Zak nu terug, maar raak de grond niet aan herhaal deze oefening 10 keer
',
                'naam_en' => 'Crunch',
                'beschrijving_en' =>'1.	Lie on your stomach and make sure your knees are at a 90-degree angle.
2.	Put your hands on your chest.
3.	In that position, slowly lift your shoulders towards your knees.
4.	Now lower back, but do not touch the floor, repeat this exercise 10 times.
',
            ],
        ]);
    }
}


<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oefening extends Model
{
    use HasFactory;
    protected $table = 'oefeningen';
    protected $fillable = ["id", "naam_nl", "beschrijving_nl", "naam_en", "beschrijving_en"];

    public $timestamps = false;
}

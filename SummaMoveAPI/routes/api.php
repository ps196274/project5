<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\OefeningenController;
use App\Http\Controllers\PrestatiesController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::post('/register', [AuthenticationController::class, 'register']);
Route::post('/login', [AuthenticationController::class, 'login']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('profile', function(Request $request) {
        return auth()->user();
    });
//    Route::apiResource('drivers', DriverController::class);
    Route::apiResource('oefeningen', OefeningenController::class)->parameters(['oefeningen' => 'oefening']);
//    Route::apiResource('constructors', ConstructorController::class)->parameters(['constructors' => 'constructor'])->only(['index', 'show']);

//    Route::get('constructors/{id}/drivers', [DriverController::class, 'indexFunctie']);
    Route::post('/logout', [AuthenticationController::class, 'logout']);


});
Route::fallback(function(){
    return response()->json([
        'message' => 'Page Not Found'], 404);
});


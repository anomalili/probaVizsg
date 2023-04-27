<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SzakdogaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/nemAdmin', function () {
    return view('nemAdmin');
});





Route::get('/szakdogak',[SzakdogaController::class, 'index']);
Route::post('/szakdogak',[SzakdogaController::class, 'tarol']);
Route::put('/szakdogak/{id}' ,[SzakdogaController::class, 'modositas']);
Route::delete('/szakdogak/{id}',[SzakdogaController::class, 'torles']);


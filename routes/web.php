<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//This will show Home Screen
Route::get('/', function () {
    return view('welcome');
});

//This will show login screen
Route::get('/SignIn', function () {
    return "Please login";
});

//This will show SignUp screen
Route::get('/SignUp', function () {
    return "SignUp";
});

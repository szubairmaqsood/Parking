<?php
use App\Http\Controllers\PagesController;
use App\Http\Controllers\SignUpController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OwnerLocationFormController;


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
Route::get('/',[PagesController::class, 'index']);

//This will show SignIn screen
Route::get('/SignIn', [PagesController::class, 'SignIn']);
//This will show SignUp screen
Route::get('/SignUp', [PagesController::class, 'SignUp']);
//This will show owner location Form
Route::get('/OwnerLocationForm', [PagesController::class, 'OwnerLocationForm']);




//Sin up form submit
Route::post('SignUpSubmit',[SignUpController::class, 'store']);
//Sign in
Route::post('SignInSubmit',[LoginController::class, 'store']);

Route::post('OwnerLocationFormSubmit',[OwnerLocationFormController::class, 'store']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

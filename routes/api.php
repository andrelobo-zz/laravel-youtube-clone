<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::post('/users', 'UserController@store')->name('register');
Route::get('/users/{user}', 'UserController@show')->name('profile');

/**
 * Authenticated routes
 */
Route::group(['middleware' => 'auth'], function () {
	

});


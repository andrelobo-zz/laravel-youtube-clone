<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

/**
 * Authenticated routes
 */
Route::group(['middleware' => 'auth:api'], function () {

    Route::get('/users/profile', 'UserController@profile');
    Route::put('/users/profile', 'UserController@update');
    Route::delete('/users/profile', 'UserController@destroy');

    Route::get('/videos', 'VideoController@home');
    Route::post('/videos', 'VideoController@store');
});

Route::post('/users', 'UserController@store')->name('register');
Route::get('/users/{user}', 'UserController@show');

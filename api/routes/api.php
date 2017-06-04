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

    Route::post('/videos', 'VideoController@store');
});

Route::get('/videos', 'VideoController@home');
Route::get('/videos/category/{category}', 'VideoController@forCategory');
Route::get('/videos/{video}', 'VideoController@show');

Route::get('/categories/top', 'CategoryController@top');
Route::get('/categories/find', 'CategoryController@find');

Route::post('/users', 'UserController@store')->name('register');
Route::get('/users/{user}', 'UserController@show');

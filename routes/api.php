<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//PrimaryApi:
Route::get('/restaurants', 'Api\PrimaryController@index');

//Diets:
Route::get('/diets', 'Api\DietsController@index');

//Dishes:
Route::get('/dishes/{id}', 'Api\DishesController@index');

//Restaurants:
// Route::get('/restaurants', 'Api\RestaurantsController@index');


Route::get('/reviews/{id}', 'Api\ReviewsController@reviews');
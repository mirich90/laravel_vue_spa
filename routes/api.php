<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group(['namespace' => 'Post', 'prefix' => 'posts'], function () {
    Route::post('/', 'StoreController');
    Route::get('/', 'IndexController');
    Route::patch('/{post}', 'UpdateController');
    Route::delete('/{post}', 'DeleteController');
});
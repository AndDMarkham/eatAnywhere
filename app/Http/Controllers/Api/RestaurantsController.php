<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Restaurant;

class RestaurantsController extends Controller
{
    //
    public function index()
    {
        $restaurant=Restaurant::limit(3)->get();

        return $restaurant;
        
    }
}

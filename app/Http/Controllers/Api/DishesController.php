<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Dish;

class DishesController extends Controller
{
    public function index($id)
    {
        $restaurant_id = $id;
        $dishes=Dish::where('restaurant_id', $restaurant_id)->limit(3)->get();

        return $dishes;
    }
}




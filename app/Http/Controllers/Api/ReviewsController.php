<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Review;

class ReviewsController extends Controller
{
    public function reviews($id) 
    {
        $dish_id = $id;
        $reviews = Review::where('dish_id', $dish_id)->limit(5)->get();

        return $reviews;
    }
}

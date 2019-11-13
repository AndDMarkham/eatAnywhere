<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Review;

class ReviewsController extends Controller
{
    public function reviews() 
    {
        $reviews = Review::limit(10)->get();

        return $reviews;
    }
}

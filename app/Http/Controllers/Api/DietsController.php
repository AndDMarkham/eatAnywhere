<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Diet;

class DietsController extends Controller
{
    public function index()
    {
        $diets=Diet::get();

        return $diets;
    }
}

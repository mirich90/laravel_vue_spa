<?php

namespace App\Http\Controllers;

class IndexController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __invoke()
    {

        return view('index');
    }
}

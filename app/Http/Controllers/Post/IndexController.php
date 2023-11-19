<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\PostResource;
use App\Post;

class IndexController extends Controller
{

    public function __invoke()
    {
        $posts = Post::orderBy('updated_at', 'desc')->get();
        return PostResource::collection($posts);
    }
}

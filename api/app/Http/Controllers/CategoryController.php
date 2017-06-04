<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function top()
    {
        $categories = Category::withCount('videos')->orderBy('videos_count', 'desc')->take(10)->get();

        return $categories;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function find(Request $request)
    {
        if ($request->has('name')) {
            $categories = Category::where('name', 'like', '%' . $request->input('name') . '%')->withCount('videos')->orderBy('videos_count', 'desc')->take(10)->get();
        }
        else {
            $categories = Category::withCount('videos')->orderBy('videos_count', 'desc')->take(10)->get();
        }

        return $categories;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }
}

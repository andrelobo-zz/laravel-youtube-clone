<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\StoreVideo;
use App\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VideoController extends Controller
{
    private $videosPath = 'https://s3-eu-west-1.amazonaws.com/uni-generic-videos/';


    /**
     * Get trending/top videos
     *
     * @return \Illuminate\Http\Response
     */
    public function home()
    {
        $videos = Video::orderBy('created_at', 'desc')->simplePaginate();

        return $videos;
    }

    /**
     * Get videos for category
     *
     * @param  \App\Category $category
     * @return \Illuminate\Http\Response
     */
    public function forCategory(Category $category)
    {
        $videos = $category->videos()->orderBy('created_at', 'desc')->simplePaginate();

        return $videos;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreVideo $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVideo $request)
    {
        $path = $request->video->store('videos', 's3', 'public');

        $video = new Video($request->all());
        $video->file = $this->videosPath . $path;

        $video = Auth::user()->videos()->save($video);

        // Categories we wan't to add
        $inputCategories = explode(',', $request->input('categories'));

        // Find categories we wan't to add to video
        $existingCategories = Category::whereIn('name', $inputCategories)->get();

        // Get categories that needs to be created
        $inputCategories = array_filter($inputCategories, function ($value) use ($existingCategories) {
            $isCreated = $existingCategories->where('name', $value);
            return count($isCreated) == 0;
        });

        $createdCategories = array_map(function ($value) {
            return Category::create(["name" => $value]);
        }, $inputCategories);

        $video->categories()->attach($existingCategories);
        $video->categories()->attach(array_map(function ($value) {
            return $value["id"];
        }, $createdCategories));

        return $video;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Video $video
     * @return \Illuminate\Http\Response
     */
    public function show(Video $video)
    {
        return $video;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Video $video
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Video $video)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Video $video
     * @return \Illuminate\Http\Response
     */
    public function destroy(Video $video)
    {
        //
    }
}

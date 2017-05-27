<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Http\Requests\StoreUser;
use App\Http\Requests\UpdateUser;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show current authenticated user.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
        $user = Auth::user()->load(['videos' => function ($query) {
            $query->orderBy('created_at', 'desc');
        }, 'videos.categories']);

        return $user;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreUser $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUser $request)
    {
        $user = new User($request->all());
        $user->save();
        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * Update current authenticated user.
     *
     * @param  UpdateUser $request
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUser $request)
    {
        $user = Auth::user();
        $user->update($request->all());
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user = Auth::user();
        $user->delete();
        return $user;
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use Uuids;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description', 'private',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['categories', 'user'];

    /**
     * Get the User for the video.
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id', 'uuid');
    }

    /**
     * Get Categories for video.
     */
    public function categories()
    {
        return $this->belongsToMany('App\Category');
    }
}

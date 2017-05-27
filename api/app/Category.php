<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
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
        'name',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];

    /**
     * Get videos for Category.
     */
    public function videos()
    {
        return $this->belongsToMany('App\Video');
    }
}

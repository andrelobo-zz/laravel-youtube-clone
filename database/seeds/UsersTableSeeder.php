<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 15)
            ->create()
            ->each(function ($user) {
                for ($i = 1; $i <= 15; $i++) {
                    $video = $user->videos()->save(factory(App\Video::class)->make());

                    for ($j = 1; $j <= 3; $j++) {
                        $video->categories()->save(factory(App\Category::class)->make());
                    }
                }
            });
    }
}

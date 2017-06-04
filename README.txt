REQUIREMENTS
============
* Composer
* NodeJS 7.3+
* PHP 7.x
* MySQL / MariaDB

API
===
# configuration
Check db connection info in .env file

# install dependencies
composer install

# setting up db
php artisan migrate
php artisan passport:install

# seeding db (none of videos work, but there is some dummy data, each user has password "secret")
php artisan db:seed

# starting development server localhost:8000
php artisan serve

APP
===
# install dependencies
npm install

# set authentication settings
change "client_secret" in app/src/api/authenticate with correct value from db
> SELECT secret FROM uni_generic_videos.oauth_clients WHERE id = 2

# serve with hot reload at localhost:8080
npm run dev

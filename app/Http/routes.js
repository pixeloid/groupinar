'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('home')

/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
*/
Route.get('register', 'AuthController.showRegisterPage')
Route.post('register', 'AuthController.register')
Route.get('login', 'AuthController.showLoginPage')
Route.post('login', 'AuthController.login')
Route.get('logout', 'AuthController.logout')

// Webinar routes
Route.get('webinars', 'WebinarController.index').middleware('auth')
Route.get('webinar/new', 'WebinarController.new').middleware('auth')
Route.post('webinar/new', 'WebinarController.newsave')
Route.get('webinar/host/:slug', 'WebinarController.host').middleware('auth')
Route.get('webinar/guest/:slug', 'WebinarController.guest')
Route.get('webinar/token','WebinarController.token')

// all twilio related routes go to `TalkController`
Route.get('/sms', 'TalkController.sendsms')
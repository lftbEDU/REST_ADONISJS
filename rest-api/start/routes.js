'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON lftb' }
})

Route.group( () => {
  Route.post('usuarios/registro','UsuarioController.store')
  Route.post('usuarios/login','UsuarioController.login')
  Route.get('proyectos','ProyectoController.index').middleware('auth')
  Route.post('proyectos','ProyectoController.create').middleware('auth')
  Route.delete('proyectos/:id','ProyectoController.destroy').middleware('auth')
  Route.patch('proyectos/:id','ProyectoController.update').middleware('auth')
}).prefix('api/v1')
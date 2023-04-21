'use strict'
const Usuario = use('App/Models/User');

class UsuarioController {
    async login({ request, auth }){
        const { username, email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

    async store({ request }) {
      const { username, email, password } = request.all();
     // console.log(email, password);
       const user = await Usuario.create({
       email,
       password,
       username: email
      });
      return this.login(...arguments);
    }; 
    
}

module.exports = UsuarioController

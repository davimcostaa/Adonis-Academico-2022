// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";

export default class DisciplinasController {

    index(){
        return Disciplina.all()
    }

    async store({request}){
        const dados = request.only(['nome', 'curso_id'])
        return await Disciplina.create(dados)
    }


}






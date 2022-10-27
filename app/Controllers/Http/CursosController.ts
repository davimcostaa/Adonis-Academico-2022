// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";
import CursoValidator from "App/Validators/CursoValidator";

export default class CursosController {
     
    index(){
        return Curso.query().preload('disciplinas')
    }

    async store({request}){
        const dados = await request.validate(CursoValidator)
        return await Curso.create(dados)
    }

    show({request}) {
        const id = request.param('id')

        return Curso.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)

        return curso.delete()

    }

   async update({request}) {
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)

        const dados = request.only(['nome', 'modalidade', 'duracao'])

        curso.merge(dados)

        return curso.save()

    }

}


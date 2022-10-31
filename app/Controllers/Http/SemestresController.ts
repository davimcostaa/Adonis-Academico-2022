import Semestre from "App/Models/Semestre"
import SemestreValidator from "App/Validators/SemestreValidator"

export default class SemestresController {
    index(){
        return Semestre.all()
    }

    async store({request}){
        const dados = await request.validate(SemestreValidator)
        return await Semestre.create(dados)
    }

    show({request}) {
        const id = request.param('id')

        return Semestre.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const semestre = await Semestre.findOrFail(id)

        return semestre.delete()

    }

   async update({request}) {
        const id = request.param('id')
        const semestre = await Semestre.findOrFail(id)

        const dados = request.only(['nome', 'dataInicio', 'dataFim'])

        semestre.merge(dados)

        return semestre.save()

    }
}

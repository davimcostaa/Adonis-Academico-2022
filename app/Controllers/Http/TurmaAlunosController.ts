import TurmaAluno from "App/Models/TurmaAluno"

export default class TurmaAlunosController {
    index(){
        return TurmaAluno.all()
    }

    async store({request}){
        const dados = request.only(['turmasId', 'alunosId'])
        return await TurmaAluno.create(dados)
    }

    show({request}) {
        const id = request.param('id')

        return TurmaAluno.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const turmaAluno = await TurmaAluno.findOrFail(id)

        return turmaAluno.delete()

    }

   async update({request}) {
        const id = request.param('id')
        const turmaAluno = await TurmaAluno.findOrFail(id)

        const dados = request.only(['turmasId', 'alunosId'])

        turmaAluno.merge(dados)

        return turmaAluno.save()

    }
}
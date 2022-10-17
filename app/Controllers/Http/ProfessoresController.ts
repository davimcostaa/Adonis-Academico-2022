import Professore from "App/Models/Professore";

export default class ProfessoresController {
    index(){
        return Professore.all()
    }

    async store({request}){
        const dados = request.only(['nome', 'cpf', 'matricula', 'salario', 'email', 'telefone', 'cep', 'logradouro', 'numero', 'bairro'])
        return await Professore.create(dados)
    }

    show({request}) {
        const id = request.param('id')

        return Professore.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const professor = await Professore.findOrFail(id)

        return professor.delete()

    }

   async update({request}) {
        const id = request.param('id')
        const professor = await Professore.findOrFail(id)

        const dados = request.only(['nome', 'cpf', 'matricula', 'salario', 'email', 'telefone', 'cep', 'logradouro', 'numero', 'bairro'])

        professor.merge(dados)

        return professor.save()

    }
}

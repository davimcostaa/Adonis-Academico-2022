import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professor from 'App/Models/Professore'

export default class extends BaseSeeder {
  public async run () {
    await Professor.createMany([
      {nome: 'Orion', cpf: 77777777777, matricula: '3450', salario: '2500' ,email: 'orion@iesb.edu.br', 
      telefone: '61993915306', cep: 18349209, 
      logradouro: 'QNN 21', numero: '34', bairro: 'Ceilandia Norte'}, 
      {nome: 'Carlos B', cpf: 888888888, matricula: '3451', salario: '2500', email: 'carlos@iesb.edu.br', 
      telefone: '61993915306', cep: 72225210, 
      logradouro: 'QNN 23', numero: '11', bairro: 'Ceilandia Norte'},
      {nome: 'João Pedro', cpf: 99999999999, matricula: '3452', salario: '2500', email: 'joao.pedro@iesb.edu.br', 
      telefone: '61993915306', cep: 72225215}, 
      {nome: 'Gabriel', cpf: 1010101010, matricula: '3453', email: 'gabriel@iesb.edu.br', 
      telefone: '61993915306', cep: 72225214}
    ])
  }
}

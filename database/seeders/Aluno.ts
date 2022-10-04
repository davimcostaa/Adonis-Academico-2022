import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {nome: 'Davi M', cpf: 11111111111, matricula: '202100000', email: 'aluno@iesb.edu.br', 
      telefone: '61993915306', cep: 72225213, 
      logradouro: 'QNN 21', numero: '34', bairro: 'Ceilandia Norte'}, 
      {nome: 'Carlos B', cpf: 22222222222, matricula: '20220000', email: 'aluno@iesb.edu.br', 
      telefone: '61993915306', cep: 72225210, 
      logradouro: 'Rua Alvaro', numero: '11', bairro: 'Ceilandia Norte'},
      {nome: 'João Pedro', cpf: 33333333333, matricula: '202100001', email: 'aluno@iesb.edu.br', 
      telefone: '61993915306', cep: 72225215}, 
      {nome: 'Guilherme', cpf: 44444444444, matricula: '202100002', email: 'aluno@iesb.edu.br', 
      telefone: '61993915306', cep: 72225214, 
      logradouro: 'Rua Alvaro', bairro: 'Ceilandia Norte'},
    ])
  }
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Chamada from 'App/Models/Chamada'

export default class extends BaseSeeder {
  public async run () {
    await Chamada.createMany([
      {aulaId: 1, alunosId: 1, presenca: 'S'}, 
      {aulaId: 1, alunosId: 2, presenca: 'S'}, 
      {aulaId: 1, alunosId: 3, presenca: 'N'}, 
      {aulaId: 1, alunosId: 4, presenca: 'N'}, 
      {aulaId: 1, alunosId: 5, presenca: 'S'}, 
      {aulaId: 2, alunosId: 1, presenca: 'S'}, 
      {aulaId: 2, alunosId: 2, presenca: 'S'}, 
      {aulaId: 2, alunosId: 3, presenca: 'S'}, 
      {aulaId: 2, alunosId: 4, presenca: 'S'}, 
    ])
  }
}

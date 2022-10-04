import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'

export default class extends BaseSeeder {
  public async run () {
   await Aula.createMany([
    {data: new Date("2022-07-04"), conteudo: "Conteúdo aula1", turmaId: 1},
    {data: new Date('2022-07-05'), conteudo: "Conteúdo aula2", turmaId: 3},
    {data: new Date('2022-08-04'), conteudo: "Conteúdo aula33", turmaId: 2},
    {data: new Date('2022-07-01'), conteudo: "prova", turmaId: 4},
  ])
  }
}

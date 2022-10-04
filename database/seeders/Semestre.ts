import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder {
  public async run () {
    await Semestre.createMany([
      {nome: "1 semestre", dataInicio: new Date("2022-03-15"), dataFim: new Date("2022-07-05")},
      {nome: "2 semestre", dataInicio: new Date("2022-08-05"), dataFim: new Date("2022-12-10")}
    ])
  }
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'
export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {nome: '2031ADS01', professorId: 1, semestreId: 1, disciplinaId: 1, salaId: 2, turno: 'M'}, 
      {nome: '2051ADS02', professorId: 1, semestreId: 2, disciplinaId: 2, salaId: 6, turno: 'M'}, 
      {nome: '2031DI01', professorId: 3, semestreId: 1, disciplinaId: 5, salaId: 4, turno: 'N'}, 
      {nome: '2031FI01', professorId: 2, semestreId: 1, disciplinaId: 6, salaId: 8, turno: 'N'}, 
    ])
}
}
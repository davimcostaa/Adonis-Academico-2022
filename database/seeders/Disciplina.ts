import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
      {nome: 'backend', cursoId: 1},
      {nome: 'frontend', cursoId: 1},
      {nome: 'Redes1', cursoId: 10},
      {nome: 'Anatomia', cursoId: 4},
      {nome: 'Direito Penal', cursoId: 2},
      {nome: 'Freud', cursoId: 7},
    ])
  }
}

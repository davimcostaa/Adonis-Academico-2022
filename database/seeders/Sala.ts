import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run () {
    await Sala.createMany([
      {nome: 'AA1', capacidade: 15, tipo: 'S'},
      {nome: 'AA2', capacidade: 20, tipo: 'S'},
      {nome: 'AA3', capacidade: 40, tipo: 'S'},
      {nome: 'AA4', capacidade: 50, tipo: 'S'},
      {nome: 'AA5', capacidade: 15, tipo: 'S'},
      {nome: 'AA6', capacidade: 60, tipo: 'S'},
      {nome: 'BB1', capacidade: 60, tipo: 'L'},
      {nome: 'BB2', capacidade: 70, tipo: 'L'},
      {nome: 'BB3', capacidade: 40, tipo: 'S'},
      {nome: 'BB4', capacidade: 25, tipo: 'S'},
      {nome: 'BB5', capacidade: 30, tipo: 'S'},
      {nome: 'BB5', capacidade: 40, tipo: 'L'},
    ])
  }

  }


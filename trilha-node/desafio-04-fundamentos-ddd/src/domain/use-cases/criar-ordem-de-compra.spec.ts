import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OrdemDeCompra } from '../entities/ordem-de-compra'
import { OrdensDeCompraRepository } from '../repositories/ordem-de-compra-repository'
import { CriarOrdemDeCompraUseCase } from './criar-ordem-de-compra'

const fakeOrdensDeCompraRepository: OrdensDeCompraRepository = {
  create: async (ordem: OrdemDeCompra) => {
    console.log('Ordem de Compra criada com sucesso!')
  },
  findById: async (id: string) => null,
  findAll: async () => [],
}

test('create a purchase order', async () => {
  const criarOrdemDeCompra = new CriarOrdemDeCompraUseCase(
    fakeOrdensDeCompraRepository,
  )

  const prazoEntrega = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Prazo de entrega em 7 dias

  const ordemDeCompraCriada = await criarOrdemDeCompra.execute({
    produtos: [
      { produtoId: '1', quantidade: 50 }, // ID do produto e quantidade
    ],
    fornecedorId: '1', // ID do fornecedor
    prazoEntrega, // Prazo de entrega
  })

  expect(ordemDeCompraCriada.produtos).toEqual([
    { produtoId: new UniqueEntityID('1'), quantidade: 50 },
  ])
  expect(ordemDeCompraCriada.fornecedorId).toEqual(new UniqueEntityID('1'))
  expect(ordemDeCompraCriada.prazoEntrega).toEqual(prazoEntrega) // Verifica o prazo de entrega
})

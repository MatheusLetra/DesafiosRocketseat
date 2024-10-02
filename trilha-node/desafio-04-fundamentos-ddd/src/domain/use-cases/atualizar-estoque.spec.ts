import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Estoque } from '../entities/estoque'
import { EstoquesRepository } from '../repositories/estoque-repository'
import { AtualizarEstoqueUseCase } from './atualizar-estoque'

const fakeEstoquesRepository: EstoquesRepository = {
  create: async (estoque: Estoque) => {
    // Implementação fictícia, não usada aqui
  },
  findByProdutoId: async (produtoId: UniqueEntityID) => {
    // Retorna um estoque de exemplo
    return Estoque.create({
      produtoId,
      quantidadeAtual: 100,
      movimentacaoHistorico: [],
      createdAt: new Date(),
    })
  },
  update: async (estoque: Estoque) => {
    // Simula a atualização do estoque no repositório
    console.log(
      `Estoque do produto ${estoque.produtoId} atualizado para a quantidade ${estoque.quantidadeAtual}`,
    )
  },
}

test('update stock quantity', async () => {
  const atualizarEstoque = new AtualizarEstoqueUseCase(fakeEstoquesRepository)

  const estoqueAtualizado = await atualizarEstoque.execute({
    produtoId: '1', // Aqui usamos string, mas será convertido para UniqueEntityID
    quantidade: 150,
  })

  // Verifica se a quantidade foi atualizada corretamente
  expect(estoqueAtualizado.quantidadeAtual).toEqual(150)
})

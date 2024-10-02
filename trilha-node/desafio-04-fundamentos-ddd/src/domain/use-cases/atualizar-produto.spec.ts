import { Produto } from '../entities/produto'
import { ProdutosRepository } from '../repositories/produto-repository'
import { AtualizarProdutoUseCase } from './atualizar-produto'

const fakeProdutosRepository: ProdutosRepository = {
  findById: async (id: string) => {
    return Produto.create({
      nome: 'Produto Antigo',
      quantidade: 100,
      preco: 50,
      limiteMinimo: 10,
      tamanho: 'M',
      cor: 'Azul',
    })
  },
  update: async (produto: Produto) => {},
  create: async (produto: Produto) => {},
  findAll: function (): Promise<Produto[]> {
    throw new Error('Function not implemented.')
  },
  delete: function (id: string): Promise<void> {
    throw new Error('Function not implemented.')
  },
}

test('update produto details', async () => {
  const atualizarProduto = new AtualizarProdutoUseCase(fakeProdutosRepository)

  const produtoAtualizado = await atualizarProduto.execute({
    produtoId: '1',
    nome: 'Produto Novo',
    quantidade: 150,
    preco: 70,
    limiteMinimo: 5,
    tamanho: 'L',
    cor: 'Vermelho',
  })

  expect(produtoAtualizado.nome).toEqual('Produto Novo')
  expect(produtoAtualizado.quantidade).toEqual(150)
  expect(produtoAtualizado.preco).toEqual(70)
  expect(produtoAtualizado.limiteMinimo).toEqual(5)
  expect(produtoAtualizado.tamanho).toEqual('L')
  expect(produtoAtualizado.cor).toEqual('Vermelho')
})

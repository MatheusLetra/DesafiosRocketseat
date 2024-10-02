import { Produto } from '../entities/produto'
import { ProdutosRepository } from '../repositories/produto-repository'
import { CriarProdutoUseCase } from './criar-produto'

const fakeProdutosRepository: ProdutosRepository = {
  create: async (produto: Produto) => {
    // Simula a criação de um produto no repositório
    console.log(`Produto ${produto.nome} criado com sucesso!`)
  },
  findById: async (id: string) => null,
  update: async (produto: Produto) => {},
  findAll: async () => [],
  delete: async (id: string) => {},
}

test('create a product', async () => {
  const criarProduto = new CriarProdutoUseCase(fakeProdutosRepository)

  const produtoCriado = await criarProduto.execute({
    nome: 'Produto Exemplo',
    preco: 50,
    quantidade: 100,
    limiteMinimo: 10,
  })

  expect(produtoCriado.nome).toEqual('Produto Exemplo')
  expect(produtoCriado.preco).toEqual(50)
})

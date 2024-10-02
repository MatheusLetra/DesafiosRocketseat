import { Fornecedor } from '../entities/fornecedor'
import { FornecedoresRepository } from '../repositories/fornecedor-repository'
import { CriarFornecedorUseCase } from './criar-fornecedor'

const fakeFornecedoresRepository: FornecedoresRepository = {
  create: async (fornecedor: Fornecedor) => {
    return
  },
  findById: async (id: string) => null,
  update: async (fornecedor: Fornecedor) => {},
  findAll: function (): Promise<Fornecedor[]> {
    throw new Error('Function not implemented.')
  },
  delete: function (id: string): Promise<void> {
    throw new Error('Function not implemented.')
  },
}

test('create a new fornecedor', async () => {
  const criarFornecedor = new CriarFornecedorUseCase(fakeFornecedoresRepository)

  const fornecedor = await criarFornecedor.execute({
    nome: 'Fornecedor Exemplo',
    contato: 'contato@example.com',
    prazoEntrega: 7,
  })

  expect(fornecedor.nome).toEqual('Fornecedor Exemplo')
  expect(fornecedor.contato).toEqual('contato@example.com')
  expect(fornecedor.prazoEntrega).toEqual(7)
})

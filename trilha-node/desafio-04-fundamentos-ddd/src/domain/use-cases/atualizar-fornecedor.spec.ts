import { Fornecedor } from '../entities/fornecedor'
import { FornecedoresRepository } from '../repositories/fornecedor-repository'
import { AtualizarFornecedorUseCase } from './atualizar-fornecedor'

const fakeFornecedoresRepository: FornecedoresRepository = {
  findById: async (id: string) => {
    return Fornecedor.create({
      nome: 'Fornecedor Antigo',
      contato: 'old@example.com',
      prazoEntrega: 5,
    })
  },
  update: async (fornecedor: Fornecedor) => {},
  create: async (fornecedor: Fornecedor) => {},
  findAll: function (): Promise<Fornecedor[]> {
    throw new Error('Function not implemented.')
  },
  delete: function (id: string): Promise<void> {
    throw new Error('Function not implemented.')
  },
}

test('update fornecedor details', async () => {
  const atualizarFornecedor = new AtualizarFornecedorUseCase(
    fakeFornecedoresRepository,
  )

  const fornecedorAtualizado = await atualizarFornecedor.execute({
    fornecedorId: '1',
    nome: 'Novo Fornecedor',
    contato: 'novo@example.com',
    prazoEntrega: 10,
  })

  expect(fornecedorAtualizado.nome).toEqual('Novo Fornecedor')
  expect(fornecedorAtualizado.contato).toEqual('novo@example.com')
  expect(fornecedorAtualizado.prazoEntrega).toEqual(10)
})

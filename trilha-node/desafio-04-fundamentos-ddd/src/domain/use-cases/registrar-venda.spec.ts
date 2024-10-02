import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Venda } from '../entities/venda'
import { VendasRepository } from '../repositories/venda-repository'
import { RegistrarVendaUseCase } from './registrar-venda'

const fakeVendasRepository: VendasRepository = {
  create: async (venda: Venda) => {
    console.log('Venda registrada com sucesso!')
  },
  findById: async (id: string) => null,
  findAll: async () => [],
}

test('register a sale', async () => {
  const registrarVenda = new RegistrarVendaUseCase(fakeVendasRepository)

  const vendaRegistrada = await registrarVenda.execute({
    produtoId: '1', // ID do produto
    quantidade: 3, // Quantidade vendida
    valorTotal: 150, // Valor total da venda
  })

  expect(vendaRegistrada.produtoId).toEqual(new UniqueEntityID('1'))
  expect(vendaRegistrada.quantidade).toEqual(3)
  expect(vendaRegistrada.valorTotal).toEqual(150)
  expect(vendaRegistrada.dataVenda).toBeInstanceOf(Date) // Verifica se a data da venda é uma instância de Date
})

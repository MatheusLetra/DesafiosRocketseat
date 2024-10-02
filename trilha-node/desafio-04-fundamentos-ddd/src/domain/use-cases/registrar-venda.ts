import { UniqueEntityID } from '@/core/entities/unique-entity-id'
// src/usecases/registrar-venda.ts
import { Venda } from '../entities/venda'
import { VendasRepository } from '../repositories/venda-repository'

interface RegistrarVendaUseCaseRequest {
  produtoId: string
  quantidade: number
  valorTotal: number
}

export class RegistrarVendaUseCase {
  constructor(private vendasRepository: VendasRepository) {}

  async execute({
    produtoId,
    quantidade,
    valorTotal,
  }: RegistrarVendaUseCaseRequest): Promise<Venda> {
    const venda = Venda.create({
      produtoId: new UniqueEntityID(produtoId),
      quantidade,
      valorTotal,
      dataVenda: new Date(), // Define a data da venda como a data atual
    })

    await this.vendasRepository.create(venda)
    return venda
  }
}

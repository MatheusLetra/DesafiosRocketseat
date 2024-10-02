import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OrdemDeCompra } from '../entities/ordem-de-compra'
import { OrdensDeCompraRepository } from '../repositories/ordem-de-compra-repository'

interface CriarOrdemDeCompraUseCaseRequest {
  produtos: Array<{ produtoId: string; quantidade: number }>
  fornecedorId: string
  prazoEntrega: Date
}

export class CriarOrdemDeCompraUseCase {
  constructor(private ordensDeCompraRepository: OrdensDeCompraRepository) {}

  async execute({
    produtos,
    fornecedorId,
    prazoEntrega,
  }: CriarOrdemDeCompraUseCaseRequest): Promise<OrdemDeCompra> {
    const ordemDeCompra = OrdemDeCompra.create({
      produtos: produtos.map((prod) => ({
        produtoId: new UniqueEntityID(prod.produtoId),
        quantidade: prod.quantidade,
      })),
      fornecedorId: new UniqueEntityID(fornecedorId),
      prazoEntrega,
    })

    await this.ordensDeCompraRepository.create(ordemDeCompra)
    return ordemDeCompra
  }
}

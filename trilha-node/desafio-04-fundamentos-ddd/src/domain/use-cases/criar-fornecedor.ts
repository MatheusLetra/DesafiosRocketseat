import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Fornecedor } from '../entities/fornecedor'
import { FornecedoresRepository } from '../repositories/fornecedor-repository'

interface CriarFornecedorUseCaseRequest {
  nome: string
  contato: string
  prazoEntrega: number
}

export class CriarFornecedorUseCase {
  constructor(private fornecedoresRepository: FornecedoresRepository) {}

  async execute({
    nome,
    contato,
    prazoEntrega,
  }: CriarFornecedorUseCaseRequest) {
    // Cria uma nova instância de fornecedor
    const fornecedor = Fornecedor.create({
      nome,
      contato,
      prazoEntrega,
    })

    // Persiste o fornecedor no repositório
    await this.fornecedoresRepository.create(fornecedor)

    return fornecedor
  }
}

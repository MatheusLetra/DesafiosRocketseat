import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Estoque } from '../entities/estoque'
import { EstoquesRepository } from '../repositories/estoque-repository'

interface AtualizarEstoqueUseCaseRequest {
  produtoId: string // Aqui ainda usamos string, mas converteremos para UniqueEntityID
  quantidade: number
}

export class AtualizarEstoqueUseCase {
  constructor(private estoquesRepository: EstoquesRepository) {}

  async execute({ produtoId, quantidade }: AtualizarEstoqueUseCaseRequest) {
    const uniqueId = new UniqueEntityID(produtoId) // Converte string para UniqueEntityID
    const estoque = await this.estoquesRepository.findByProdutoId(uniqueId)

    if (!estoque) {
      throw new Error('Estoque não encontrado')
    }

    // Atualiza a quantidade atual
    estoque.quantidadeAtual = quantidade

    await this.estoquesRepository.update(estoque)

    return estoque
  }
}

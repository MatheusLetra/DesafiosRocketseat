import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Estoque } from '../entities/estoque'

export interface EstoquesRepository {
  create(estoque: Estoque): Promise<void>
  findByProdutoId(produtoId: UniqueEntityID): Promise<Estoque | null>
  update(estoque: Estoque): Promise<void>
}

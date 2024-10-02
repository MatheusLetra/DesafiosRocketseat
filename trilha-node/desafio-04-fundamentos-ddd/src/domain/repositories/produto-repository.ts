import { Produto } from '../entities/produto'

export interface ProdutosRepository {
  create(produto: Produto): Promise<void>
  findById(id: string): Promise<Produto | null>
  findAll(): Promise<Produto[]>
  update(produto: Produto): Promise<void>
  delete(id: string): Promise<void>
}

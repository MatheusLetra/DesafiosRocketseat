import { Venda } from '../entities/venda'

export interface VendasRepository {
  create(venda: Venda): Promise<void>
  findById(id: string): Promise<Venda | null>
  findAll(): Promise<Venda[]>
}

import { OrdemDeCompra } from '../entities/ordem-de-compra'

export interface OrdensDeCompraRepository {
  create(ordem: OrdemDeCompra): Promise<void>
  findById(id: string): Promise<OrdemDeCompra | null>
  findAll(): Promise<OrdemDeCompra[]>
}

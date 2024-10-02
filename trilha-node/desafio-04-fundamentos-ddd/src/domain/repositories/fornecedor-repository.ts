import { Fornecedor } from '../entities/fornecedor'

export interface FornecedoresRepository {
  create(fornecedor: Fornecedor): Promise<void>
  findById(id: string): Promise<Fornecedor | null>
  findAll(): Promise<Fornecedor[]>
  update(fornecedor: Fornecedor): Promise<void>
  delete(id: string): Promise<void>
}

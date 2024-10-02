// src/entities/ordem-de-compra.ts
import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface OrdemDeCompraProps {
  produtos: Array<{ produtoId: UniqueEntityID; quantidade: number }>
  fornecedorId: UniqueEntityID
  prazoEntrega: Date
  createdAt: Date
  updatedAt?: Date
}

export class OrdemDeCompra extends Entity<OrdemDeCompraProps> {
  get produtos() {
    return this.props.produtos
  }

  get fornecedorId() {
    return this.props.fornecedorId
  }

  get prazoEntrega() {
    return this.props.prazoEntrega
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(
    props: Omit<OrdemDeCompraProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    return new OrdemDeCompra(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )
  }
}

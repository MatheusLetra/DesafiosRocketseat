// src/entities/venda.ts
import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface VendaProps {
  produtoId: UniqueEntityID
  quantidade: number
  valorTotal: number
  dataVenda: Date
  createdAt: Date
  updatedAt?: Date
}

export class Venda extends Entity<VendaProps> {
  get produtoId() {
    return this.props.produtoId
  }

  get quantidade() {
    return this.props.quantidade
  }

  get valorTotal() {
    return this.props.valorTotal
  }

  get dataVenda() {
    return this.props.dataVenda
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(props: Omit<VendaProps, 'createdAt'>, id?: UniqueEntityID) {
    return new Venda(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )
  }
}

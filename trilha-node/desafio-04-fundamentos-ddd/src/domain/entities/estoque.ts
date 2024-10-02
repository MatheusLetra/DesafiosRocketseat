import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface EstoqueProps {
  produtoId: UniqueEntityID
  quantidadeAtual: number
  movimentacaoHistorico: Array<{ data: Date; quantidade: number }>
  createdAt: Date
  updatedAt?: Date
}

export class Estoque extends Entity<EstoqueProps> {
  get produtoId() {
    return this.props.produtoId
  }

  get quantidadeAtual() {
    return this.props.quantidadeAtual
  }

  get movimentacaoHistorico() {
    return this.props.movimentacaoHistorico
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  set quantidadeAtual(quantidade: number) {
    this.props.quantidadeAtual = quantidade
    this.touch()
  }

  addMovimentacao(data: Date, quantidade: number) {
    this.props.movimentacaoHistorico.push({ data, quantidade })
    this.touch()
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<EstoqueProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const estoque = new Estoque(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return estoque
  }
}

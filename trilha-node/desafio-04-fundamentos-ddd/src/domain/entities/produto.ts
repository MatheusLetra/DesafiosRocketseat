import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface ProdutoProps {
  nome: string
  quantidade: number
  preco: number
  limiteMinimo: number
  tamanho?: string
  cor?: string
}

export class Produto extends Entity<ProdutoProps> {
  get nome() {
    return this.props.nome
  }

  get quantidade() {
    return this.props.quantidade
  }

  get preco() {
    return this.props.preco
  }

  get limiteMinimo() {
    return this.props.limiteMinimo
  }

  get tamanho() {
    return this.props.tamanho
  }

  get cor() {
    return this.props.cor
  }

  // Métodos de atualização
  public atualizarNome(novoNome: string) {
    this.props.nome = novoNome
  }

  public atualizarQuantidade(novaQuantidade: number) {
    this.props.quantidade = novaQuantidade
  }

  public atualizarPreco(novoPreco: number) {
    this.props.preco = novoPreco
  }

  public atualizarLimiteMinimo(novoLimite: number) {
    this.props.limiteMinimo = novoLimite
  }

  public atualizarTamanho(novoTamanho: string) {
    this.props.tamanho = novoTamanho
  }

  public atualizarCor(novaCor: string) {
    this.props.cor = novaCor
  }

  // Método estático para criar um produto
  static create(props: ProdutoProps, id?: UniqueEntityID): Produto {
    const produto = new Produto(props, id)
    return produto
  }
}

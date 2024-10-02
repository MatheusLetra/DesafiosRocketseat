import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface FornecedorProps {
  nome: string
  contato: string
  prazoEntrega: number
}

export class Fornecedor extends Entity<FornecedorProps> {
  get nome() {
    return this.props.nome
  }

  get contato() {
    return this.props.contato
  }

  get prazoEntrega() {
    return this.props.prazoEntrega
  }

  // Método para criar um novo fornecedor
  static create(props: FornecedorProps, id?: UniqueEntityID): Fornecedor {
    const fornecedor = new Fornecedor(props, id)
    return fornecedor
  }

  // Métodos de atualização para outras funcionalidades, como no caso de uso anterior
  public atualizarNome(novoNome: string) {
    this.props.nome = novoNome
  }

  public atualizarContato(novoContato: string) {
    this.props.contato = novoContato
  }

  public atualizarPrazoEntrega(novoPrazo: number) {
    this.props.prazoEntrega = novoPrazo
  }
}

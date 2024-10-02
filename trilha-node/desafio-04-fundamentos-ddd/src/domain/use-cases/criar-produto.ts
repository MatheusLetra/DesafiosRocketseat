import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Produto } from '../entities/produto'
import { ProdutosRepository } from '../repositories/produto-repository'

interface CriarProdutoUseCaseRequest {
  nome: string
  quantidade: number
  preco: number
  limiteMinimo: number
  tamanho?: string
  cor?: string
}

export class CriarProdutoUseCase {
  constructor(private produtosRepository: ProdutosRepository) {}

  async execute({
    nome,
    quantidade,
    preco,
    limiteMinimo,
    tamanho,
    cor,
  }: CriarProdutoUseCaseRequest) {
    const produto = Produto.create({
      nome,
      quantidade,
      preco,
      limiteMinimo,
      tamanho,
      cor,
    })

    await this.produtosRepository.create(produto)

    return produto
  }
}

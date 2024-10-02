import { ProdutosRepository } from '../repositories/produto-repository'

interface AtualizarProdutoUseCaseRequest {
  produtoId: string
  nome?: string
  quantidade?: number
  preco?: number
  limiteMinimo?: number
  tamanho?: string
  cor?: string
}

export class AtualizarProdutoUseCase {
  constructor(private produtosRepository: ProdutosRepository) {}

  async execute({
    produtoId,
    nome,
    quantidade,
    preco,
    limiteMinimo,
    tamanho,
    cor,
  }: AtualizarProdutoUseCaseRequest) {
    const produto = await this.produtosRepository.findById(produtoId)

    if (!produto) {
      throw new Error('Produto não encontrado')
    }

    // Usar métodos de atualização apropriados, ou acessar diretamente se permitido
    if (nome) produto.atualizarNome(nome)
    if (quantidade) produto.atualizarQuantidade(quantidade)
    if (preco) produto.atualizarPreco(preco)
    if (limiteMinimo) produto.atualizarLimiteMinimo(limiteMinimo)
    if (tamanho) produto.atualizarTamanho(tamanho)
    if (cor) produto.atualizarCor(cor)

    await this.produtosRepository.update(produto)

    return produto
  }
}

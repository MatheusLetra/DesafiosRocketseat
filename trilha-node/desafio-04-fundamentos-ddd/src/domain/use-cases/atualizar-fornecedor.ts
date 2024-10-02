import { FornecedoresRepository } from '../repositories/fornecedor-repository'

interface AtualizarFornecedorUseCaseRequest {
  fornecedorId: string
  nome?: string
  contato?: string
  prazoEntrega?: number
}

export class AtualizarFornecedorUseCase {
  constructor(private fornecedoresRepository: FornecedoresRepository) {}

  async execute({
    fornecedorId,
    nome,
    contato,
    prazoEntrega,
  }: AtualizarFornecedorUseCaseRequest) {
    const fornecedor = await this.fornecedoresRepository.findById(fornecedorId)

    if (!fornecedor) {
      throw new Error('Fornecedor não encontrado')
    }

    // Usar os métodos de atualização apropriados
    if (nome) fornecedor.atualizarNome(nome)
    if (contato) fornecedor.atualizarContato(contato)
    if (prazoEntrega) fornecedor.atualizarPrazoEntrega(prazoEntrega)

    await this.fornecedoresRepository.update(fornecedor)

    return fornecedor
  }
}

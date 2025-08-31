// src/components/Produto/index.tsx
import * as S from './styles'
import { Produto as ProdutoType } from '../../types'

// Adicionar interface para as props
interface Props {
  produto: ProdutoType
  estaNosFavoritos: boolean
  favoritar: (produto: ProdutoType) => void
  aoComprar: (produto: ProdutoType) => void
}

// Corrigir nome da função para paraReal
const paraReal = (valor: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}

const ProdutoComponent = ({
  produto,
  estaNosFavoritos,
  favoritar,
  aoComprar
}: Props) => {
  const handleFavoritar = (produto: ProdutoType) => {
    favoritar(produto)
  }

  const handleAdicionarAoCarrinho = (produto: ProdutoType) => {
    aoComprar(produto)
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => handleFavoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => handleAdicionarAoCarrinho(produto)}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent

import * as S from './styles'
import { useAppSelector } from '../../store/hooks'
import {
  selectCarrinho,
  selectCarrinhoTotal,
  selectFavoritos
} from '../../store/selectors'
import cesta from '../../assets/cesta.png' // Adicione esta importação

// Adicionar função paraReal
const paraReal = (valor: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}

const Header = () => {
  const itensNoCarrinho = useAppSelector(selectCarrinho)
  const favoritos = useAppSelector(selectFavoritos)
  const valorTotal = useAppSelector(selectCarrinhoTotal)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta de compras" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header

import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useAppSelector } from './store/hooks'
import { useGetProdutosQuery } from './store/api/produtosApi'
import { adicionarAoCarrinho } from './store/slices/carrinhoSlice'
import { toggleFavorito } from './store/slices/favoritosSlice'
import { Produto } from './types'
import { useAppDispatch } from './store/hooks'

function AppContent() {
  const dispatch = useAppDispatch()
  const { data: produtos = [], isLoading, error } = useGetProdutosQuery()
  const favoritos = useAppSelector((state) => state.favoritos.itens)

  const handleAdicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = (produto: Produto) => {
    dispatch(toggleFavorito(produto))
  }

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>Erro ao carregar produtos</div>
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          adicionarAoCarrinho={handleAdicionarAoCarrinho}
          favoritar={handleFavoritar}
        />
      </div>
    </>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App

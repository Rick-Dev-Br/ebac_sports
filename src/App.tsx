// src/App.tsx
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { fetchProdutos } from './store/slices/produtosSlice'
import {
  selectProdutos,
  selectProdutosLoading,
  selectFavoritos,
  selectCarrinho
} from './store/selectors'
import { adicionarAoCarrinho } from './store/slices/carrinhoSlice'
import { toggleFavorito } from './store/slices/favoritosSlice'
import { Produto } from './types'

function AppContent() {
  const dispatch = useAppDispatch()
  const produtos = useAppSelector(selectProdutos)
  const loading = useAppSelector(selectProdutosLoading)
  const favoritos = useAppSelector(selectFavoritos)
  const carrinho = useAppSelector(selectCarrinho)

  useEffect(() => {
    dispatch(fetchProdutos())
  }, [dispatch])

  const handleAdicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = (produto: Produto) => {
    dispatch(toggleFavorito(produto))
  }

  if (loading) {
    return <div>Carregando...</div>
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

import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './index'

export const selectProdutos = (state: RootState) => state.produtos.items
export const selectProdutosLoading = (state: RootState) =>
  state.produtos.loading
export const selectProdutosError = (state: RootState) => state.produtos.error

export const selectCarrinho = (state: RootState) => state.carrinho.itens
export const selectCarrinhoTotal = createSelector(selectCarrinho, (items) =>
  items.reduce((total, item) => total + item.preco, 0)
)

export const selectFavoritos = (state: RootState) => state.favoritos.itens
export const selectProdutoEstaNosFavoritos = (produtoId: number) =>
  createSelector(selectFavoritos, (favoritos) =>
    favoritos.some((p) => p.id === produtoId)
  )

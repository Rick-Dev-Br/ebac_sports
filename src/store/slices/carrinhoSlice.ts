// src/store/slices/carrinhoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (!state.itens.find((p) => p.id === produto.id)) {
        state.itens.push(produto)
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    limparCarrinho: (state) => {
      state.itens = []
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, limparCarrinho } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer

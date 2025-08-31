// src/store/slices/favoritosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarAosFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (!state.itens.find((p) => p.id === produto.id)) {
        state.itens.push(produto)
      }
    },
    removerDosFavoritos: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const index = state.itens.findIndex((p) => p.id === produto.id)

      if (index >= 0) {
        state.itens.splice(index, 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarAosFavoritos, removerDosFavoritos, toggleFavorito } =
  favoritosSlice.actions
export default favoritosSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './slices/carrinhoSlice'
import favoritosSlice from './slices/favoritosSlice' // Corrigir nome
import produtosSlice from './slices/produtosSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    favoritos: favoritosSlice,
    produtos: produtosSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

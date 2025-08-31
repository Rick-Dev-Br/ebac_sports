import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './slices/carrinhoSlice'
import favoritosSlice from './slices/favoritosSlice'
import { produtosApi } from './api/produtosApi'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    favoritos: favoritosSlice,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

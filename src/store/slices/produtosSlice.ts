// src/store/slices/produtosSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Produto } from '../../types'

export const fetchProdutos = createAsyncThunk(
  'produtos/fetchProdutos',
  async () => {
    const response = await fetch(
      'https://ebac-fake-api.vercel.app/api/ebac_sports'
    )
    return response.json()
  }
)

type ProdutosState = {
  items: Produto[]
  loading: boolean
  error: string | null
}

const initialState: ProdutosState = {
  items: [],
  loading: false,
  error: null
}

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchProdutos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Erro ao carregar produtos'
      })
  }
})

export default produtosSlice.reducer

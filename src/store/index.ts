import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favorito'

import api from '../services/api'

export type RootReducer = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    adicionar: carrinhoReducer,
    [api.reducerPath]: api.reducer,
    favoritar: favoritoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

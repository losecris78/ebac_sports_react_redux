import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}
const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const fav = action.payload
      if (state.itens.find((Produto) => Produto.id === fav.id)) {
        console.log('Ya está en favoritos')
      } else {
        state.itens.push(fav)
      }
    }
  }
})
export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer

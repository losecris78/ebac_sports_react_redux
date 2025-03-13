import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
//import { Produto } from '../../App'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const items = useSelector((state: RootReducer) => state.carrinho.items)
  const favorite = useSelector((state: RootReducer) => state.favorito.items)
  const valorTotal = items.reduce((acc: number, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favorite.length} favoritos</span>
        <img src={cesta} />
        <span>
          {items.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header

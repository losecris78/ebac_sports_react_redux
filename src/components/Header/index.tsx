import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
//import { Produto } from '../../App'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const favorite = useSelector((state: RootReducer) => state.favorito.items)
  const valorTotal = itens.reduce((acc: number, item) => {
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
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header

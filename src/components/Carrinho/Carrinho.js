import React from 'react'
import { ShoppingCartItem } from './ItensCarrinho'
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`

export class ShoppingCart extends React.Component {
  getTotalValue = () => {
    let totalValue = 0

    for(let produto of this.props.produtosNoCarrinho) {
      totalValue += produto.valor * produto.quantidade
    }

    return totalValue
  }

  render() {
    return <ShoppingCartContainer>
      <h3>Carrinho:</h3>
      <CartListContainer>
        {this.props.produtosNoCarrinho.map((produto) => {
          return <ShoppingCartItem 
                    cartItem={produto} 
                    onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                  />
        })}
      </CartListContainer>
      <p>Valor total: R${this.getTotalValue()},00</p>
    </ShoppingCartContainer>
  }
}

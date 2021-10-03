import React from 'react'
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
  }
`
const Botao = styled.button`
   background: linear-gradient(90deg, rgba(58,59,180,1) 0%, rgba(29,193,253,1) 45%, rgba(69,252,224,1) 100%);;
   border: none;
   color: #ffff;
   font-size: 14px;
   font-weight: 600;
   border-radius: 5px;
   width: 120px;
   height: 30px;
   padding: 10px 10px;
   display: grid;
   align-items:center;
   grid-template-rows: auto 1fr 2px;
   grid-row-gap: 15px;
`

export class ShoppingCartItem extends React.Component {
  render() {
    return <ItemContainer>
      <p>{this.props.cartItem.quantidade}x</p>
      <p>{this.props.cartItem.nome}</p>
      <Botao 
        onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
      >
        Remover
      </Botao>
    </ItemContainer>
  }
}
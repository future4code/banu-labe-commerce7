import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
   padding: 40px 10px;
   padding-bottom: 20px;
   display:grid;
   grid-template-columns: repeat( auto-fit, minmax(350px, 1fr));
   grid-gap: 20px 20px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`

const AddToCartButton = styled.button`
   background: linear-gradient(90deg, rgba(58,59,180,1) 0%, rgba(29,193,253,1) 45%, rgba(69,252,224,1) 100%);;
   border: none;
   color: #ffff;
   font-size: 18px;
   font-weight: 500;
   border-radius: 5px;
   width: 180px;
   height: 60px;
   padding: 10px 10px;
   display: grid;
   align-items:center;
   grid-template-rows: auto 1fr 2px;
   grid-row-gap: 15px;
`
const Imagem = styled.img`
    position: relative;
    width: 100%;
    border-radius: 15px 15px 0 0;

`
const Sombra = styled.div`
   display: grid;
   position: relative;
   grid-template-rows: auto 1fr;
   border-radius: 15px;
   box-shadow: 0 0 15px rgba(0,0,0,0.1);
   margin: 0 20px;
`
const Preco = styled.h5`
    text-align: right;
`
const Texto = styled.p`
   color: #6f6f6f;
   font-size: 15px;
   line-height: 28px;
   font-weight: 400;
   align-self: stretch;
`
export class ProductCard extends React.Component {
  render() {
    const produto = this.props.produto
    return <CardContainer>
            <Sombra>
                <Imagem src={produto.img}/>
                <CardInfo>
                    <p>{produto.nome}</p>
                    <Texto>{produto.descricao}</Texto>
                    <Preco>R${produto.valor},00</Preco>
                    <AddToCartButton onClick={() => this.props.onAddProductToCart(produto.id)}>
                    Adicionar ao carrinho
                    </AddToCartButton>
                </CardInfo>
            </Sombra>
        </CardContainer>
  }
}
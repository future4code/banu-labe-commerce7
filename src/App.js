import React, {Component} from 'react';
import './App.css';
import { Card } from "./components/Card";
import lego from '../src/img/lego.png';
import styled from 'styled-components';
import listaProdutos from '../src/produtos.json'

// largura dos produtos
const Produtos = styled.div `
  padding: 60px 10px;
  padding-bottom: 20px;
  display:grid;
  grid-template-columns: repeat( auto-fit, minmax(350px, 1fr));
  grid-gap: 20px 20px;
`
// sombra dos cards
const Itens = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  margin: 0 20px;
`
// largura do botão
const Detalhes = styled.div`
  padding: 20px 10px;
  display: grid;
  grid-template-rows: auto 1fr 50px;
  grid-row-gap: 15px;
`
const Imagem = styled.img`
  position: relative;
  width: 100%;
  border-radius: 15px 15px 0 0;
`
const Preco = styled.h5`
  text-align: right;
` 
const Botao = styled.button`
  background: linear-gradient(90deg, rgba(58,59,180,1) 0%, rgba(29,193,253,1) 45%, rgba(69,252,224,1) 100%);;
  border: none;
  color: #ffff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  width: 180px;
`
const Texto = styled.p`
  color: #6f6f6f;
  font-size: 15px;
  line-height: 28px;
  font-weight: 400;
  align-self: stretch;
`

export default class App extends Component{

  state = {
     produtos: listaProdutos,
     query: ""
  }

  updateQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <Produtos>
        <div>
          <input 
            placeholder="Pesquisa"
            value={this.state.query}
            onChange={this.updateQuery}
          />
        </div>
        <div>
          {this.state.produtos
          .filter(produto =>{
            return produto.title.includes(this.state.query)
          })
          .map(produto=>{
            return <Card key={produto.id} produto={produto}/>
          })}

        </div>
        <Itens>
          <Imagem src={lego}/>
          <Detalhes>
              <div>
                  <h5>Lego do Espaço</h5>
                  <Preco> R$ 199,00 </Preco>
              </div>
              <Texto>Brinquedo para o seu future astronauta</Texto>
              <Botao><a>Adicionar ao carrinho</a></Botao>
          </Detalhes>
        </Itens>
        <Itens>
          <Imagem src={lego}/>
          <Detalhes>
              <div>
                  <h5>Camiseta</h5>
                  <Preco> R$ 199,00 </Preco>
              </div>
              <Texto>Brinquedo para o seu future astronauta</Texto>
              <Botao><a>Adicionar ao carrinho</a></Botao>
          </Detalhes>
        </Itens>
        <Itens>
          <Imagem src={lego}/>
          <Detalhes>
              <div>
                  <h5>Camiseta</h5>
                  <Preco> R$ 199,00 </Preco>
              </div>
              <Texto>Brinquedo para o seu future astronauta</Texto>
              <Botao><a>Adicionar ao carrinho</a></Botao>
          </Detalhes>
        </Itens>
        <Itens>
          <Imagem src={lego}/>
          <Detalhes>
              <div>
                  <h5>Camiseta</h5>
                  <Preco> R$ 199,00 </Preco>
              </div>
              <Texto>Brinquedo para o seu future astronauta</Texto>
              <Botao><a>Adicionar ao carrinho</a></Botao>
          </Detalhes>
        </Itens>
      </Produtos>
    );
  }
}

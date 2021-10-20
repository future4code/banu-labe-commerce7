import React from 'react';
import { Filters } from './components/Filtros/Filtros';
import { Produtos } from './components/Produtos/ListaProdutos';
import { ShoppingCart } from './components/Carrinho/Carrinho';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const produtos = [
  {
    id: 1,
    nome: "Funko Pop Star Wars - BB-8",
    descricao:"BB-8 é um droide em formato de jabulani que serve à Resistência, seu proprietário é o Poe Dameron que usa ele pra fazer embaixadinha e jogar uma pelada com os amigos.",
    valor: 229,
    img: "https://a-static.mlcdn.com.br/1500x1500/bb-8-314-rise-of-skywalker-funko-pop-star-wars/bonaticompanyloja/9726443122/bca2d6de93e03b1a7c14ed04013049e9.jpg"
  },
  {
    id: 2,
    nome: "Camiseta Naza",
    descricao:"A vilã das vilãs, a diva das divas, raposa felpuda, gostosa pra caramba, meme internacional e agora nada mais nada menos que garota propaganda da Agencia Espacial Norte Americana. A novela Senhora do Destino levou a vilanice a outro nível, nunca antes torcemos tanto para a personagem má.",
    valor: 39,
    img: "https://cdn.shopify.com/s/files/1/0495/8368/5792/products/camiseta-nazare-naza-feminina_1.jpg?v=1609369435"
  },
  {
    id: 3,
    nome: "Meteorito",
    descricao:"Meteorito é um meteoro que caiu na Terra há 5 anos atras, e o Sr. Kira (ou Buda) decidiu utilizar esse meteorito para dominar a Terra, afinal ele aumentava o poder de um ser humano 100 vezes mais, e assim poderia dominar a Terra utilizando o futebol.",
    valor: 99999,
    img: "https://ogimg.infoglobo.com.br/in/23934277-c8c-d63/FT1086A/meteorito.jpg"
  },
  {
    id: 4,
    nome: "Alienígena Semi-novo",
    descricao:"Alienígena usado recentemente para gravar o filme Guerra do Amanhã, disponível para venda",
    valor: 9,
    img: "https://exame.com/wp-content/uploads/2017/08/cosmin4000.jpg"
  },
  {
    id: 5,
    nome: "Millennium Falcon",
    descricao:"Han Solo começou como entregador de pizzas na Millennium Falcon, um de seus colegas de trabalho era o Chewbacca, depois de varias entregas Han Solo se cansou dessa vida e foi trabalhar de Contrabandista para a lesma o chefe do contrabando Jabba.",
    valor: 9999999,
    img: "https://s2.glbimg.com/coHwdDkMeRVO9T2A_v1EIWLuHTE=/e.glbimg.com/og/ed/f/original/2019/08/27/31618033034_1dcde167ed_k.jpg"
  },
  {
    id: 6,
    nome: "Casa Em Marte",
    descricao:"Uma casa confortável, com vista para uma das luas, para você e toda sua família poder curtir um final de semana em Marte",
    valor: 350000,
    img: "https://casacor.abril.com.br/wp-content/uploads/sites/7/2018/03/reproduc3a7c3a3o-calearth-09.jpg?quality=80&strip=info"
  },
  {
    id: 7,
    nome: "Lego do Espaço",
    descricao:"Prepare-se para o lançamento do Foguete de Espaço Intersideral da plataforma de lançamento inspirada na NASA com cientistas e astronautas",
    valor: 199,
    img: "https://www.pontofrio-imagens.com.br/html/conteudo-produto/977/50001972/imagens/lego_1.png"
  },
  {
    id: 8,
    nome: "Jogo de Tabuleiro no Espaço",
    descricao:"O jogo de tabuleiro que vai fazer você voar pelo espaço",
    valor: 199,
    img: "https://image.freepik.com/vetores-gratis/jogo-de-tabuleiro-astronautas-no-modelo-de-desenho-animado-de-estrategia-do-boardgame-espaco_33099-186.jpg"
  },
  {
    id: 9,
    nome: "Visita a Área 51",
    descricao:"Um ticket de visita à Ultrassecreta Área 51 patrocinado pelo governo americano. A Área 51 está localizada no deserto de Nevada.",
    valor:  9999,
    img: "data:image/jpeg;base64,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"
  },
  {
    id: 10,
    nome: "Roupa Espacial",
    descricao:"Ir para o espaço pode não ser possível, mas ter uma roupa espacial sim... Então não perca a chance de ter a sua",
    valor: 3000,
    img: "https://conteudo.imguol.com.br/c/especiais/tilt/2020/AMP/astronautas/foto-04.png"
  }
]

class App extends React.Component {
  state = {
    valorMin: 0,
    valorMax: 0,
    filtroNome: '',
    produtosNoCarrinho: []
  }

  onChangeValorMin = (event) => {
    this.setState({valorMin: event.target.value})
  }

  onChangeValorMax = (event) => {
    this.setState({valorMax: event.target.value})
  }

  onChangeFiltroNome = (event) => {
    this.setState({filtroNome: event.target.value})
  }

  onAddProductToCart = (produtoId) => {
    const produtosNoCarrinho = this.state.produtosNoCarrinho.find(produto => produtoId === produto.id)

    if(produtosNoCarrinho) {
      const novoProdutosNoCarrinho = this.state.produtosNoCarrinho.map(produto => {
        if(produtoId === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })

      this.setState({produtosNoCarrinho: novoProdutosNoCarrinho})
    } else {
      const productToAdd = produtos.find(produto => produtoId === produto.id)

      const novoProdutosNoCarrinho = [...this.state.produtosNoCarrinho, {...productToAdd, quantidade: 1}]

      this.setState({produtosNoCarrinho: novoProdutosNoCarrinho})
    }
  }

  onRemoveProductFromCart = (produtoId) => {
    const novoProdutosNoCarrinho = this.state.produtosNoCarrinho.map((produto) => {
      if(produto.id === produtoId) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)

    this.setState({produtosNoCarrinho: novoProdutosNoCarrinho})
  }

  render() {
    return (
      <AppContainer>
        <Filters
          valorMin={this.state.valorMin}
          valorMax={this.state.valorMax}
          filtroNome={this.state.filtroNome}
          onChangeValorMin={this.onChangeValorMin}            
          onChangeValorMax={this.onChangeValorMax}            
          onChangeFiltroNome={this.onChangeFiltroNome}                  
        />
        <Produtos 
          produtos={produtos}
          valorMin={this.state.valorMin}
          valorMax={this.state.valorMax}
          filtroNome={this.state.filtroNome}
          onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          produtosNoCarrinho={this.state.produtosNoCarrinho}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
      </AppContainer>
    );
  }
}

export default App;
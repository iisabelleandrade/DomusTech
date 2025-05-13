import React, { useState } from "react";
import "./styles.css";

const produtos = [
  { id: 1, nome: "Iluminação Inteligente", preco: 199.99 },
  { id: 2, nome: "Fechadura Inteligente", preco: 299.99 },
  { id: 3, nome: "Câmera de Segurança", preco: 399.99 },
];

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [modoEscuro, setModoEscuro] = useState(false);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    setCarrinho(novoCarrinho);
  };

  return (
    <div className={modoEscuro ? "dark-mode" : "light-mode"}>
      <header>
        <h1>DomusTech</h1>
        <button onClick={() => setModoEscuro(!modoEscuro)}>
          {modoEscuro ? "Modo Claro" : "Modo Escuro"}
        </button>
      </header>

      <main>
        <h2>Produtos</h2>
        <div className="produtos">
          {produtos.map((produto) => (
            <div key={produto.id} className="produto">
              <h3>{produto.nome}</h3>
              <p>R$ {produto.preco.toFixed(2)}</p>
              <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
            </div>
          ))}
        </div>

        <h2>Carrinho</h2>
        <ul>
          {carrinho.map((item, index) => (
            <li key={index}>
              {item.nome} - R$ {item.preco.toFixed(2)}
              <button onClick={() => removerDoCarrinho(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

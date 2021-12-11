import { Button } from "@mui/material";
import React from "react";


const somar = (primeiroValor, segundoValor) => {
  const somaTotal = Number(primeiroValor) + Number(segundoValor);
  return somaTotal;
};

class Teste extends React.Component {
  state = {
    primeiroValor: "",
    segundoValor: "",
    soma: "",
  };

  render() {
    return (
      <>
        <div>
          Hello
          <label> Nome: </label>
          Primeiro valor{" "}
          <input
            type="number"
            value={this.state.primeiroValor}
            onChange={(e) => this.setState({ primeiroValor: e.target.value })}
          />
          Segundo Valor{" "}
          <input
            type="number"
            value={this.state.nome}
            onChange={(e) => this.setState({ segundoValor: e.target.value })}
          />
          Primeiro Valor: {this.state.primeiroValor}
          Primeira Valor: {this.state.segundoValor}
          <Button 
            onClick={() =>
              this.setState({
                soma: somar(this.state.primeiroValor, this.state.segundoValor),
              })
            }
          >
            clique aqui
          </Button>
          A soma dos valores é: {this.state.soma}
        </div>
      </>
    );
  }
}

export default Teste;

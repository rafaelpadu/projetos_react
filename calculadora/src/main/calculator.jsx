import React, { Component } from "react";
import "./calculator.css";
import Button from "./components/button";
import Display from "./components/display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
  polo: false
};

export default class Calculator extends Component {
  state = { ...initialState };

  constructor(props) {
    //Construtor que binda as funções para o escopo this de cada local que elas estão sendo chamadas
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
    this.invertPolo = this.invertPolo.bind(this);
  }
  clearMemory() {
    // recebe a constante incial para zerar todos os valores
    this.setState({ ...initialState });
  }
  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === "=";
      const currentOperation = this.state.operation;
      const values = [...this.state.values];
      try {
        switch (currentOperation) {
          case "+":
            values[0] = values[0] + values[1];
            break;
          case "-":
            values[0] = values[0] - values[1];
            break;
          case "x":
            values[0] = values[0] * values[1];
            break;
          case "÷":
            values[0] = values[0] / values[1];
            break;
        }
      } catch {
        values[0] = this.state.values[0];
      }
      values[1] = 0;
      console.log(values)
      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }
  invertPolo(){
    const i = this.state.current;
    const values = [...this.state.values];
    const polo = this.state.polo;
    let displayValue = this.state.displayValue;
    if(displayValue === '0'){
      return
    }
    values[i] *= -1;
    displayValue = values[i]
    this.setState({
      values,
      polo: polo ? false :true,
      displayValue
    })
  }
  addDigit(n) {
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }
    const clearDisplay = //se o 0 estiver no display, apertar 0 novamente não vai fazer nada pois a constante clearDisplay vai ser verdadeira
      this.state.displayValue === "0" || this.state.clearDisplay
    const currentValue = clearDisplay ? "" : this.state.displayValue; // se a constante clear for verdadeira não ira fazer nada, caso contrário o valor atual recebe o valor do display value
    const displayValue = currentValue + n; // o display value recebe a concatenação do currentValue com o n que foi digitado no momento
    this.setState({ displayValue, clearDisplay: false }); //o displayValue vai mudar com o apertar das teclas

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values]; // os valores desse escopo irão receber os values do initialState
      values[i] = newValue; //o valor que está sendo acessado no momento irá receber o valor do display
      this.setState({ values }); //os values serão alterados conforme os botões da calculadora vão sendo clicados
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} double />
        <Button label='+/-' click={this.invertPolo}/>
        <Button label="÷" click={this.setOperation} operation />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="x" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}

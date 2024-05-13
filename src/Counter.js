import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 1,
  };
  // 일반 메소드로 작성하면 this가 무엇인지 알 수 없다.
  // => constructor(props){
  // super(props);
  // this.handleIncrease = this.handleIncrease.bind(this);
  // this.handleIncrease = this.handleDecrease.bind(this);
  //   }
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}
export default Counter;

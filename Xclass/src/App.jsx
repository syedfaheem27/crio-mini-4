import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <>
        <header>
          <h1>Counter App</h1>
        </header>
        <div className="label">Count: {this.state.count}</div>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
        <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
      </>
    );
  }
}

export default App;

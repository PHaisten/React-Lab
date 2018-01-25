import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "What should I do for dinner tonight?",
      hasLoaded: false
    };
  }

  handleInputChange(value) {
    this.setState({ output: value });
  }

  handleToggle(event) {
    const currentState = this.state.hasLoaded;
    this.setState({ hasLoaded: !currentState });
  }

  componentDidMount(event) {
    this.setState({ hasLoaded: true });
  }

  render() {
    if (this.state.hasLoaded === false) {
      return (
        <div className="container">
          <h1>...Loading</h1>
          <button
            type="button"
            className="btn btn-primary ml-1"
            onClick={event => this.handleToggle(event.target.value)}
          >
            Load
          </button>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>
            {this.state.text} {this.props.pizza}
          </h1>
          <input
            type="text"
            className="input-field w-25"
            placeholder={this.state.text}
            onChange={event => this.handleInputChange(event.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary ml-1"
            onClick={event => this.handleToggle(event.target.value)}
          >
            Click
          </button>
        </div>
      );
    }
  }
}

export default App;

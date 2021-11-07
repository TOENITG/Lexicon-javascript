import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: "",
  };

  componentDidMount() {
    // Geolocation
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <h1>Hello World!</h1>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <h1>Hello World!</h1>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return (
      <div>
        <h3>Loading....</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

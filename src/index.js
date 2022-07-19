import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
const element = document.getElementById('root');

const root = ReactDOM.createRoot(element);

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude.toFixed(2) }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept the location request!" />;
  }

  render() {
    return (
      <div
        className="black border"
        style={{ border: '5px solid black', borderRadius: '5px' }}
      >
        {this.renderContent()}
      </div>
    );
  }
}

root.render(<App />);

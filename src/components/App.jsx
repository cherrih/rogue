import React from 'react';
import Home from './Home.jsx';
import Index from './Index.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isIndex: false
    }
    this.toggleIndex = this.toggleIndex.bind(this);
  }
  toggleIndex(e) {
    e.preventDefault();
    this.setState({
      isIndex: !this.state.isIndex,
      isHome: !this.state.isHome
    })
  }

  render() {
    return (
      <>
        <Home isHome={this.state.isHome} toggleIndex={this.toggleIndex}/>
        <Index isIndex={this.state.isIndex} toggleIndex={this.toggleIndex}/>
      </>
    )
  }
}

export default App;

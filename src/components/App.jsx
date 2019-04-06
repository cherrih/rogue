import React from 'react';
import Home from './Home.jsx';
import Index from './Index.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHome: false,
      isIndex: true
    }
    this.toggleIndex = this.toggleIndex.bind(this);
  }
  toggleIndex(e) {
    e.preventDefault();
    console.log('index');
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

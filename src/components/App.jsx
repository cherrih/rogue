import React from 'react';
import Home from './Home.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.props = {
      isHome: true,
      isIndex: false
    }
  }
  render() {
    return (
      <>
        <Home />
      </>
    )
  }
}

export default App;

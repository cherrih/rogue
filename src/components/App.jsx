import React from 'react';
import Trash from './Trash.jsx';
import Home from './Home.jsx';
import Index from './Index.jsx';
import SpamBox from './SpamBox.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isIndex: false,
      isSpam: false,
      topics: ['About', 'Editor\'s Note', 'Contributors', 'Rogue Life', 'Big Issues, Low Pressue', 'Small Issues, High Pressue', 'Perspectives' ]
    }
    this.toggleIndex = this.toggleIndex.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
  }
  componentDidMount() {
    this.showAbout();
  }
  toggleIndex(e) {
    e.preventDefault();
    this.setState({
      isIndex: !this.state.isIndex,
      isHome: !this.state.isHome
    })
  }

  showAbout() {
    setTimeout(() => {
      this.setState({
        isSpam: true
      })
  }, 6000);
  }
  toggleAbout() {
    this.setState({
      isSpam: !this.state.isSpam
    })
  }

  render() {
    return (
      <div className="app-container">
        <Trash />
        <SpamBox isSpam={this.state.isSpam} toggleAbout={this.toggleAbout}/>
        <Home isHome={this.state.isHome} toggleIndex={this.toggleIndex} topics={this.state.topics}/>
        <Index isIndex={this.state.isIndex} toggleIndex={this.toggleIndex} topics={this.state.topics}/>
      </div>
    )
  }
}

export default App;

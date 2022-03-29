import React from "react";
import Main from "./components/main";
import Nav from "./components/nav"
class App extends React.Component {
  state = {
    weekCount: null
  }
  handleWeekChanges = (weekCount) => {
    this.setState({
      weekCount
    })
  }

  render() {
    return (
      <>
        <Nav weekCount={this.state.weekCount} />
        <Main handleWeekChanges={this.handleWeekChanges} />
      </>
    );
  }
}

export default App;

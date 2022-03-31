import React from "react";
import Main from "./components/main";
class App extends React.Component {
  render() {
    return (
      <>

        <Main handleWeekChanges={this.handleWeekChanges} />
      </>
    );
  }
}

export default App;

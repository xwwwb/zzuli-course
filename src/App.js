import React from "react";
import Main from "./components/main";
import Setting from './components/setting'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/setting" element={<Setting />} />

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

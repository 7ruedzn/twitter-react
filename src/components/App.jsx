import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import MainArea from "./MainArea";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const App = () => {
  return (
    <div id="App">
      <Header />
      <LeftSide />
      <MainArea />
      <RightSide />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

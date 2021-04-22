import React from "react";
// import ReactDOM from "react-dom";

import Header from "./Header";
import MainArea from "./MainSide/MainArea";
import RightSide from "./RightSide/RightSide";
import LeftSide from "./LeftSide/LeftSide";
// import MainItem from "./MainSide/MainItem";

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

export default App;

import "./App.css";

import { useEffect, useState } from "react";

import InteractiveTree from "./components/InteractiveTree";
import MiniTree from "./components/MiniTree";
import ReactNode from "./components/ReactNode";
import { Provider } from "./contexts/ReactDims";
import { treeData } from "./data-test.js";

function App() {
  const [data, setData] = useState([]);
  const generateData = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.round(Math.random() * 10));
    }
    setData(arr);
  };
  useEffect(() => generateData(), []);

  return (
    <div className="myLayout">
      <div className="coolThing">
        <Provider>
          <h1>Dynamic SVG loader</h1>
          <button onClick={generateData}>update data</button>
          <ReactNode data={data} />
          <h1>Calculate in D3, Render in React</h1>
          <MiniTree data={treeData} />
          <h1>Interactive tree</h1>
          <InteractiveTree/>
        </Provider>
      </div>
    </div>
  );
}

export default App;

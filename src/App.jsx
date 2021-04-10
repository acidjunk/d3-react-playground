import "@elastic/eui/dist/eui_theme_light.css";

import "./App.css";

import { EuiButton } from "@elastic/eui";
import { useEffect, useState } from "react";

import InteractiveTree from "./components/InteractiveTree";
import MiniTree from "./components/MiniTree";
import ReactNode from "./components/ReactNode";
import { RoleTree } from "./components/RoleTree";
import { TreeDimensions } from "./components/TreeDimensions";
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
        {/*<h1>Role Tree POC</h1>*/}
        {/*<TreeDimensions>*/}
        <RoleTree />
        {/*</TreeDimensions>*/}
        <h1>Dynamic SVG loader</h1>
        <Provider>
          <EuiButton onClick={generateData}>update data</EuiButton>
          <ReactNode data={data} />
        </Provider>
        <h1>Calculate in D3, Render in React</h1>
        <MiniTree data={treeData} />
        <h1>Interactive tree</h1>
        <InteractiveTree />
      </div>
    </div>
  );
}

export default App;

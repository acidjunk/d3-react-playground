import "./App.css";
import * as data from './data/data.json';
import { useEffect, useState } from "react";

import ReactNode from "./components/ReactNode";
import { Provider } from "./contexts/ReactDims";

function App() {
  console.log(data)
  const [dataCircles, setDataCircles] = useState([]);
  const generateData = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.round(Math.random() * 10));
    }
    setDataCircles(arr);
  };
  useEffect(() => generateData(), []);

  return (
    <div className="myLayout">
      <div className="coolThing">
        <button onClick={generateData}>update data</button>

        <Provider>
          <ReactNode data={dataCircles} />
        </Provider>
      </div>
    </div>
  );
}

export default App;

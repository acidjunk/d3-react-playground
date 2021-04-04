import "./App.css";

import ReactNode from "./components/ReactNode";
import { Provider } from "./contexts/ReactDims";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState([]);
    const generateData = ()=>{
        let arr = [];
        for(let i =0; i < 10; i++){
            arr.push(Math.round(Math.random()*10));
        };
        setData(arr);
    };
    useEffect(()=>generateData(),[])

    return (
    <div className="myLayout">
      <div className="coolThing">
          <button onClick={generateData}>update data</button>

        <Provider>
          <ReactNode data={data} />
        </Provider>
      </div>
    </div>
  );
}

export default App;

import "./App.css";

import ReactNode from "./components/ReactNode";
import { Provider } from "./contexts/ReactDims";

function App() {
  return (
    <div className="myLayout">
      <div className="coolThing">
        <Provider>
          <ReactNode />
        </Provider>
      </div>
    </div>
  );
}

export default App;

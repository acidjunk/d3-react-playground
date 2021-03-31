import React from "react";

import { withContext } from "../contexts/ReactDims";
import {useRef} from "react";

const styles = {
  height: "100%",
  backgroundColor: "red",
};
const ReactNode = ({ dims }) => {
  const domNode = useRef(null);

  return (<div style={styles} ref={domNode}>
    {dims.width} x {dims.height}
  </div>);
};
export default withContext(ReactNode);

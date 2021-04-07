import React from "react";
import { useEffect, useRef, useState } from "react";

import { withContext } from "../contexts/ReactDims";
import ChartInterface from "../d3Land/ChartInterface";

const styles = {
  display: "grid",
  height: "100%",
  // backgroundColor: "#000",
};

const ReactNode = ({ dims, data }) => {
  const domNode = useRef(null);
  const [canvas, createCanvas] = useState(null);
  const [vizInitialized, setVizInitialized] = useState(false);

  useEffect(() => {
    createCanvas(() => new ChartInterface(domNode.current));
  }, []);

  useEffect(() => {
    vizInitialized && canvas.updateDims(dims);
  }, [dims]);

  useEffect(() => {
    vizInitialized && canvas.updateData(data);
  }, [data]);

  useEffect(() => {
    if (data.length && dims.width && vizInitialized === false) {
      // Array stuff for old example
      // if (data.length && dims.width && vizInitialized === false) {
      canvas.init(data, dims);
      setVizInitialized(() => true);
    }
  }, [data, dims]);

  return <div ref={domNode} style={styles} />;
  // return (<div style={styles} ref={domNode}>
  //   {dims.width} x {dims.height}
  // </div>);
};
export default withContext(ReactNode);

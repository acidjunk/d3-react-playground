import { select } from "d3-selection";

import Circles from "./Circles";
import { Axes, Dimensions, Scales } from "./utils";

// import { tree } from "d3-tree";

class ChartInterface {
  constructor(domNodeCurrent) {
    this.svg = select(domNodeCurrent).append("svg");
    this.svg.attr("width", "100%").attr("height", "100%");
  }
  init = (data, dims) => {
    this.data = data;
    console.log(data);
    this.dims = new Dimensions(dims);
    this.chart = this.svg.append("g");

    // Style lines (todo: use correct scale
    this.chart
      .attr("stroke", "#f02")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5);

    // Position chart
    this.chart.attr(
      "transform",
      `translate(${this.dims.margin.left}, ${this.dims.margin.top})`
    );
    this.scales = new Scales(this.data, this.dims);
    this.axes = new Axes(this.chart, this.scales, this.dims);
    this.circles = new Circles(this.chart, this.data, this.scales);

    // this.updateData(data);//<--- commented out; now redundant!!
  };
  updateData = (data) => {
    this.circles.updateData(data);
  };
  updateDims = (dims) => {
    this.dims.setDims(dims);
    this.scales.setScales(this.data, this.dims);
    this.axes.updateAxes(this.scales, this.dims);
    this.circles.updateScales(this.scales);
  };
}
export default ChartInterface;

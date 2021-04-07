import Tree from "alphasights-react-d3-tree";
import React from "react";

const myTreeData = [
  {
    name: "Top Level",
    attributes: {
      keyA: "val A",
      keyB: "val B",
      keyC: "val C",
    },
    children: [
      {
        name: "Level 2: A",
        attributes: {
          keyA: "val A",
          keyB: "val B",
          keyC: "val C",
        },
      },
      {
        name: "Level 2: B",
      },
    ],
  },
];

class InteractiveTree extends React.Component {
  render() {
    return (
      // <Tree /> will fill width/height of its container; in this case `#treeWrapper`
      <div id="treeWrapper" style={{ width: "100%", height: "100%" }}>
        <Tree data={myTreeData} />
      </div>
    );
  }
}

export default InteractiveTree;

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
        children: [
          {
            name: "Level 3: A",
          },
          {
            name: "Level 3: B",
          },
          {
            name: "Level 3: C",
          },
          {
            name: "Level 3: D",
          },
        ],
      },
      {
        name: "Level 2: C",
      },
      {
        name: "Level 2: D",
      },
      {
        name: "Level 2: E",
      },
      {
        name: "Level 2: F",
      },
      {
        name: "Level 2: G",
      },
      {
        name: "Level 2: H",
      },
      {
        name: "Level 2: I",
      },
      {
        name: "Level 2: J",
        children: [
          {
            name: "Level 3: E",
          },
          {
            name: "Level 3: F",
          },
          {
            name: "Level 3: G",
          },
          {
            name: "Level 3: H",
          },
        ],
      },
      {
        name: "Level 2: K",
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

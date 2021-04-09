import "./RoleTree.css";

import React, {useState} from "react";
import Tree from "react-d3-tree";

import { dataRoleTree } from "../dataRoleTree";

export const RoleTree = () => {

    const [nodeX, setNodeX] = useState(500);
    const [nodeY, setNodeY] = useState(100);

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: "1920px", height: "1080px" }}>
      <Tree
        data={dataRoleTree}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        nodeSize={{x:nodeX,y:nodeY}}
        initialDepth={2}
      />
    </div>
  );
};

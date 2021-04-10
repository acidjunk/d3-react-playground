import "./RoleTree.css";

import { EuiButton, EuiCallOut,EuiFieldText,EuiSwitch, EuiPanel, EuiFieldSearch, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import React, { useState } from "react";
import Tree from "react-d3-tree";

import { dataRoleTree } from "../dataRoleTree";

export const RoleTree = () => {
  const [nodeX, setNodeX] = useState(500);
  const [nodeY, setNodeY] = useState(100);
  const [orientation, setOrientation] = useState("horizontal");
  const [searchPhrase, setSearchPhrase] = useState("");

  let filteredData = dataRoleTree
  // if (searchPhrase!=="" && filteredData) {
  //   filteredData = Object.entries(filteredData).filter(item => item.name && item.name.startsWith(searchPhrase) )
  // }
  // console.log(Object.keys(filteredData))

    return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.

    <div id="treeWrapper" style={{ width: "1920px", height: "1180px" }}>

      <EuiFlexGroup>
        <EuiFlexItem>
            <EuiFieldSearch
                placeholder="Search this"
                value={searchPhrase}
                isClearable={true}
                onChange={(e) => setSearchPhrase(e.target.value)}
                />
        </EuiFlexItem>
          <EuiFlexItem>
          <EuiFieldText
              prepend="width"
              value={nodeX}
              isClearable={true}
              onChange={(e) => setNodeX(e.target.value)}
          />
          </EuiFlexItem>
          <EuiFlexItem>
          <EuiFieldText
              prepend="height"
              value={nodeY}
              isClearable={true}
              onChange={(e) => setNodeY(e.target.value)}
          />
        </EuiFlexItem>
          <EuiFlexItem>

            <EuiSwitch
                label={orientation}
                checked={orientation === "vertical"}
                onChange={() => setOrientation(orientation === "vertical" ? "horizontal" : "vertical")}
            />
          </EuiFlexItem>
      </EuiFlexGroup>



      <Tree
        data={filteredData}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        nodeSize={{ x: nodeX, y: nodeY }}
        initialDepth={2}
        orientation={orientation}
      />
    </div>
  );
};

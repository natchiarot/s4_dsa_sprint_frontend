import React from "react";

const LastTree = ({ lastTree }) => {
  const lastBST = lastTree[lastTree.length - 1];

  const renderLastTree = (node, isRoot = false) => {
    if (!node) return null;

    return (
      <div style={{ marginLeft: "20px" }}>
        <p>
          {isRoot ? "Root:" : "Value:"} {node.value}
        </p>
        <div>
          <h4>Left:</h4>
          {renderLastTree(node.left)}
        </div>
        <div>
          <h4>Right:</h4>
          {renderLastTree(node.right)}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h3>Number ID: {lastBST.numberId}</h3>
      {renderLastTree(lastBST.root, true)}
    </div>
  );
};

export default LastTree;

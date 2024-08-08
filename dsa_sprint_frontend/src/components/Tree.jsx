import React from "react";

const Tree = ({ tree }) => {
  const renderTree = (node, isRoot = false) => {
    if (!node) return null;

    return (
      <div style={{ marginLeft: "20px" }}>
        <p>
          {isRoot ? "Root:" : "Value:"} {node.value}
        </p>
        <div>
          <h4>Left:</h4>
          {renderTree(node.left)}
        </div>
        <div>
          <h4>Right:</h4>
          {renderTree(node.right)}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h3>Number ID: {tree.numberId}</h3>
      {renderTree(tree.root, true)}
    </div>
  );
};

export default Tree;

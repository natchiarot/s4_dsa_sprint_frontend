import React from "react";
import Tree from "./Tree";

const Trees = ({ trees }) => {
  return (
    <div>
      {trees.map((tree) => (
        <Tree key={tree.numberId} node={tree.root} isRoot={true} tree={tree} />
      ))}
    </div>
  );
};

export default Trees;

import { useLocation } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header>
      <h1 style={{ padding: "20px" }}>
        <FontAwesomeIcon icon={faTree} /> Binary Search Tree
      </h1>
      {location.pathname === "/" && (
        <Button text={showAdd ? "Close" : "Add BST"} onClick={onAdd} />
      )}
    </header>
  );
};

export default Header;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

const AddTrees = ({ onAdd }) => {
  const [text, setText] = useState({ root: "", numberInput: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (isNaN(text.root) || text.root.trim() === "") {
      setErrorMessage("Root must be a valid number.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    if (!text.root || !text.numberInput) {
      alert("Please add a tree");
      return;
    }

    onAdd({ root: text.root, numberInput: text.numberInput });

    setText({ root: "", numberInput: "" });

    setSuccessMessage("Tree added successfully!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  };

  return (
    <div>
      <form className="add-comment" onSubmit={onSubmit}>
        <label>Tree</label>
        <input
          type="text"
          name="root"
          placeholder="Add root here"
          value={text.root}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="numberInput"
          placeholder="Add numbers here"
          value={text.numberInput}
          onChange={handleChange}
        ></input>
        <input type="submit" value="Upload Tree"></input>
      </form>
      {errorMessage && (
        <p style={{ color: "red" }}>
          <FontAwesomeIcon icon={faXmarkCircle} /> {errorMessage}
        </p>
      )}
      {successMessage && (
        <p style={{ color: "green" }}>
          <FontAwesomeIcon icon={faCheckCircle} /> {successMessage}
        </p>
      )}
    </div>
  );
};

export default AddTrees;

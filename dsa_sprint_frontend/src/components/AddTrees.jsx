import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

const AddTrees = ({ onAdd }) => {
  const [text, setText] = useState({ numberInput: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text.numberInput) {
      alert("Please add a tree");
      return;
    }

    onAdd({ numberInput: text.numberInput });

    setText({ numberInput: "" });

    setSuccessMessage("Tree added successfully!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const regex = /^[0-9\s]*$/;

    if (regex.test(value)) {
      setText((prevText) => ({
        ...prevText,
        [name]: value,
      }));
    } else {
      setErrorMessage("Only numbers and spaces are allowed.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="numberInput"
          placeholder="Add root then numbers here"
          value={text.numberInput}
          onChange={handleChange}
          style={{ width: "210px" }}
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

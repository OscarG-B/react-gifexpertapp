import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((item) => [inputValue, ...item]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <h1>{inputValue}</h1> */}
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.prototype = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;

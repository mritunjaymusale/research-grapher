import React, { useState } from "react";
import { store } from "../StateManagement/store";
import * as M from "materialize-css";

export const UserInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputValue !== "") {
        // Check if the input is arXiv id or not
        var arxivIdRegex = new RegExp("^[0-9]{4}.[0-9]{4,5}$");
        var doi_regex = new RegExp("10.\\d{4,9}/[-._;()/:a-z0-9A-Z]+");

        if (arxivIdRegex.test(inputValue)) {
          closeModal();

          store.dispatch({
            type: "UPDATE_ARXIV_ID",
            newId: inputValue,
          });
        } else if (doi_regex.test(inputValue)) {
          closeModal();

          store.dispatch({
            type: "UPDATE_DOI",
            doi: inputValue,
          });
        } else
          store.dispatch({
            type: "SEND_TOAST",
            toast: "Given Id is not a valid arXivId or doi",
          });
      }
    }
  };

  function closeModal() {
    M.Modal.getInstance(document.getElementById("searchbuttonmodal")).close();
  }

  return (
    <div>
      <span>Enter the arXiv Id of the paper you are looking for</span>
      <input
        placeholder="Enter arXiv Id "
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        autoFocus={true}
        id="text-input"
      />
    </div>
  );
};

import React, { useState } from "react";
import { store } from "../StateManagement/store";
import * as M from "materialize-css";

export const UserInput = () => {
  function closeModal() {
    M.Modal.getInstance(document.getElementById("searchbuttonmodal")).close();
  }
  const onSubmit = (event) => {
    event.preventDefault();
    var text_input = document.getElementById("text-input").value;
    var paperType = document.querySelector('input[name="paperType"]:checked')
      .value;
    closeModal();

    if (paperType === "") {
      store.dispatch({
        type: "UPDATE_PAPER_ID",
        id: text_input,
      });
    }
    // TODO: add more papertype (ACM,etc.)
    else
      store.dispatch({
        type: "UPDATE_PAPER_ID",
        id: paperType + ":" + text_input,
      });
  };

  return (
    <div>
      <span>Enter the arXiv Id of the paper you are looking for</span>

      <form onSubmit={onSubmit}>
        <input
          placeholder="Enter paper Id "
          autoFocus={true}
          id="text-input"
          name="paper-id-text"
        />
        <p>
          <label>
            <input name="paperType" type="radio" value="arxiv" />
            <span>Arxiv</span>
          </label>
        </p>
        <p>
          <label>
            <input name="paperType" type="radio" value="" />
            <span>DOI</span>
          </label>
        </p>
        <p>
          <label>
            <input name="paperType" type="radio" value="" />
            <span>SemanticScholar Paper Id</span>
          </label>
        </p>
      </form>
    </div>
  );
};

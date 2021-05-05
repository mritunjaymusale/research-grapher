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

    if (paperType === "doi" && paperType === "semanticscholar") {
      store.dispatch({
        type: "UPDATE_PAPER_ID",
        id: text_input,
      });
    }
    // TODO: add more papertype (ACM,etc.)
    else if (paperType === "arxiv")
      store.dispatch({
        type: "UPDATE_PAPER_ID",
        id: paperType + ":" + text_input,
      });
  };

  return (
    <div>
      <span>Enter the arXiv Id of the paper you are looking for</span>

      <form name="paper-info" onSubmit={onSubmit}>
        <input
          placeholder="Enter paper Id "
          autoFocus={true}
          id="text-input"
          name="paper-id-text"
        />
        <p>
          <label>
            <input name="paperType" type="radio" value="arxiv" checked />
            <span>Arxiv</span>
          </label>
        </p>
        <p>
          <label>
            <input name="paperType" type="radio" value="doi" />
            <span>DOI</span>
          </label>
        </p>
        <p>
          <label>
            <input name="paperType" type="radio" value="semanticscholar" />
            <span>SemanticScholar Paper Id</span>
          </label>
        </p>
        <input type="submit" value="Submit" className="btn black white-text" />
      </form>
    </div>
  );
};

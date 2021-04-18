import React, { Component } from "react";
import { store } from "../store";

export const ArxivIdContext = React.createContext();

export class ArxivIdProvider extends Component {
  state = {
    id: "",
    isLoading: true,
  };
  updateArxivId = (newId) => {
    this.setState({ isLoading: true });
    store.dispatch({
      type: "UPDATE_ARXIV_ID",
      newId: newId,
    });
    fetchPaperDetailsFromAPI(newId).then((result) => {
      this.setState({
        id: newId,
        paperDetails: result,
        isLoading: false,
      });
    });
  };
  render() {
    const { id, paperDetails, isLoading } = this.state;

    const { updateArxivId } = this;
    return (
      <ArxivIdContext.Provider
        value={{
          id,
          updateArxivId,
          paperDetails,
          isLoading,
        }}>
        {this.props.children}
      </ArxivIdContext.Provider>
    );
  }
}

export function fetchPaperDetailsFromAPI(arXivID) {
  return fetch(
    "https://api.semanticscholar.org/v1/paper/arXiv:" + arXivID
  ).then(
    (res) => res.json(),
    // fetch error
    (error) => {}
  );
}

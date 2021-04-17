import { DirectedGraph } from "graphology";
import React, { Component } from "react";
import { JSONGraphProcessor } from "./GraphProcessor";

export const ArxivIdContext = React.createContext();

export class ArxivIdProvider extends Component {
  state = {
    id: "",
    isLoading: true,
  };
  updateArxivId = (newId) => {
    this.setState({ isLoading: true });
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

export const GraphContext = React.createContext();

export class GraphDataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: new DirectedGraph(),
      updateGraph: (json) => {
        this.setState({
          graph: JSONGraphProcessor.convertJSONToGraph(json, this.state.graph),
        });
      },
    };
  }
  render() {
    return (
      <GraphContext.Provider value={this.state}>
        {this.props.children}
      </GraphContext.Provider>
    );
  }
}

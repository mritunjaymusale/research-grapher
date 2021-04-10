import React, { Component } from "react";

export const ArxivIdContext = React.createContext();

export class ArxivIdProvider extends Component {
  state = {
    id: '',
  };
  updateArxivId = (newId) => {
    this.setState({ id: newId });
  };
  render() {
    const id  = this.state.id;
    const { updateArxivId } = this;
    return (
      <ArxivIdContext.Provider
        value={{
          id,
          updateArxivId,
        }}>
        {this.props.children}
      </ArxivIdContext.Provider>
    );
  }
}

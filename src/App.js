import React, { Component } from "react";
import { MyGraph } from "./MyGraph";
export default class App extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <MyGraph />
      </div>
    );
  }
}

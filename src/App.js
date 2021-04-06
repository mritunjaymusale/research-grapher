import React, { Component } from "react";
import CustomNodeChart from "./CustomNodeChart";
import "materialize-css/dist/css/materialize.css";
import "material-icons/iconfont/material-icons.css";
import * as M from "materialize-css";
export default class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <CustomNodeChart />
      </div>
    );
  }
}

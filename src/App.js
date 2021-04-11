import React, { Component } from "react";
import CustomChart from "./CustomChart";
import "materialize-css/dist/css/materialize.css";
import "material-icons/iconfont/material-icons.css";
import * as M from "materialize-css";
import { ArxivIdProvider } from "./Components/Context";

export default class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <ArxivIdProvider>
        <CustomChart />
      </ArxivIdProvider>
    );
  }
}

import React, { Component } from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import MyNode from "./my-node";

export default class CustomNodeChart extends Component {
  constructor(props) {
      super(props);
      this.state = {
          apiDataForDebug:false,
      }
  }
  componentDidMount() {
    // TODO: make this URL more Dynamic
    fetch(
      "https://api.semanticscholar.org/v1/paper/arXiv:2103.03230?include_unknown_references=true"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          let json = JSON.parse(
            JSON.stringify(result)
              .split('"title":')
              .join('"name":')
              .split('"references":')
              .join('"children":')
          );
          this.setState({
            apiDataForDebug: json,
          });
        },
        // fetch error
        (error) => {}
      )
    //   .then(() => this.forceUpdate());
  }
  render() {
    if (this.state.apiDataForDebug) {
        const ds = this.state.apiDataForDebug;
        return (
            <OrganizationChart
              datasource={ds}
              chartClass="myChart"
                NodeTemplate={MyNode}
                pan={true} zoom={true}
            />
          );
    }
    return <div></div>
  }
}

const ds = {
  id: "n1",
  name: "Lao Lao",
  title: "general manager",
  children: [
    { id: "n2", name: "Bo Miao", title: "department manager" },
    {
      id: "n3",
      name: "Su Miao",
      title: "department manager",
      children: [
        { id: "n4", name: "Tie Hua", title: "senior engineer" },
        {
          id: "n5",
          name: "Hei Hei",
          title: "senior engineer",
          children: [
            { id: "n6", name: "Dan Dan", title: "engineer" },
            { id: "n7", name: "Xiang Xiang", title: "engineer" },
          ],
        },
        { id: "n8", name: "Pang Pang", title: "senior engineer" },
      ],
    },
    { id: "n9", name: "Hong Miao", title: "department manager" },
    {
      id: "n10",
      name: "Chun Miao",
      title: "department manager",
      children: [{ id: "n11", name: "Yue Yue", title: "senior engineer" }],
    },
  ],
};

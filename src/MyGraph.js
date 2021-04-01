import React, { Component } from "react";
import Tree from "react-d3-tree";

export class MyGraph extends Component {
 
  componentDidMount() {
    // TODO: make this URL more Dynamic
    fetch(
      "https://api.semanticscholar.org/v1/paper/arXiv:2103.03230?include_unknown_references=true"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            apiDataForDebug: result,
          });
          let json = JSON.parse(
            JSON.stringify(result)
              .split('"title":')
              .join('"name":')
              .split('"references":')
              .join('"children":')
          );

          this.result = json;
        },
        // fetch error
        (error) => {}
      )
      .then(() => this.forceUpdate());
  }

  render() {
    //   TODO: Refactor this to make it more dynamic and clean
    if (this.result) {
      return (
        <div>
          <Tree
            data={this.result}
            orientation="horizontal"
            pathFunc="diagonal"
            seperation={{ siblings: 1 }}
          />
        </div>
      );
    }
    return <div></div>;
  }
}

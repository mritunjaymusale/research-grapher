import React, { Component } from "react";
import { Icon } from "react-materialize";

export class PaperNode extends Component {
  state = {
    color: "",
  };
  componentDidMount() {
    if (this.props.node.attributes.arxivId) {
      this.setState({
        color: "green",
      });
    } else if (this.props.node.attributes.doi || this.props.node.attributes.url) {
      this.setState({
        color: "yellow",
      });
    } else {
      this.setState({
        color: "red",
      });
    }
  }
  render() {
    return (
      <Icon tiny className={this.state.color}>
        {this.props.node.attributes.isReference ? "security" : "star"}
      </Icon>
    );
  }
}

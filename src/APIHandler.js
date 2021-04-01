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
        this.graph.setNode(result.title);
        result.references.map((ref) => {
          this.graph.setEdge(result.title, ref.title);
        });
      },
      // fetch error
      (error) => {}
    )
    .then(() => this.forceUpdate());
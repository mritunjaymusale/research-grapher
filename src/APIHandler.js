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

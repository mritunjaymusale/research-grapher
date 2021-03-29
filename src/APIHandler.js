// Temp file will be deleted later 
// TODO: make this URL more Dynamic
fetch(
    "https://api.semanticscholar.org/v1/paper/arXiv:1705.10311?include_unknown_references=true"
  )
    .then((res) => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          data: result,
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
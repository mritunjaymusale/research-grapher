import { store } from "../StateManagement/store";

export function fetchPaperDetailsFromAPI(arXivID) {
  return fetch(
    "https://api.semanticscholar.org/v1/paper/arXiv:" + arXivID
  ).then(
    (res) => res.json(),
    // fetch error
    (error) => {
      store.dispatch({
        type: "SEND_TOAST",
        toast: "Failed to connect to the API",
      });
    }
  );
}

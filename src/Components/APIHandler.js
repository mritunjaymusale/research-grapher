import { store } from "../StateManagement/store";

export function fetchPaperDetailsFromAPI(paperId) {
  return fetch(
    "https://api.semanticscholar.org/v1/paper/" + paperId
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

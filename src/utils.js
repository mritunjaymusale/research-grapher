import * as M from "materialize-css";

export const resetModals = () => {
  // somehow initializing modal resets it POGG
  var elems = document.querySelectorAll(".modal");
  M.Modal.init(elems);
};

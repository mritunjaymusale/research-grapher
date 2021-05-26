import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as M from "materialize-css";

function render(
  ui,
  {
    initialState,
    store = createStore(() => {}, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
test("should ", () => {});

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

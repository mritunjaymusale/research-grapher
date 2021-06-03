// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
jest.setTimeout(10000);

// ! cannot test the webgl graphing lib had to mock it
jest.mock("react-force-graph", () => ({
  ForceGraph3D: ({ children }) => <>{children}</>,
}));
jest.spyOn(console, 'error').mockImplementation(() => {});
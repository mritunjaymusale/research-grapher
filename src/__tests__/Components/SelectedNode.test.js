import SelectedNode from "../../Components/SelectedNode";
import { changeSelectedNode } from "../../store/GraphSlice";
import store from "../../store/store";
import { render, screen, waitFor } from "../test-utils";

describe("SelectedNode", () => {
  beforeEach(() => {
    render(<SelectedNode />, { store: store });
  });
  it("should render simple prompts when no node is selected", async () => {
    await waitFor(() => {
      screen.getAllByText("Currently no node is selected...");
    });
  });

  it("should render selected node", async () => {
    const demoNode = {
      arxivId: null,
      authors: [
        {
          authorId: "3236386",
          name: "Varun Gulshan",
        },
        {
          authorId: "1756036",
          name: "C. Rother",
        },
        {
          authorId: "1716777",
          name: "A. Criminisi",
        },
        {
          authorId: "145162067",
          name: "A. Blake",
        },
        {
          authorId: "1688869",
          name: "Andrew Zisserman",
        },
      ],
      doi: "10.1109/CVPR.2010.5540073",
      intent: ["background", "methodology"],
      isInfluential: true,
      paperId: "e8c89f251b1b9fb277ccd4b32e88f5df0eb1769a",
      title: "Geodesic star convexity for interactive image segmentation",
      url: "https://www.semanticscholar.org/paper/e8c89f251b1b9fb277ccd4b32e88f5df0eb1769a",
      venue:
        "2010 IEEE Computer Society Conference on Computer Vision and Pattern Recognition",
      year: 2010,
      isReference: true,
    };
    store.dispatch(
      changeSelectedNode({
        node: demoNode,
      })
    );
    await waitFor(() => {
      screen.findByDisplayValue(demoNode.authors[0].name);
      screen.getByText(demoNode.paperId);
      screen.getByText("Load Paper");
    });
  });
});

import CitationGraph from "../../Components/CitationGraph";
import store from "../../store/store";
import { render, screen, waitFor } from "../test-utils";



describe("CitationGraph", () => {
  beforeEach(() => {
    render(<CitationGraph />, { store: store });
  });
  it("should render nothing on empty graph", async () => {
    await waitFor(async () => {
      await screen.findAllByText("Citation Graph");
      await screen.findAllByText("- References");
      await screen.findAllByText("- Citations");
    });
    
  });
});


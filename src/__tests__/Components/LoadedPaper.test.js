import LoadPaper from "../../Components/LoadedPaper";
import { render, screen, waitFor } from "../test-utils";
import store from "../../store/store";
import { updatePaper } from "../../store/LoadedPaperSlice";
import { SampleData } from "../store/SampleData";

describe("LoadPaper", () => {
  beforeEach(() => {
    render(<LoadPaper />, { store: store });
    store.dispatch(
      updatePaper({ paper: SampleData.arxiv, success: true, isLoading: false })
    );
  });
  it("should render nothing on null", async () => {
    // normal with no dispatch to show null state
    render(<LoadPaper />, { store: store });
    await waitFor(() => screen.getAllByText("Loaded Paper"));
  });

  it("should render paper details", async () => {
    await waitFor(() => {
      screen.getAllByText("Loaded Paper");
      screen.getAllByText(`Title : ${SampleData.arxiv.title}`);
      screen.getAllByText(
        `Authors : ${SampleData.arxiv.authors.map((author) => author.name)}`
      );
      screen.getAllByText(`Year : ${SampleData.arxiv.year}`);
      screen.getAllByText(`Abstract : ${SampleData.arxiv.abstract}`);
      screen.getAllByText(`Venue : ${SampleData.arxiv.venue}`);
      expect(
        screen.getByText(SampleData.arxiv.arxivId).closest("a")
      ).toHaveAttribute(
        "href",
        `https://arxiv.org/pdf/${SampleData.arxiv.arxivId}.pdf`
      );
      expect(
        screen.getByText(SampleData.arxiv.doi).closest("a")
      ).toHaveAttribute("href", `https://doi.org/${SampleData.arxiv.doi}`);
      expect(
        screen.getByText(SampleData.arxiv.paperId).closest("a")
      ).toHaveAttribute("href", SampleData.arxiv.url);
    });
  });
});

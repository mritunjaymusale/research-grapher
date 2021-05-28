import LoadPaper from "../../Components/LoadedPaper";
import { render, screen, waitFor } from "../test-utils";
import store from "../../store/store";
import { updatePaper } from "../../store/LoadedPaperSlice";
import { Papers } from "../SampleData";

describe("LoadPaper", () => {
  beforeEach(() => {
    render(<LoadPaper />, { store: store });
    store.dispatch(
      updatePaper({ paper: Papers.arxiv, success: true, isLoading: false })
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
      screen.getAllByText(`Title : ${Papers.arxiv.title}`);
      screen.getAllByText(
        `Authors : ${Papers.arxiv.authors.map((author) => author.name)}`
      );
      screen.getAllByText(`Year : ${Papers.arxiv.year}`);
      screen.getAllByText(`Abstract : ${Papers.arxiv.abstract}`);
      screen.getAllByText(`Venue : ${Papers.arxiv.venue}`);
      expect(
        screen.getByText(Papers.arxiv.arxivId).closest("a")
      ).toHaveAttribute(
        "href",
        `https://arxiv.org/pdf/${Papers.arxiv.arxivId}.pdf`
      );
      expect(
        screen.getByText(Papers.arxiv.doi).closest("a")
      ).toHaveAttribute("href", `https://doi.org/${Papers.arxiv.doi}`);
      expect(
        screen.getByText(Papers.arxiv.paperId).closest("a")
      ).toHaveAttribute("href", Papers.arxiv.url);
    });
  });
});

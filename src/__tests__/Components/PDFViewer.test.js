import PDFViewer from "../../Components/PDFViewer";
import { render, waitFor, screen } from "../test-utils";
import store from "../../store/store";
import { Papers } from "../SampleData";
import { updatePaper } from "../../store/LoadedPaperSlice";

describe("PDFViewer", () => {
  beforeEach(() => {
    render(<PDFViewer />, { store: store });
  });

  it("should render on null input", () => {
    render(<PDFViewer />, { store: store });
    screen.getAllByText("Preview");

    screen.getAllByText("Unable to load the paper");
    // when no paper is loaded no need to show the preview
    expect(document.querySelector("iframe")).not.toBeInTheDocument();
  });
});

describe("PDFViewer", () => {
  beforeEach(() => {
    render(<PDFViewer />, { store: store });
  });

  it("should render arxiv paper", () => {
    store.dispatch(
      updatePaper({ paper: Papers.arxiv, success: true, isLoading: false })
    );
    screen.getAllByText("Preview");
    screen.getByText(Papers.arxiv.arxivId);
    expect(screen.getByText(Papers.arxiv.arxivId).href).toBe(
      `https://arxiv.org/pdf/${Papers.arxiv.arxivId}.pdf`
    );

    expect(
      document.querySelector("iframe").contentWindow.location.href
    ).toEqual(`https://arxiv.org/pdf/${Papers.arxiv.arxivId}.pdf`);
  });

  it("should render doi paper", () => {
    store.dispatch(
      updatePaper({ paper: Papers.doi, success: true, isLoading: false })
    );
    screen.getAllByText("Preview");
    screen.getByText(Papers.doi.doi);
    expect(screen.getByText(Papers.doi.doi).href).toBe(
      `https://doi.org/${Papers.doi.doi}`
    );
    expect(document.querySelector("iframe")).not.toBeInTheDocument();
  });

  it("should render SemanticScholar paper", () => {
    const { arxivId, doi, ...paper } = Papers.SemanticScholar;
    store.dispatch(
      updatePaper({ paper: paper, success: true, isLoading: false })
    );
    screen.getAllByText("Preview");
    screen.getByText(Papers.SemanticScholar.paperId);
    expect(screen.getByText(Papers.SemanticScholar.paperId).href).toBe(
      Papers.SemanticScholar.url
    );
    expect(document.querySelector("iframe")).not.toBeInTheDocument();
  });
});

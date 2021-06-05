import PaperDetails from "../../Components/PaperDetails";
import { render, screen, waitFor } from "../test-utils";
import { Papers } from "../SampleData";


describe("PaperDetails", () => {
  beforeEach(() => {});
  it("should render paper details", () => {
    render(<PaperDetails paper={Papers.arxiv} />);
    screen.findByDisplayValue(Papers.arxiv.title);
    screen.findByDisplayValue(Papers.arxiv.authors);
    screen.findByDisplayValue(Papers.arxiv.year);
    screen.findByDisplayValue(Papers.arxiv.abstract);
    screen.findByDisplayValue(Papers.arxiv.venue);
  });
});

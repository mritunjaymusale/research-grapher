import PaperDetails from "../../Components/PaperDetails";
import { render, screen, waitFor } from "../test-utils";
import { Papers } from "../SampleData";
describe("PaperDetails", () => {
  beforeEach(() => {});
  it("should render paper details", () => {
    render(<PaperDetails paper={Papers.arxiv} />);
    screen.findByText(Papers.arxiv.title);
    screen.findByText(Papers.arxiv.authors);
    screen.findByText(Papers.arxiv.year);
    screen.findByText(Papers.arxiv.abstract);
    screen.findByText(Papers.arxiv.venue);
  });
});

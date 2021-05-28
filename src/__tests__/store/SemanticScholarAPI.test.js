import { getPaperFromApi } from "../../store/SemanticScholarAPI";
import { Papers } from "../SampleData";

describe("SemanticSholarAPI", () => {
  it("should fetch arxiv paper details from API", async () => {
    await getPaperFromApi(Papers.arxiv.arxivId, "ArXiv").then((paper) =>
      expect(paper.abstract).toStrictEqual(Papers.arxiv.abstract)
    );
  });
  it("should fetch doi paper details from API", async () => {
    await getPaperFromApi(Papers.doi.doi).then((paper) =>
      expect(paper.abstract).toStrictEqual(Papers.doi.abstract)
    );
  });
  it("should throw error for incorrect IDs", async () => {
    await getPaperFromApi("asdf10.1002/asna.202113881").then((data) =>
      expect(data.error).toStrictEqual("Paper not found")
    );
  });
});

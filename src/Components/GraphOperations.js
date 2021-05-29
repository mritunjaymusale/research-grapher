import { DirectedGraph } from "graphology";

export const mergePaperWithGraph = (paper, graph) => {
  const { citations, references, ...stripped_paper } = paper;
  graph.mergeNode(stripped_paper.title, stripped_paper);

  mergeCitationsWithGraph(citations, stripped_paper, graph);
  mergeReferencesWithGraph(references, stripped_paper, graph);
  return graph;
};

const mergeCitationsWithGraph = (citations, paper, graph) => {
  citations.forEach((citation) => {
    graph.mergeNode(citation.title, { ...citation, isCitation: true });
    graph.mergeDirectedEdge(citation.title, paper.title, {
      type: "cites",
    });
  });
};

const mergeReferencesWithGraph = (references, paper, graph) => {
  references.forEach((reference) => {
    graph.mergeNode(reference.title, { ...reference, isReference: true });
    graph.mergeDirectedEdge(paper.title, reference.title, {
      type: "refers",
    });
  });
};

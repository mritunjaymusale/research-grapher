import { DirectedGraph } from "graphology";
import { BoxGeometry, ConeGeometry, SphereGeometry } from "three";

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

export const convertToD3Graph = (graph) => {
  return JSON.parse(
    JSON.stringify(graph.toJSON())
      .split('"edges":')
      .join('"links":')
      .split('"key":')
      .join('"id":')
  );
};

export const attachLabelsToEdges = (graph) => {
  graph.links = graph.links.map((link) => {
    return {
      source: link.source,
      target: link.target,
      label: link.attributes.type,
    };
  });
  return graph;
};

export const beautifyNodes = (node) => {
  colorizeNodes(node);
  generateNodeGeometry(node);
  return node;
};
function generateNodeGeometry(node) {
  if (node.attributes.isReference) {
    node.geometry = new SphereGeometry(10, 10, 10);
  } else if (node.attributes.isCitation) {
    node.geometry = new ConeGeometry(10, 20, 10);
  } else {
    node.geometry = new BoxGeometry(10, 10, 10);
  }
}

function colorizeNodes(node) {
  if (node.attributes.arxivId) {
    // pink and indigo (bladerunner 2049)
    node.node_color = "#d500f9";
    node.text_color = "#3d5afe";
  } else if (node.attributes.doi || node.attributes.url) {
    // TODO:look for alternative color combo
    node.node_color = "#13EC40";
    node.text_color = "#FEE13D";
  } else {
    node.color = "red";
  }
}

import { BoxGeometry, ConeGeometry, SphereGeometry } from "three";
import { store } from "../../store";

export class JSONGraphProcessor {
  static addCitationsWithEdgesToGraph(citations, graph, data) {
    citations.forEach((citation) => {
      graph.mergeNode(citation.title, { ...citation, isCitation: true });
      graph.mergeDirectedEdge(citation.title, data.title, {
        type: "cites",
      });
    });
  }

  static addReferencesWithEdgesToGraph(references, graph, data) {
    references.forEach((reference) => {
      graph.mergeNode(reference.title, { ...reference, isReference: true });
      graph.mergeDirectedEdge(data.title, reference.title, {
        type: "refers",
      });
    });
  }

  static updateStoreGraph(data, citations, references) {
    var graph = store.getState().graphReducer.graph;

    // Add the base paper to the graph
    graph.mergeNode(data.title, data);
    // Add the references paper to the graph
    this.addReferencesWithEdgesToGraph(references, graph, data);
    this.addCitationsWithEdgesToGraph(citations, graph, data);

    store.dispatch({ type: "GRAPH_UPDATE_STARTED" });
    //updated graph
    store.dispatch({
      type: "UPDATE_GRAPH",
      graph: graph,
    });

    store.dispatch({ type: "GRAPH_UPDATE_FINISHED" });
  }
}

export class D3GraphProcessor {
  static convertToD3Graph(graph) {
    graph = this.convertGraphologyToD3Graph(graph);
    graph = this.convertToD3StyleLabeledLinks(graph);

    graph.nodes.map((node) => this.decorateNodes(node));

    return graph;
  }
  static decorateNodes(node) {
    // coloring for links
    D3GraphProcessor.colorCodeNodes(node);
    //   shapes based on reference or citation
    D3GraphProcessor.reshapeBasedOnCitations(node);
    return node;
  }
  static reshapeBasedOnCitations(node) {
    if (node.attributes.isReference) {
      node.geometry = new SphereGeometry(10, 10, 10);
    } else if (node.attributes.isCitation) {
      node.geometry = new ConeGeometry(10, 20, 10);
    } else {
      node.geometry = new BoxGeometry(10, 10, 10);
    }
  }

  static colorCodeNodes(node) {
    if (node.attributes.arxivId) {
      node.color = "green";
    } else if (node.attributes.doi || node.attributes.url) {
      node.color = "yellow";
    } else {
      node.color = "red";
    }
  }

  static convertGraphologyToD3Graph(graph) {
    return JSON.parse(
      JSON.stringify(graph.toJSON())
        .split('"edges":')
        .join('"links":')
        .split('"key":')
        .join('"id":')
    );
  }
  static convertToD3StyleLabeledLinks(graph) {
    graph.links = graph.links.map((link) => {
      return {
        source: link.source,
        target: link.target,
        label: link.attributes.type,
      };
    });
    return graph;
  }
}

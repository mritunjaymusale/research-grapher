export class JSONGraphProcessor {
  static addCitationsWithEdgesToGraph(citations, graph, data) {
    citations.forEach((citation) => {
      graph.mergeNode(citation.title, { ...citation, isCitation: true });
      graph.mergeDirectedEdge(citation.title, data.title, {
        type: "cites",
      });
    });

    return graph;
  }

  static addReferencesWithEdgesToGraph(references, graph, data) {
    references.forEach((reference) => {
      graph.mergeNode(reference.title, { ...reference, isReference: true });
      graph.mergeDirectedEdge(data.title, reference.title, {
        type: "refers",
      });
    });
    return graph;
  }
  static convertJSONToGraph(json, graph) {
    const { citations, references, ...data } = json;

    // Add the base paper to the graph
    graph.mergeNode(data.title, data);
    // Add the references paper to the graph
    graph = this.addReferencesWithEdgesToGraph(references, graph, data);
    graph = this.addCitationsWithEdgesToGraph(citations, graph, data);

    // Here on out it converts graph into D3 compatible graph
    return graph;
  }
}

export class D3GraphProcessor {
  static convertToD3Graph(graph) {
    graph = this.convertGraphologyToD3Graph(graph);
    graph = this.convertToD3StyleLabeledLinks(graph);

    // TODO: refactor this
    graph.nodes.map((node) => {
      // coloring for links
      D3GraphProcessor.colorCodeNodes(node);

      //   shapes based on reference or citation
      if (node.attributes.isReference) {
        node.symbolType = "circle";
      } else if (node.attributes.isCitation) {
        node.symbolType = "triangle";
      } else {
        node.symbolType = "diamond";
      }
      return node;
    });

    return graph;
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

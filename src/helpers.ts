import {
  IMockEdge,
  IMockNode,
  ICytoscapeNode,
  ICytoscapeEdge,
  IReactFlowNode,
  IReactFlowEdge,
  NodeType,
  ID3GraphEdge,
  ID3GraphNode,
  ID3GraphData,
  INivoNetworkNode,
  INivoNetworkEdge,
  IReactForceNode,
  IReactForceEdge,
} from "./types";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
cytoscape.use(fcose);

type CoordinateMap = Record<string, { x: number; y: number }>;

const formatNodesForCytoscope = (nodes: IMockNode[]): ICytoscapeNode[] => {
  return nodes.map((n) => {
    const node: ICytoscapeNode = {
      data: {
        ...n,
        id: n.id,
        label: n.name,
      },

      group: "nodes",
    };
    if (n.parent) node.data.parent = n.parent;
    return node;
  });
};

const formatEdgesForCytoscope = (edges: IMockEdge[]): ICytoscapeEdge[] => {
  return edges.map((e) => ({
    data: {
      id: e.id,
      label: e.id,
      source: e.source,
      target: e.target,
    },
    group: "edges",
  }));
};

const getCoordinatesFromCytoscape = (
  nodes: IMockNode[],
  edges: IMockEdge[]
): CoordinateMap => {
  const container = document.createElement("div");
  container.id = "cy";
  document.body.appendChild(container);

  const cyNodes: ICytoscapeNode[] = formatNodesForCytoscope(nodes);
  const cyEdges: ICytoscapeEdge[] = formatEdgesForCytoscope(edges);

  const cy = cytoscape({
    container: container,
    elements: {
      nodes: cyNodes,
      edges: cyEdges,
    },
  });

  cy.layout({
    name: "fcose",
    // padding: 1,
    // nodeSeparation: 1,
    // clusters: response.namespaces.map((ns) => {
    //   return ns.images.map((i) => i.id);
    // }),
    // fit: true,
    // idealInterClusterEdgeLengthCoefficient: 1,
    // springCoeff: 1,

    // nodeSeparation: 1,
    // sampleSize: 400,
    // nodeRepulsion: () => 4500,
    quality: "proof",
    // padding: "2px",
    // fit: true,
    // randomize: false,
    // nodeDimensionsIncludeLabels: true,
    // uniformNodeDimensions: true,
    // alignmentConstraint: {
    //   horizontal: [
    //     ["aws", "lambda", "lambda-1"],
    //     // ["monitoring", "monitoring-1"],
    //   ],
    // },
    animate: false,
  } as any).run();

  const nodeCoordinates = cy.nodes().map((node) => {
    return {
      id: node.id(),
      x: Number(node.position("x").toFixed(0)),
      y: Number(node.position("y").toFixed(0)),
    };
  });

  const coordinateMap = nodeCoordinates.reduce(
    (acc: CoordinateMap, { id, x, y }) => {
      acc[id] = { x, y };
      return acc;
    },
    {}
  );
  return coordinateMap;
};

const formatNodesForReactFlow = (
  nodes: IMockNode[],
  coordinateMap: CoordinateMap
): IReactFlowNode[] => {
  return nodes.map((node) => {
    const { x, y } = coordinateMap[node.id];

    const rfNode: IReactFlowNode = {
      id: node.id,
      data: {
        label: node.name,
      },
      position: {
        x,
        y,
      },
      type: "namespace",
      // expandParent: true,
      // connectable: false,
    };
    if (node.type === NodeType.IMAGE) {
      rfNode.type = "image";
      // rfNode.parentNode = node.parent;
      // rfNode.extent = "parent";
    } else if (node.type === NodeType.NAMESPACE) {
      rfNode.type = "namespace";
    }
    return rfNode;
  });
};

const formatEdgesForReactFlow = (edges: IMockEdge[]): IReactFlowEdge[] => {
  return edges.map((edge, index) => {
    return {
      ...edge,
      id: `edge${index}`,
      source: edge.source,
      target: edge.target,
    };
  });
};

const formatNodesForD3Graph = (nodes: IMockNode[]): ID3GraphNode[] => {
  return nodes.map((node) => {
    return {
      id: node.id,
    };
  });
};

const formatEdgesForD3Graph = (edges: IMockEdge[]): ID3GraphEdge[] => {
  return edges.map((edge) => {
    return {
      source: edge.source,
      target: edge.target,
    };
  });
};

const formatNodesForReactForceGraph = (
  nodes: IMockNode[]
): IReactForceNode[] => {
  return nodes.map((node) => {
    const n: any = {
      ...node,
      id: node.id,
      name: node.name,
    };
    if (node.type === NodeType.NAMESPACE) {
      n.val = 10;
    } else if (node.type === NodeType.IMAGE) {
      n.val = 1;
    }
    return n;
  });
};

const formatEdgesForReactForceGraph = (
  edges: IMockEdge[]
): IReactForceEdge[] => {
  return edges.map((edge) => {
    return {
      source: edge.source,
      target: edge.target,
    };
  });
};

const formatNodesForNivoNetwork = (nodes: IMockNode[]): INivoNetworkNode[] => {
  return nodes.map((node) => {
    return {
      id: node.id,
    };
  });
};

const formatEdgesForNivoNetwork = (edges: IMockEdge[]): INivoNetworkEdge[] => {
  return edges.map((edge) => {
    return {
      source: edge.source,
      target: edge.target,
    };
  });
};

export const getNodesEdgesForReactFlow = (
  nodes: IMockNode[],
  edges: IMockEdge[]
): { rfNodes: IReactFlowNode[]; rfEdges: IReactFlowEdge[] } => {
  const coordinateMap = getCoordinatesFromCytoscape(nodes, edges);

  return {
    rfNodes: formatNodesForReactFlow(nodes, coordinateMap),
    rfEdges: formatEdgesForReactFlow(edges),
  };
};

export const getNodesEdgesForCytoscope = (
  nodes: IMockNode[],
  edges: IMockEdge[]
): { cyNodes: ICytoscapeNode[]; cyEdges: ICytoscapeEdge[] } => {
  return {
    cyNodes: formatNodesForCytoscope(nodes),
    cyEdges: formatEdgesForCytoscope(edges),
  };
};

export const getNodesEdgesForD3Graph = (
  nodes: IMockNode[],
  edges: IMockEdge[]
): ID3GraphData => {
  return {
    nodes: formatNodesForD3Graph(nodes),
    links: formatEdgesForD3Graph(edges),
  };
};

export const getNodesEdgesForNivoNetwork = (
  nodes: IMockNode[],
  edges: IMockEdge[]
): { nodes: INivoNetworkNode[]; links: INivoNetworkEdge[] } => {
  return {
    nodes: formatNodesForNivoNetwork(nodes),
    links: formatEdgesForNivoNetwork(edges),
  };
};

export const getNodesEdgesForReactForce = (
  nodes: IMockNode[],
  edges: IMockEdge[]
): { nodes: IReactForceNode[]; links: IReactForceEdge[] } => {
  return {
    nodes: formatNodesForReactForceGraph(nodes),
    links: formatEdgesForReactForceGraph(edges),
  };
};


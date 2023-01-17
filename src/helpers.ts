import {
  IMockEdge,
  IMockNode,
  ICytoscapeNode,
  ICytoscapeEdge,
  IReactFlowNode,
  IReactFlowEdge,
} from "./types";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
cytoscape.use(fcose);

type CoordinateMap = Record<string, { x: number; y: number }>;

const formatNodesForCytoscope = (nodes: IMockNode[]): ICytoscapeNode[] => {
  return nodes.map((n) => {
    const node: ICytoscapeNode = {
      data: {
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
  } as any).run();

  const nodeCoordinates = cy.nodes().map((node) => {
    return {
      id: node.id(),
      x: node.position("x"),
      y: node.position("y"),
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
    };
    if (node.parent) rfNode.parentNode = node.parent;
    return rfNode;
  });
};

const formatEdgesForReactFlow = (edges: IMockEdge[]): IReactFlowEdge[] => {
  return edges.map((edge, index) => {
    return {
      ...edge,
      id: `edge${index}`,
      markerEnd: { type: "arrowclosed" },
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

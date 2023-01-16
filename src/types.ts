import { EdgeDefinition, NodeDefinition } from "cytoscape";

export enum NodeType {
  IMAGE = "IMAGE",
  NAMESPACE = "NAMESPACE",
}

export interface IMockNode {
  type: NodeType;
  id: string;
  name: string;
  nodesCount?: number;
  containersCount?: number;
  parent?: string;
}

export interface IMockEdge {
  id: string;
  source: string;
  target: string;
}

export interface ICytoscapeNode extends NodeDefinition {
  group?: "nodes";
}

export interface ICytoscapeEdge extends EdgeDefinition {
  group?: "edges";
}

export interface IReactFlowNode {
  id: string;
  data: {
    label: string;
  };
  position: {
    x: number;
    y: number;
  };
  parentNode?: string;
}

export interface IReactFlowEdge {
  id: string;
  markerEnd?: {
    type: "arrowclosed";
  };
  source: string;
  target: string;
}

import { Edge, Node } from "@reactflow/core";
import { EdgeDefinition, NodeDefinition } from "cytoscape";
import { GraphData, GraphLink, GraphNode } from "react-d3-graph";
import { NodeProps } from "reactflow";

export enum NodeType {
  IMAGE = "IMAGE",
  NAMESPACE = "NAMESPACE",
  ROOT = "ROOT",
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

export type IReactFlowNode = Node & {
  id: string;
  data: {
    label: string;
  };
  position: {
    x: number;
    y: number;
  };
  type: "input" | "group" | "output" | "default" | "image" | "namespace";
  parentNode?: string;
};

export type IReactFlowEdge = Edge & {
  id: string;
  source: string;
  target: string;
};

export type IReactFlowCustomNode<K> = NodeProps<K>;

export type ID3GraphNode = GraphNode;

export type ID3GraphEdge = GraphLink;

export type ID3GraphData = GraphData<ID3GraphNode, ID3GraphEdge>;

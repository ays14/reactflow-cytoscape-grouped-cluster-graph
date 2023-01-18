import { FC, useState } from "react";
import { mockNodes, mockEdges } from "./mock";
import { Box } from "@chakra-ui/react";
import { getNodesEdgesForD3Graph } from "./helpers";
import RFImageNode from "./components/RFImageNode";
import RFNamespaceNode from "./components/RFNamespaceNode";
import { Graph, GraphConfiguration } from "react-d3-graph";
import { ID3GraphEdge, ID3GraphNode } from "./types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface D3GraphProps {}

const nodeTypes = {
  image: RFImageNode,
  namespace: RFNamespaceNode,
};

const D3Graph: FC<D3GraphProps> = () => {
  const { nodes, links } = getNodesEdgesForD3Graph(mockNodes, mockEdges);
  const graphConfig: Partial<GraphConfiguration<ID3GraphNode, ID3GraphEdge>> = {
    directed: true,
    automaticRearrangeAfterDropNode: false,
    collapsible: false,
    height: 800,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: false,
    // initialZoom: 1,
    // maxZoom: 5,
    // minZoom: 0.05,
    nodeHighlightBehavior: false,
    panAndZoom: true,
    staticGraph: false,
    width: 800,
    d3: {
      alphaTarget: 0.5,
      gravity: -250,
      linkLength: 500,
      linkStrength: 200,
    },
    node: {
      color: "#d3d3d3",
      fontColor: "black",
      fontSize: 12,
      fontWeight: "normal",
      highlightColor: "red",
      highlightFontSize: 12,
      highlightFontWeight: "bold",
      highlightStrokeColor: "SAME",
      highlightStrokeWidth: 1.5,
      labelProperty: "id",
      mouseCursor: "pointer",
      opacity: 1,
      renderLabel: true,
      size: 450,
      strokeColor: "none",
      strokeWidth: 1.5,
      svg: "",
      symbolType: "circle",
    },
    link: {
      color: "lightgray",
      highlightColor: "red",
      mouseCursor: "pointer",
      opacity: 0.5,
      semanticStrokeWidth: true,
      strokeWidth: 1,
      type: "STRAIGHT",
    },
  };

  return (
    <Box className="d3-graph" w="100%" h="100%">
      {/* <Graph id="d3-graph" data={{ nodes, links }} config={graphConfig} /> */}
    </Box>
  );
};

export default D3Graph;

import { FC } from "react";
import { Background, Controls, MiniMap, ReactFlow } from "reactflow";
import { mockNodes, mockEdges } from "./mock";
import { Box } from "@chakra-ui/react";
import "reactflow/dist/style.css";
import { getNodesEdgesForReactFlow } from "./helpers";
import RFImageNode from "./components/RFImageNode";
import RFNamespaceNode from "./components/RFNamespaceNode";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReactFlowGraphProps {}

const nodeTypes = {
  image: RFImageNode,
  namespace: RFNamespaceNode,
};

const ReactFlowGraph: FC<ReactFlowGraphProps> = (props) => {
  const { rfNodes, rfEdges } = getNodesEdgesForReactFlow(mockNodes, mockEdges);

  return (
    <Box className="rf-graph" w="100%" h="100%">
      <ReactFlow nodeTypes={nodeTypes} nodes={rfNodes} edges={rfEdges} fitView>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </Box>
  );
};

export default ReactFlowGraph;

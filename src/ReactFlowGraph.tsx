import { FC } from "react";
import { Background, Controls, MiniMap, ReactFlow } from "reactflow";
import { mockNodes, mockEdges } from "./mock";
import { Box } from "@chakra-ui/react";
import "reactflow/dist/style.css";
import { getNodesEdgesForReactFlow } from "./helpers";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReactFlowGraphProps {}

const ReactFlowGraph: FC<ReactFlowGraphProps> = (props) => {
  const { rfNodes, rfEdges } = getNodesEdgesForReactFlow(mockNodes, mockEdges);

  return (
    <Box className="rf-graph">
      <ReactFlow nodes={rfNodes} edges={rfEdges as any}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </Box>
  );
};

export default ReactFlowGraph;

import { FC } from "react";
import { Background, Controls, MiniMap, ReactFlow } from "reactflow";
import { IReactFlowNode, IReactFlowEdge } from "./types";
import { Box } from "@chakra-ui/react";
import "reactflow/dist/style.css";

interface ReactFlowGraphProps {
  nodes: IReactFlowNode[];
  edges: IReactFlowEdge[];
}

const ReactFlowGraph: FC<ReactFlowGraphProps> = (props) => {
  const { nodes, edges } = props;

  return (
    <Box position="absolute" h="100vh" w="100vw" className="rf-graph">
      <ReactFlow nodes={nodes} edges={edges as any} fitView>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </Box>
  );
};

export default ReactFlowGraph;
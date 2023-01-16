import { useEffect, useState } from "react";
import "./styles.css";
import { mockEdges, mockNodes } from "./mock";
import ReactFlowGraph from "./ReactFlowGraph";
import { getNodesEdgesForReactFlow } from "./helpers";

export default function App() {
  const [nodes, setNodes] = useState<any>([]);
  const [edges, setEdges] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const { rfNodes, rfEdges } = await getNodesEdgesForReactFlow(
        mockNodes,
        mockEdges
      );

      console.log(rfNodes);

      setNodes(rfNodes);
      setEdges(rfEdges);
    })();
  }, []);

  return (
    <div className="App">
      {nodes && <ReactFlowGraph nodes={nodes} edges={edges} />}
    </div>
  );
}

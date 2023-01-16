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
      const { formattedEdges, formattedNodes } = await getNodesEdgesForReactFlow(mockEdges,mockNodes
      );

      setNodes(formattedNodes);
      setEdges(formattedEdges);
    })();
  }, []);

  return (<div className="App">{nodes && (<ReactFlowGraph nodes={nodes} edges={edges} />)}</div>);
}

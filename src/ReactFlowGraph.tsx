import { FC } from "react";

interface ReactFlowGraphProps { nodes: any; edges: any; }

const ReactFlowGraph: FC<ReactFlowGraphProps> = props => {
    const { nodes, edges } = props;
    console.log(nodes);
    console.log(edges);
    return (
        <div>Graph<div>end</div></div>
    );
};

export default ReactFlowGraph;
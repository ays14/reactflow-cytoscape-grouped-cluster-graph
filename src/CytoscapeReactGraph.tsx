import { FC } from "react";
import { mockNodes, mockEdges } from "./mock";
import { Box } from "@chakra-ui/react";
import { getNodesEdgesForCytoscope } from "./helpers";
import { Graph, Node, Edge } from "cytoscape-react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CytoscapeReactGraphProps {}

const CytoscapeReactGraph: FC<CytoscapeReactGraphProps> = (props) => {
  const { cyNodes, cyEdges } = getNodesEdgesForCytoscope(mockNodes, mockEdges);

  return (
    <Box className="cy-graph" w="100%" h="100%">
      <Graph
        layoutParams={{
          name: "preset",
          // nodeSeparation: 6300,
          // sampleSize: 400,
          // nodeRepulsion: () => 4500,
          // quality: "proof",
          // padding: "20px",
          // fit: true,
          // randomize: false,
          // nodeDimensionsIncludeLabels: true,
          // uniformNodeDimensions: true,
          // animate: false,
        }}
        cyParams={{
          minZoom: 0.8,
          maxZoom: 5,
          zoom: 2,
        }}
      >
        {cyNodes.map((n) => (
          <Node key={n.data.id}>
            <Box borderRadius="50%" background="red.200">
              {n.data.id}
            </Box>
          </Node>
        ))}
        {cyEdges.map((e) => (
          <Edge key={e.data.id} source={e.data.source} target={e.data.target} />
        ))}
      </Graph>
    </Box>
  );
};

export default CytoscapeReactGraph;

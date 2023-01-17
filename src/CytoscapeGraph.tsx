import { FC } from "react";
import { mockNodes, mockEdges } from "./mock";
import { Box } from "@chakra-ui/react";
import { getNodesEdgesForCytoscope } from "./helpers";
import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
cytoscape.use(fcose);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CytoscapeGraphProps {}

const CytoscapeGraph: FC<CytoscapeGraphProps> = (props) => {
  const { cyNodes, cyEdges } = getNodesEdgesForCytoscope(mockNodes, mockEdges);

  return (
    <Box w="100vw" h="100vh" position="absolute" className="cy-graph">
      <CytoscapeComponent
        elements={[...cyNodes, ...cyEdges]}
        stylesheet={[
          {
            selector: "edge",
            style: {
              "line-opacity": 0,
            },
          },
          {
            selector: ":parent",
            style: {
              "background-opacity": 0.333,
              "background-color": "#e8e8e8",
              "border-color": "#DADADA",
              "border-width": 3,
              "text-valign": "bottom",
            },
          },
          {
            selector: "label",
            style: {
              "font-size": "6px",
            },
          },
          {
            selector: "node",
            style: {
              "background-image": "../public/logo-js.svg",
              label: "data(label)",
            },
          },
        ]}
        layout={
          {
            name: "fcose",
            // nodeSeparation: 6300,
            // sampleSize: 400,
            // nodeRepulsion: () => 4500,
            quality: "proof",
            padding: "20px",
            fit: true,
            randomize: false,
            nodeDimensionsIncludeLabels: true,
            uniformNodeDimensions: true,
            animate: false,
          } as any
        }
        minZoom={0.8}
        maxZoom={5}
        zoom={2}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default CytoscapeGraph;

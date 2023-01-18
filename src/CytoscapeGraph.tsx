import { FC, useState } from "react";
import { mockNodes, mockEdges } from "./mock";
import { Box } from "@chakra-ui/react";
import { getNodesEdgesForCytoscope } from "./helpers";
import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
import { COMPARISON_BINARY_OPERATORS } from "@babel/types";
import { useEffect, useRef } from "react-reconciler/node_modules/@types/react";
import { IMockNode, NodeType } from "./types";
cytoscape.use(fcose);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CytoscapeGraphProps {}

const CytoscapeGraph: FC<CytoscapeGraphProps> = (props) => {
  const { cyNodes, cyEdges } = getNodesEdgesForCytoscope(mockNodes, mockEdges);
  const [zoom, setZoom] = useState<number>(1);
  // const cyRef = useRef<cytoscape.Core>();
  let cyRef: cytoscape.Core;

  return (
    <Box className="cy-graph" w="100%" h="100%">
      <CytoscapeComponent
        cy={(c) => {
          cyRef = c;

          c.on("zoom", (ev: cytoscape.EventObject) => {
            setZoom(ev.target._private.zoom);
          });
        }}
        elements={[...cyNodes, ...cyEdges]}
        stylesheet={[
          {
            selector: "edge",
            style: {
              "line-opacity": 1,
            },
          },
          // {
          //   selector: ":parent",
          //   style: {
          //     "background-opacity": 0.333,
          //     "background-color": "#e8e8e8",
          //     "border-color": "#DADADA",
          //     "border-width": 3,
          //     "text-valign": "bottom",
          //   },
          // },
          // {
          //   selector: "label",
          //   style: {
          //   },
          // },
          {
            selector: "node",
            style: {
              "font-size": "6px",
              "text-opacity": function (ele: any) {
                const nodeData: IMockNode = ele._private.data;
                if (nodeData.type === NodeType.IMAGE) {
                  if (zoom > 2) {
                    return 0.7;
                  }
                  return 0;
                } else if (nodeData.type === NodeType.NAMESPACE) {
                  return 1;
                }
                return 0.5;
              },
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
            // fit: true,
            // randomize: false,
            // nodeDimensionsIncludeLabels: true,
            // uniformNodeDimensions: true,
            // animate: false,
          } as any
        }
        minZoom={0.5}
        maxZoom={5}
        zoom={1}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default CytoscapeGraph;

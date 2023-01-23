import { FC, useState } from "react";
import { mockNodes, mockEdges } from "./mock";
import { Box } from "@chakra-ui/react";
import { getNodesEdgesForCytoscope } from "./helpers";
import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
import layoutUtilities from "cytoscape-layout-utilities";
import { IMockNode, NodeType } from "./types";
cytoscape.use(fcose);
cytoscape.use(layoutUtilities);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CytoscapeGraphProps {}

const CytoscapeGraph: FC<CytoscapeGraphProps> = (props) => {
  const { cyNodes, cyEdges } = getNodesEdgesForCytoscope(mockNodes, mockEdges);
  console.log("nodes", cyNodes);
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
              // width: function (ele: any) {
              //   const nodeData: IMockNode = ele._private.data;
              //   if (nodeData.type === NodeType.IMAGE) {
              //     return "20px";
              //   } else if (nodeData.type === NodeType.NAMESPACE) {
              //     return "80px";
              //   }
              //   return "150px";
              // },
              // height: function (ele: any) {
              //   const nodeData: IMockNode = ele._private.data;
              //   if (nodeData.type === NodeType.IMAGE) {
              //     return "20px";
              //   } else if (nodeData.type === NodeType.NAMESPACE) {
              //     return "80px";
              //   }
              //   return "150px";
              // },
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
            // numIter: 5000,
            quality: "proof",
            // padding: "20px",
            // gravity: 100,
            nestingFactor: 10,
            // idealEdgeLength: (edge: any) => 50,
            idealEdgeLength: 50,
            // offset: 2,
            // fit: true,
            // animate: false,
            // Packing options - options other than componentSpacing are only for randomized packing
            // desiredAspectRatio: 1,
            // polyominoGridSizeFactor: 1,
            // utilityFunction: 1, // maximize adjusted Fullness   2: maximizes weighted function of fullness and aspect ratio
            componentSpacing: 100, // use to increase spacing between components in pixels. If passed undefined when randomized is false, then it is calculated automatically.
            // tile: true,
          } as any
        }
        // minZoom={0.5}
        // maxZoom={5}
        // zoom={1}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default CytoscapeGraph;

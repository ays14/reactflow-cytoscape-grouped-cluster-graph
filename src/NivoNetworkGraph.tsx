import { FC } from "react";
import { mockNodes, mockEdges } from "./mock";
import { Box } from "@chakra-ui/react";
import { getNodesEdgesForNivoNetwork } from "./helpers";
import RFImageNode from "./components/RFImageNode";
import RFNamespaceNode from "./components/RFNamespaceNode";
import { ResponsiveNetwork, ResponsiveNetworkCanvas } from "@nivo/network";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NivoNetworkGraphProps {}

const nodeTypes = {
  image: RFImageNode,
  namespace: RFNamespaceNode,
};

const NivoNetworkGraph: FC<NivoNetworkGraphProps> = (props) => {
  const { nodes, links } = getNodesEdgesForNivoNetwork(mockNodes, mockEdges);

  return (
    <Box className="rf-graph" w="100%" h="100%">
      {/* <ResponsiveNetwork data={{ nodes, links }} /> */}
      <ResponsiveNetworkCanvas data={{ nodes, links }} />
    </Box>
  );
};

export default NivoNetworkGraph;

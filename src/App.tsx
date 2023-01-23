import ReactFlowGraph from "./ReactFlowGraph";
import CytoscapeGraph from "./CytoscapeGraph";
import CytoscapeReactGraph from "./CytoscapeReactGraph";
import { useState } from "react";
import { Box, Button, Stack } from "@chakra-ui/react";
import NivoNetworkGraph from "./NivoNetworkGraph";
import ReactForceGraph from "./ReactForceGraph";
// import D3Graph from "./D3Graph";

enum Screen {
  ReactFlow = "ReactFlow",
  Cytoscape = "Cytoscape",
  CytoscapeReact = "CytoscapeReact",
  NivoNetwork = "NivoNetwork",
  ReactForceGraph = "ReactForceGraph",
  // D3Graph = "D3Graph",
}

export default function App() {
  const [screen, setScreen] = useState<Screen>(
    (window.localStorage.getItem("screen") as Screen) || Screen.Cytoscape
  );

  const renderScreen = () => {
    switch (screen) {
      case Screen.ReactFlow:
        return <ReactFlowGraph />;
      case Screen.Cytoscape:
        return <CytoscapeGraph />;
      case Screen.CytoscapeReact:
        return <CytoscapeReactGraph />;
      case Screen.NivoNetwork:
        return <NivoNetworkGraph />;
      case Screen.ReactForceGraph:
        return <ReactForceGraph />;
      // case Screen.D3Graph:
      // return <D3Graph />;
      default:
        return <NivoNetworkGraph />;
    }
  };

  const handleScreenChange = (screen: Screen) => {
    setScreen(screen);
    window.localStorage.setItem("screen", screen);
  };

  return (
    <div>
      <Stack w="100vw" h="100vh">
        <Stack isInline p={6}>
          {Object.values(Screen).map((sc) => (
            <Button
              variant={sc === screen ? "solid" : "outline"}
              colorScheme={sc === screen ? "blue" : "gray"}
              size="xs"
              key={sc}
              onClick={() => handleScreenChange(sc)}
            >
              {sc}
            </Button>
          ))}
        </Stack>
        <Box w="100%" h="100%">
          {renderScreen()}
        </Box>
      </Stack>
    </div>
  );
}

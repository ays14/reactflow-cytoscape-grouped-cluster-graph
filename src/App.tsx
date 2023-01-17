import ReactFlowGraph from "./ReactFlowGraph";
import CytoscapeGraph from "./CytoscapeGraph";
import CytoscapeReactGraph from "./CytoscapeReactGraph";
import { useState } from "react";
import { Box, Button, Stack } from "@chakra-ui/react";

enum Screen {
  ReactFlow = "ReactFlow",
  Cytoscape = "Cytoscape",
  CytoscapeReact = "CytoscapeReact",
}

export default function App() {
  const [screen, setScreen] = useState<Screen>(
    (window.localStorage.getItem("screen") as Screen) || Screen.ReactFlow
  );
  console.log(screen);

  const renderScreen = () => {
    switch (screen) {
      case Screen.ReactFlow:
        return <ReactFlowGraph />;
      case Screen.Cytoscape:
        return <CytoscapeGraph />;
      case Screen.CytoscapeReact:
        return <CytoscapeReactGraph />;
      default:
        return <ReactFlowGraph />;
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

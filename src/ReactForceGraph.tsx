import { FC, useRef, useState } from "react";
import { mockNodes, mockEdges } from "./mock";
import { Box } from "@chakra-ui/react";
import { getNodesEdgesForReactForce } from "./helpers";
import { ForceGraph2D } from "react-force-graph";
import { IReactForceNode, NodeType } from "./types";
import KubernetesImg from "./images/kubernetes.svg";
import SandboxImg from "./images/sandbox.png";

// @description: wrapText wraps HTML canvas text onto a canvas of fixed width
// @param ctx - the context for the canvas we want to wrap text on
// @param text - the text we want to wrap.
// @param x - the X starting point of the text on the canvas.
// @param y - the Y starting point of the text on the canvas.
// @param maxWidth - the width at which we want line breaks to begin - i.e. the maximum width of the canvas.
// @param lineHeight - the height of each line, so we can space them below each other.
// @returns an array of [ lineText, x, y ] for all lines
const wrapText = function (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  // First, start by splitting all of our text into words, but splitting it into an array split by spaces
  const words: string[] = text.split(" ");
  let line = ""; // This will store the text of the current line
  let testLine = ""; // This will store the text when we add a word, to test if it's too long
  const lineArray: Array<[string, number, number]> = []; // This is an array of lines, which the function will return

  // Lets iterate over each word
  for (let n = 0; n < words.length; n++) {
    // Create a test line, and measure it..
    testLine += `${words[n]} `;
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    // If the width of this test line is more than the max width
    if (testWidth > maxWidth && n > 0) {
      // Then the line is finished, push the current line into "lineArray"
      lineArray.push([line, x, y]);
      // Increase the line height, so a new line is started
      y += lineHeight;
      // Update line and test line to use this word as the first word on the next line
      line = `${words[n]} `;
      testLine = `${words[n]} `;
    } else {
      // If the test line is still less than the max width, then add the word to the current line
      line += `${words[n]} `;
    }
    // If we never reach the full max width, then there is only one line.. so push it into the lineArray so we return something
    if (n === words.length - 1) {
      lineArray.push([line, x, y]);
    }
  }
  // Return the line array
  return lineArray;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReactForceGraphProps {}

const ReactForceGraph: FC<ReactForceGraphProps> = (props) => {
  const { nodes, links } = getNodesEdgesForReactForce(mockNodes, mockEdges);
  const fgRef = useRef<any>();
  const [selectedNode, setSelectedNode] = useState<IReactForceNode>();

  const getNodeCanvasObject = (
    node: IReactForceNode,
    ctx: CanvasRenderingContext2D,
    currentScale: number
  ) => {
    const imageSize = 20;
    const fontSize = 4;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#071013";

    if (currentScale > 3) {
      ctx.font = `${fontSize}px Inter`;
      const wrappedText = wrapText(
        ctx,
        node.name,
        Number(node.x),
        Number(node.y) + imageSize / 1.5,
        imageSize,
        fontSize
      );
      wrappedText.forEach(([text, x, y]) => {
        ctx.fillText(text, x, y);
      });
    }

    const image = new Image();
    switch (node.type) {
      case NodeType.IMAGE:
        image.src = KubernetesImg;
        break;
      case NodeType.NAMESPACE:
        image.src = SandboxImg;
        break;
    }
    ctx.drawImage(
      image,
      Number(node.x) - imageSize / 2,
      Number(node.y) - imageSize / 2,
      imageSize,
      imageSize
    );
    return ctx;
  };

  return (
    <Box className="rforce-graph" w="100%" h="100%">
      <ForceGraph2D
        ref={fgRef}
        height={800}
        width={800}
        // cooldownTicks={0}
        // cooldownTime={5000}
        // onEngineStop={() => fgRef.current?.zoom(2)}
        graphData={{ nodes, links }}
        nodeCanvasObject={getNodeCanvasObject as any}
        onNodeClick={(node) => {
          fgRef.current.centerAt(node.x, node.y, 0);
          fgRef.current.zoom(4, 0);
          setSelectedNode(node as IReactForceNode);
        }}
        enableNodeDrag={false}
      />
    </Box>
  );
};

export default ReactForceGraph;

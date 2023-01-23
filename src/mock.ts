// import response from "./response_large";
import response from "./response";
import { IMockNode, NodeType, IMockEdge } from "./types";

export const mockNodes: IMockNode[] = [];
export const mockEdges: IMockEdge[] = [];

const dummyNamespaceNode: IMockNode = {
  type: NodeType.ROOT,
  id: "0",
  name: "Root",
  weight: 500,
};

mockNodes.push(dummyNamespaceNode);

response.namespaces.forEach((ns) => {
  ns.images.forEach((i) => {
    mockNodes.push({
      type: NodeType.IMAGE,
      id: i.id,
      name: i.name,
      // nodesCount: i.numOfRunningNodes,
      // containersCount: i.numOfRunningContainers,
      weight: 50,
      // parent: ns.id,
    });

    mockEdges.push({
      id: `${ns.id}_${i.id}`,
      source: ns.id,
      target: i.id,
    });
  });
  mockNodes.push({
    type: NodeType.NAMESPACE,
    id: ns.id,
    name: ns.name,
    weight: 200,
  });
  mockEdges.push({
    id: `${dummyNamespaceNode.id}_${ns.id}`,
    source: dummyNamespaceNode.id,
    target: ns.id,
  });
});

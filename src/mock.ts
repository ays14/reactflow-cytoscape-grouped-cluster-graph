import { IMockNode, NodeType } from "./types";

const response = {
  namespaces: [
    {
      id: "monitoring",
      name: "MONITORING",
      images: [
        {
          id: "monitoring-image-1",
          name: "MONITORING-IMAGE-1",
          vulnerabilityStatus: {
            scanStatus: "RUNNING", // SCANNED, NOT_SCANNED, RUNNING
            issuesCount: {
              low: 19,
              high: 32,
              medium: 12,
              critical: 1,
            },
          },
          complianceStatus: {
            scanStatus: "RUNNING",
            issuesCount: {
              low: 19,
              high: 32,
              medium: 1,
              critical: 2,
            },
          },
          numOfRunningContainers: 15,
          numOfRunningNodes: 20,
        },
        {
          id: "monitoring-image-2",
          name: "MONITORING-IMAGE-2",
          vulnerabilityStatus: {
            scanStatus: "NOT_SCANNED", // SCANNED, NOT_SCANNED, RUNNING
            issuesCount: {
              low: 19,
              high: 32,
              medium: 12,
              critical: 1,
            },
          },
          complianceStatus: {
            scanStatus: "NOT_SCANNED",
            issuesCount: {
              low: 19,
              high: 32,
              medium: 1,
              critical: 2,
            },
          },
          numOfRunningContainers: 15,
          numOfRunningNodes: 20,
        },
        {
          id: "monitoring-image-3",
          name: "MONITORING-IMAGE-3",
          vulnerabilityStatus: {
            scanStatus: "SCANNED", // SCANNED, NOT_SCANNED, RUNNING
            issuesCount: {
              low: 19,
              high: 32,
              medium: 12,
              critical: 1,
            },
          },
          complianceStatus: {
            scanStatus: "SCANNED",
            issuesCount: {
              low: 19,
              high: 32,
              medium: 1,
              critical: 2,
            },
          },
          numOfRunningContainers: 15,
          numOfRunningNodes: 20,
        },
      ],
    },
    {
      id: "lambda",
      name: "LAMBDA",
      images: [
        {
          id: "lambda-image-1",
          name: "LAMBDA-IMAGE-1",
          vulnerabilityStatus: {
            scanStatus: "RUNNING", // SCANNED, NOT_SCANNED, RUNNING
            issuesCount: {
              low: 19,
              high: 32,
              medium: 12,
              critical: 1,
            },
          },
          complianceStatus: {
            scanStatus: "RUNNING",
            issuesCount: {
              low: 19,
              high: 32,
              medium: 1,
              critical: 2,
            },
          },
          numOfRunningContainers: 15,
          numOfRunningNodes: 20,
        },
        {
          id: "lambda-image-2",
          name: "LAMBDA-IMAGE-2",
          vulnerabilityStatus: {
            scanStatus: "NOT_SCANNED", // SCANNED, NOT_SCANNED, RUNNING
            issuesCount: {
              low: 19,
              high: 32,
              medium: 12,
              critical: 1,
            },
          },
          complianceStatus: {
            scanStatus: "NOT_SCANNED",
            issuesCount: {
              low: 19,
              high: 32,
              medium: 1,
              critical: 2,
            },
          },
          numOfRunningContainers: 15,
          numOfRunningNodes: 20,
        },
      ],
    },
  ],
};

export const mockNodes: IMockNode[] = [];
response.namespaces.forEach((ns) => {
  ns.images.forEach((i) => {
    mockNodes.push({
      type: NodeType.IMAGE,
      id: i.id,
      name: i.name,
      nodesCount: i.numOfRunningNodes,
      containersCount: i.numOfRunningContainers,
      parent: ns.id
    });
  });
  mockNodes.push({
    type: NodeType.NAMESPACE,
    id: ns.id,
    name: ns.name,
  });
})

export const mockEdges = [];

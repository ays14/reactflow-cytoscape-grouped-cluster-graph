import { IMockNode, NodeType, IMockEdge } from "./types";

export const response = {
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
    {
      id: "monitoring-1",
      name: "MONITORING-1",
      images: [
        {
          id: "monitoring-1-image-1",
          name: "MONITORING-1-IMAGE-1",
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
          id: "monitoring-1-image-2",
          name: "MONITORING-1-IMAGE-2",
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
          id: "monitoring-1-image-3",
          name: "MONITORING-1-IMAGE-3",
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
      id: "lambda-1",
      name: "LAMBDA-1",
      images: [
        {
          id: "lambda-1-image-1",
          name: "LAMBDA-1-IMAGE-1",
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
          id: "lambda-1-image-2",
          name: "LAMBDA-1-IMAGE-2",
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

    {
      id: "aws",
      name: "AWS",
      images: [
        {
          id: "aws-image-1",
          name: "AWS-IMAGE-1",
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
          id: "aws-image-2",
          name: "AWS-IMAGE-2",
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
          id: "aws-image-3",
          name: "AWS-IMAGE-3",
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
          id: "aws-image-4",
          name: "AWS-IMAGE-4",
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
export const mockEdges: IMockEdge[] = [];

const dummyNamespaceNode: IMockNode = {
  type: NodeType.ROOT,
  id: "0",
  name: "Root",
};
mockNodes.push(dummyNamespaceNode);

response.namespaces.forEach((ns) => {
  ns.images.forEach((i) => {
    mockNodes.push({
      type: NodeType.IMAGE,
      id: i.id,
      name: i.name,
      nodesCount: i.numOfRunningNodes,
      containersCount: i.numOfRunningContainers,
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
  });
  mockEdges.push({
    id: `${dummyNamespaceNode.id}_${ns.id}`,
    source: dummyNamespaceNode.id,
    target: ns.id,
  });
});

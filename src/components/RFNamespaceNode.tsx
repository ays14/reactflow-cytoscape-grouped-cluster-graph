import { VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { IReactFlowCustomNode } from "../types";

interface RFNamespaceNodeData {
  label: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RFNamespaceNodeProps
  extends IReactFlowCustomNode<RFNamespaceNodeData> {}

const RFNamespaceNode: FunctionComponent<RFNamespaceNodeProps> = (props) => {
  const {
    data: { label },
  } = props;

  return (
    <VStack justifyContent="center">
      <Text fontSize="8px" maxW="80px" textAlign="center">
        {label}
      </Text>
    </VStack>
  );
};

export default RFNamespaceNode;

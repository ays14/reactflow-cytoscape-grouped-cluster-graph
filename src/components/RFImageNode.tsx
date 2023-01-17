import { Circle, VStack } from "@chakra-ui/layout";
import { Icon, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { IReactFlowCustomNode } from "../types";
import { SiKubernetes } from "react-icons/si";

interface RFImageNodeData {
  label: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RFImageNodeProps extends IReactFlowCustomNode<RFImageNodeData> {}

const RFImageNode: FunctionComponent<RFImageNodeProps> = (props) => {
  const {
    data: { label },
  } = props;

  return (
    <VStack justifyContent="center">
      <Circle>
        <Icon as={SiKubernetes} boxSize={6} />
      </Circle>
      <Text fontSize="8px" maxW="80px" textAlign="center">
        {label}
      </Text>
    </VStack>
  );
};

export default RFImageNode;

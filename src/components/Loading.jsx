import { Spinner , Heading} from "@chakra-ui/react";

const Loading = () => {
  return (
    <Heading><Spinner  mr={10}/>Loading...</Heading>
  );
};

export default Loading;

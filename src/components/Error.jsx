import { Alert, AlertIcon } from "@chakra-ui/react";

const Error = ({ message }) => {
  return (
    <Alert status="error">
      <AlertIcon boxSize={8} mr={4} /> 
      {message}
    </Alert>
  );
};

export default Error;

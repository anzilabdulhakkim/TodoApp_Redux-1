import { Box, Button, Heading } from '@chakra-ui/react';

const TodoItem = ({ id, title, status, handleStatus, handleDelete, handleShow }) => {

  return (
    <Box p="4" borderRadius="md" mb="4" textAlign="center">
      <Heading style={{ marginBottom: "14px"}}>{title}</Heading>
      <Button
        bg="blue.500"
        _hover={{ bg: "blue.600" }}
        onClick={() => handleStatus(id)}
        borderRadius="5px"
        mr="2"
      >
        {status ? "Completed" : "Pending"}
      </Button>
      <Button
        bg="red.500"
        _hover={{ bg: "red.600" }}
        onClick={() => handleDelete(id)}
        borderRadius="5px"
        ml="2"
      >
        Delete
      </Button>
      <Button
        bg="green.500"
        _hover={{ bg: "green.600" }}
        borderRadius="5px"
        onClick={() => handleShow(id, title)}
        ml="2"
      >
        Edit Title
      </Button>
    </Box>
  );
};

export default TodoItem;

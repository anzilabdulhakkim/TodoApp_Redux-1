import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, edittodo } from '../redux/action';
import TodoItem from './TodoItem';
import { Input, Button, Box, Flex, useColorMode } from '@chakra-ui/react'; 

const Todo = () => {
  const [title, setTitle] = useState('');
  const [show, setShow] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [id, setId] = useState('');

  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo);
  const { colorMode, toggleColorMode } = useColorMode();

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleAdd() {
    let obj = {
      id: Math.random() + Date.now(),
      title: title,
      status: false,
    };
    dispatch(addtodo(obj));
    setTitle('');
  }

  function handleStatus(id) {
    let editdata1 = todoData.map((ele) => {
      if (ele.id === id) {
        ele.status = !ele.status;
      }
      return ele;
    });
    dispatch(edittodo(editdata1));
  }

  function handleDelete(id) {
    let deletedata = todoData.filter((ele) => ele.id !== id);
    dispatch(edittodo(deletedata));
  }

  function handleShow(val1, val2) {
    setShow(true);
    setEditTitle(val2);
    setId(val1);
  }

  function handleHide() {
    setShow(false);
    let updatedData = todoData.map((ele) => {
      if (ele.id === id) {
        ele.title = editTitle;
      }
      return ele;
    });
    dispatch(edittodo(updatedData));
  }

  function handlechangetitle(event) {
    setEditTitle(event.target.value);
  }

  function toggleTheme() {
    toggleColorMode();
  }

  return (
    <Box minHeight="100vh" mt="30px">
      <Flex justifyContent="center" alignItems="center" flexDirection="column" gap={10}>
        <Flex gap={10} >
          <Input
            placeholder="Enter Todo Title"
            value={title}
            type="text"
            onChange={handleTitle}
            mb="4"
            borderRadius="5px"
            w="100%"
          />
          <Button
            onClick={handleAdd}
            mb="4"
            ml="2"
            px={5}
            colorScheme="teal"
            borderRadius="5px"
          >
            Add
          </Button>
          <Button onClick={toggleTheme} px={10}>
              {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </Flex>

        {show && (
          <Box mb="4" mt={10}>
            <Flex gap={10}>
              <Input
                type="text"
                placeholder="Title"
                value={editTitle}
                onChange={handlechangetitle}
                mb="4"
                borderRadius="5px"
                w="100%"
              />
              <Button
                onClick={handleHide}
                mb="4"
                colorScheme="teal"
                borderRadius="5px"
              >
                Edit
              </Button>
            </Flex>
          </Box>
        )}
      </Flex>

      {todoData.map((ele) => (
        <TodoItem
          key={ele.id}
          {...ele}
          handleStatus={handleStatus}
          handleDelete={handleDelete}
          handleShow={handleShow}
        />
      ))}
    </Box>
  );
};

export default Todo;

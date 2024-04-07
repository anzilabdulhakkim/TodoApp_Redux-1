import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, useTheme, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginchange } from '../redux/action';
import Loading from './Loading';
import Error from './Error';

const Login = () => {
  const theme = useTheme();
  const {colorMode,toggleColorMode } = useColorMode();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      let obj = { email: email, password: password };
      let { data } = await axios({
        method: 'post',
        url: 'https://reqres.in/api/login',
        data: obj,
      });

      if (data.token) {
        dispatch(loginchange(true));
        navigate('/');
      } 
      else {
        setError(true);
        setErrorMessage('Token not received');
      }
    } 
    catch (error) {
      console.log(error);
      setError(true);
      setErrorMessage('An error occurred');
    } 
    finally {
      setLoading(false);
    }
  }

  return (
    <Box p="4" borderRadius="md" w="400px" mx="auto" mt="20vh">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={errorMessage} />
      ) : (
        <Box>
          <Box mb="4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              borderRadius="5px"
              p="5"
              w="100%"
              borderColor={theme.colors.gray[200]}
            />
          </Box>
          <Box mb="4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              borderRadius="5px"
              p="5"
              w="100%"
              borderColor={theme.colors.gray[200]}
            />
          </Box>
          <Button
            onClick={handleLogin}
            borderRadius="5px"
            w="100px"
            colorScheme="blue"
            _hover={{ bg: 'blue.600' }}
            mr="2"
          >
            Submit
          </Button>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Login;

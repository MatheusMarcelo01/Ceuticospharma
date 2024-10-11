import { useState } from 'react';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { Box } from '@chakra-ui/react';
import NavBar from '../../components/HomePage/NavBar'

import axios from 'axios';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Login bem-sucedido:', response.data.user);

        // Salvar os dados no localStorage
        localStorage.setItem('userData', JSON.stringify(response.data.user));


        // Redirecionar para a página após o login bem-sucedido
        window.location.href = '/dashboard';
      } else {
        alert("Email ou senha inválidos!");
        console.error('Credenciais inválidas');
      }
    } catch (error) {
      alert("Email ou senha inválidos!");

      console.error('Erro ao realizar o login:', error);
    }
  };

  return (
    <Box>
      <NavBar />
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleFormSubmit}
        >
          <Stack spacing="4">
            <Input
              name="email"
              type="email"
              label="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </Stack>

          <Button type="submit" mt="6" colorScheme="red" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </Box>


  );
}

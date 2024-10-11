import { useState } from "react";
import { Flex, Button, Stack, Heading, Text } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Link } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'; // Importe os componentes necessários do Chakra UI
import NavBar from '../../components/HomePage/NavBar'
import axios from "axios";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
      const response = await axios.post("/api/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 201) {
        console.log("Usuário cadastrado com sucesso:", response.data.user);
  
        setFormData({
          nome: "",
          email: "",
          password: "",
        });
  
        alert("Usuário cadastrado com sucesso!");
  
        // Aguardar 3 segundos e redireciona para a página de login
        setTimeout(() => {
          window.location.href = "/users/login";
        }, 3000);
      } else {
        console.error("Erro ao cadastrar usuário:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };
  
  

  return (
    <Box>
    <NavBar />
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={480}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleFormSubmit}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Cadastre-se
            </Heading>
          </Stack>

          <Stack mt="5" spacing="4">
            <Flex justify="space-between">
              <Input
                name="nome"
                type="text"
                label="Nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
              />
            </Flex>
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
              type={showPassword ? "text" : "password"}
              label="Senha"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <Text
              fontSize="sm"
              color="gray.400"
              cursor="pointer"
              ml="310"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Ocultar Senha" : "Mostrar Senha"}
            </Text>
          </Stack>

          <Button type="submit" mt="6" colorScheme="red" size="lg">
            Cadastrar
          </Button>

          <Stack pt={6}>
            <Text align={"center"}>
              Já tem uma conta?{" "}
              <Link href="/users/login" color={"red.400"}>
                Login
              </Link>
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

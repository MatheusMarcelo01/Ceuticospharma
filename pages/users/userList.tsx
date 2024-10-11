import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Thead, Tr, Th, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Buscar dados dos usuários ao montar o componente
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="red.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm"
                colorScheme="green"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="red.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                <Th>Data de Cadastro</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">{user.name}</Text>
                      <Text fontSize="sm" color="red.300">{user.email}</Text>
                    </Box>
                  </Td>
                  <Td>{/* Adicione a data de cadastro do usuário aqui, se disponível */}</Td>
                  <Td>
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm"
                      colorScheme="green"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}

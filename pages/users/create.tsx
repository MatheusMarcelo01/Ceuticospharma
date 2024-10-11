import { Box, Flex, SimpleGrid, Heading, Divider, VStack, Input, HStack, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";



export default function Createuser() {
return (
<Box>
    <Header />

    <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
<Heading size="lg" fontWeight="normal">Criar usuário</Heading>

        <Divider size="6" borderColor="gray.700" />

        <VStack spacing="8">
  <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
    <FormControl>
      <FormLabel htmlFor="name">Nome completo</FormLabel>
      <Input type="text" id="name" name="name" />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <Input type="email" id="email" name="email" />
    </FormControl>
  </SimpleGrid>

    <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
    <FormControl>
      <FormLabel htmlFor="password">Senha</FormLabel>
      <Input type="password" id="password" name="Senha" />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="password">Confirme a senha</FormLabel>
      <Input type="password" id="password" name="senha" />
    </FormControl>
    </SimpleGrid>
</VStack>
<Flex mt="8" justify="flex-end" >
    <HStack spacing="4">
    <Link href="/users" passHref>
        <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
     </Link>   
        <Button colorScheme="red">Salvar</Button>
    </HStack>
</Flex>
        </Box>
    </Flex>
</Box>

);
}
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Recuperar dados do localStorage ao montar o componente
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []); // O segundo parâmetro [] garante que este efeito só seja executado uma vez ao montar o componente

  return (
    <Flex align="center">
      {showProfileData && userData && (
        <Box mr="4" textAlign="right">
          <Text>{userData.name}</Text>
          <Text color="red.300" fontSize="small">
            {userData.email}
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name={userData ? userData.name : "Usuário"}
      />
    </Flex>
  );
}

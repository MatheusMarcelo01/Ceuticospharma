import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface UserData {
  name: string;
  email: string;
}

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      
      // Verificação do tipo
      if (parsedData && typeof parsedData.name === 'string' && typeof parsedData.email === 'string') {
        setUserData(parsedData);
      }
    }
  }, []);

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

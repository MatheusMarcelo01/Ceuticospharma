import { Text } from "@chakra-ui/react";

export function Logo () {
    return (
        <Text 
        fontSize={["2xl", "3xl"]} 
        fontWeight="bold" 
        letterSpacing="tight"
        w="64">

            Projeto integrador
            <Text as="span" ml="1" color="red.500" > 2</Text>
        </Text>
    );
}
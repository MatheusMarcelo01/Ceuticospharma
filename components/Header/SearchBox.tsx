import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox () {
    return (
        <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={480}
        alignSelf="center"
        color="red.200"
        position="relative"
        bg="red.800"
        borderRadius="full"
    >
        <Input
            color="red.50"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar"
            _placeholder={{ color: 'red.400' }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
 </Flex>
    );
}
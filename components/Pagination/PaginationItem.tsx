import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem ({ isCurrent = false, number }: PaginationItemProps) {
    if (isCurrent){
    return (
        <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="red"
        disabled
        _disabled={{
            bgColor: 'red.500',
            cursos: 'default',
        }}
        >
            {number}
        </Button>
    );
}
    return (  
        <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="red.700"
        _hover={{
            bg: 'red.500'
        }}
    
        >
            {number}
        </Button>
    )
}
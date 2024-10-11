import React from 'react';
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

interface ProductAddToCartProps {
  data: {
    name: string;
    price: number;
    photo: string;
  };
}

function Product({ data }: ProductAddToCartProps) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image src='https://www.ferramentastenace.com.br/wp-content/uploads/2017/11/sem-foto.jpg' alt={`Picture of ${data.name}`} roundedTop="lg" />
        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated color="black">
              {data.name}
            </Box>

            <Tooltip
              label="Adicionar ao carrinho"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}
            >
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              {data.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Product;

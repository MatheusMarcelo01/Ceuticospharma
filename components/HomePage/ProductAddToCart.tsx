import React from 'react'
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
  SimpleGrid
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'

const products = [
  {
    isNew: true,
    imageURL: 'https://www.drogarianovaesperanca.com.br/imagens-complete/1000x1000/dipirona-500mg-com-30-comprimidos-4d0eeb1305.jpg',
    name: 'Dipirona monoidratada 500mg (30 comprimidos)',
    preço: 8.90,
    rating: 4.2,
    numAvaliacoes: 34,
  },
  {
    isNew: false,
    imageURL: 'https://cdn.ultrafarma.com.br/static/produtos/134908/large-638545839550907523-134908_1.jpg',
    name: 'Loratadina Loratamed 10g (12 comprimidos)',
    preço: 6.99,
    rating: 3.8,
    numAvaliacoes: 20,
  },
  {
    isNew: false,
    imageURL: 'https://cdn.ultrafarma.com.br/static/produtos/164939/medium-637248855020189741-164939_2.png',
    name: 'Colírio Nafazolina+Zinco Teuto 20ml',
    preço: 7.30,
    rating: 4.5,
    numAvaliacoes: 15,
  }
]

interface RatingProps {
  rating: number
  numAvaliacoes: number
}

function Rating({ rating, numAvaliacoes }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'black' : 'yellow'}
              />
            )
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numAvaliacoes} review{numAvaliacoes > 1 && 's'}
      </Box>
    </Box>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative">
      {product.isNew && (
        <Circle size="10px" position="absolute" top={2} right={2} bg="green.200" />
      )}

      <Image src={product.imageURL} alt={`Picture of ${product.name}`} roundedTop="lg" />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {product.isNew && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
              Novo
            </Badge>
          )}
        </Box>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            color="black">
            {product.name}
          </Box>

          <Tooltip
            label="Adicionar ao carrinho"
            bg="white"
            placement={'top'}
            color={'gray.800'}
            fontSize={'1.2em'}>
            <chakra.a href={'#'} display={'flex'}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
            </chakra.a>
          </Tooltip>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Rating rating={product.rating} numAvaliacoes={product.numAvaliacoes} />
          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" color={'gray.600'} fontSize="lg"></Box>
            {product.preço.toFixed(2)}
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

function ProductList() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default ProductList

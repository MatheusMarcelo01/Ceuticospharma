// components/Products/index.tsx
import { useState, useEffect } from 'react';
import { Flex, Button, SimpleGrid, Box } from '@chakra-ui/react';
import Product from '../../components/HomePage/Product';
import NavBar from '../../components/HomePage/NavBar';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products/list?page=${page}`);
        const data = await response.json();
        console.log('API Response:', data); // Adicione este log para depurar a resposta da API
        setProducts(data.products);
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    };

    fetchData();
  }, [page]);

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Box>
        <NavBar/>
            <Flex direction="column" align="center" p={5}>
            {products.length > 0 ? (
                <>
                <SimpleGrid columns={3} spacing={4}>
                    {products.map((product) => (
                    <Product key={product.id} data={product} />
                    ))}
                </SimpleGrid>
                {products.length > 9 && (
                    <Flex mt={4}>
                    <Button onClick={handlePrevPage} disabled={page === 1}>
                        Página Anterior
                    </Button>
                    <Button onClick={handleNextPage}>Próxima Página</Button>
                    </Flex>
                )}
                </>
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
            </Flex>
    </Box>
  );
};

export default Products;

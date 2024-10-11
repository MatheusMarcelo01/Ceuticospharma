import React from 'react';
import { Box } from '@chakra-ui/react'; // Importe os componentes necessários do Chakra UI
import HeroTeste from '../components/HomePage/HeroTeste'
import Footer from  '../components/HomePage/Footer'
import Product from '../components/HomePage/ProductAddToCart'

import NavBar from '../components/HomePage/NavBar'
import Vlibras from '@djpfs/react-vlibras'


function Index() {
  return (
    <Box>
      <Vlibras forceOnload={true} />    
   

  
      <NavBar/>
      <HeroTeste/> 
      <Product/>  

      <Footer/> 
    </Box>
  );
}

export default Index;

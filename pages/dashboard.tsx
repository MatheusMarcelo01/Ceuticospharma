import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import NavBar from '../components/HomePage/NavBar'


const Chart = dynamic(() => import('react-apexcharts'), { 
  ssr: false 
});

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.red[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.red[600]
        },
        axisTicks: {
            color: theme.colors.red[600]
        },
        categories: [
            '2023-09-08T00:00:00.000z',
            '2023-09-09T00:00:00.000z',
            '2023-09-10T00:00:00.000z',
            '2023-09-11T00:00:00.000z',
            '2023-09-12T00:00:00.000z',
            '2023-09-13T00:00:00.000z',
        ],
    },
};

const series = [
  { name: 'series', data: [31, 120, 10 ,28, 61, 18, 109]}
]

export default function Dashboard() {
    return (
    <Box>
    <NavBar/>
      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar  />

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" spacingX='40px' spacingY='20px'>
                <Box
                 p="8"
                 bg="red.800"
                 borderRadius={8}
                 pb="4"   
                >
                    <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                    <Chart options={options} series={series} type="area" height={'100%'} width={'100%'} />
                </Box>
                <Box
                 p="8"
                 bg="red.800"
                 borderRadius={8}
                 pb="4"   
                >
                    <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                    <Chart options={options} series={series} type="area" height={'100%'} width={'100%'}/>
                </Box>
            </SimpleGrid>

        </Flex>
      </Flex>
      </Box>
    )
}
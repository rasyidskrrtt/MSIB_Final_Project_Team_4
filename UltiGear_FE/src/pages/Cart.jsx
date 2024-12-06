import React from 'react'
import Layout from './Layout'
import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import SideBarSection from '../components/SideBarSection'
import Search from '../components/Search'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    return (
    <Layout>
        <HStack align={"stretch"} height={"100vh"} w={"100vw"}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
        >
            <SideBarSection />
            {/* Main Section */}
            <VStack 
                flex="1"
                align="start"
                padding="20px"
                spacing={8}
                overflowY="auto"
                height="100vh" 
            >
                <Search />
                <Text fontSize="4xl" fontWeight="semibold" mb="-25px"
                    px={{ base: '30px', md: '70px' }}
                >Cart</Text>
                <HStack spacing={4} align="stretch" w="full" 
                    px={{ base: '10px', md: '50px' }} 
                    flexWrap="wrap"
                    flexDirection={{ base: 'column', md: 'row' }} 
                >
                    {/* List Keranjang */}
                    <VStack 
                        flex="2" 
                        bg="#F7F3F4"
                        padding="14px"
                        spacing={6}
                        height="auto"
                        w="full"
                    >
                    {[1, 2, 3, 4].map((_, index) => (
                    <HStack 
                        key={index}
                        bg="white"
                        boxShadow="md"
                        borderRadius="md"
                        padding="20px"
                        spacing={4}
                        align="center"
                        justify="space-between"
                        w="full"
                    >
                        <Image 
                            src="https://via.placeholder.com/80"
                            alt="Tenda Anti Jamur"
                            boxSize="120px"
                            objectFit="cover"
                            borderRadius="md"
                        ></Image>
                        <VStack align="start" flex="1" spacing={1}>
                            <Text fontWeight="bold">Tenda Anti Jamur</Text>
                            <Text fontSize="sm" color="gray.600">XL, Blue</Text>
                            <HStack
                            border="2px solid black"
                            borderRadius="full"
                            px={1}
                            spacing={1}
                            mt={4}
                            >
                                <Button 
                                size="sm" variant="unstyled" 
                                fontWeight="bold" 
                                >-</Button>
                                <Text>2</Text>
                                <Button size="sm" variant="unstyled"
                                    fontWeight="bold" 
                                >+</Button>
                            </HStack>
                        </VStack>
                        <Text fontWeight="bold" color="#367236" alignSelf="flex-end" px={6} py={2}
                            >$40</Text>
                    </HStack>
                        ))}
                   </VStack>
                    {/* Total Buy */}
                    <VStack
                        flex="1"
                        align="stretch"
                        bg="white"
                        boxShadow="md"
                        borderRadius="md"
                        padding="26px"
                        mt={4} 
                        spacing={4}
                        w="full"
                        height="20%"
                    >
                        <HStack justify="space-between">
                            <Text fontSize="lg" fontWeight="bold">Total</Text>
                            <Text fontSize="lg" fontWeight="bold" color="#367236">$245</Text>
                        </HStack>
                        <Button bg="#367236" color="white" size="lg" variant="unstyled"
                            onClick={() => navigate("/paymentMethod")}>
                        Buy Now
                        </Button>
                    </VStack>
                </HStack>

           </VStack>
        </HStack>
    </Layout>
  )
}

export default Cart
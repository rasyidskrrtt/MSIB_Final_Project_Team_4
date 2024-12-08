import React from 'react'
import Layout from './Layout'
import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import SideBarSection from '../components/SideBarSection'
import { useNavigate } from 'react-router-dom'

const MyOrders = () => {
    const navigate = useNavigate()
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
                    <Text fontSize="4xl" fontWeight="semibold" 
                        px={{ base: '30px', md: '70px' }}  mb="-25px">
                        My Orders</Text>
                    <HStack spacing={4} align="stretch" w="full"
                        px={{ base: '10px', md: '50px' }} 
                        flexWrap="wrap"
                        flexDirection={{ base: 'column', md: 'row' }} 
                    >
                        {/* List Orders */}
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
                                alt="Jaket Himalaya"
                                boxSize="120px"
                                objectFit="cover"
                                borderRadius="md"
                            ></Image>
                            <VStack align="start" flex="1" spacing={1}>
                                <Text fontWeight="bold">Jaket Himalaya</Text>
                                <Text fontSize="sm" color="gray.600">XL, Blue, 2 Items</Text>
                                <Text fontWeight="bold" color="#367236" mt={6} fontSize="lg">
                                    Rp 40.000
                                </Text>
                            </VStack>
                                <VStack spacing={16}>
                                    <Text color="#367236" fontWeight="bold">Paid</Text>
                                    <Text fontSize="xs">26 Nov 2024</Text>
                                </VStack>
                        </HStack>
                            ))}
                    </VStack>

                        {/* Explore */}
                        <VStack
                            flex="1"
                            bg="#F7F3F4"
                            padding="26px"
                            mt={4}
                            spacing={4}
                            w="full"
                            height="70%"
                            justifyContent="center" 
                            alignItems="center"
                            ml={{base: 0, md: 10}}
                        >
                            <Text fontSize="3xl" align="center" fontWeight="bold">Explore More Product</Text>
                            <Button bg="#367236" color="white" size="lg" w="30%" variant="unstyled"
                                onClick={() => {
                                    navigate('/home')
                                }}
                            >  Explore
                            </Button>
                        </VStack>
                    </HStack>
                </VStack>
            </HStack>
        </Layout>
    )
}

export default MyOrders

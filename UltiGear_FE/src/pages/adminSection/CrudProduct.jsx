import React from 'react'
import Layout from '../Layout'
import SideBarAdmin from '../../components/SideBarAdmin'
import { Box, Button, HStack, Image, Table, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const CrudProduct = () => {
    const navigate = useNavigate();

    const products = [
        {
          id: 1,
          name: "Sepatu Hiking",
          image: "https://via.placeholder.com/60", // URL gambar contoh
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$40",
          size: "S, M, L, XL",
          color: "Blue, Yellow",
        },
        {
          id: 2,
          name: "Jaket Himalaya",
          image: "https://via.placeholder.com/60",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$40",
          size: "S, M, L, XL",
          color: "Blue, Yellow",
        },
        {
          id: 3,
          name: "Tenda Paralel",
          image: "https://via.placeholder.com/80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$40",
          size: "S, M, L, XL",
          color: "Blue, Yellow",
        },
        {
            id: 4,
            name: "Jaket Himalaya",
            image: "https://via.placeholder.com/80",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: "$40",
            size: "S, M, L, XL",
            color: "Blue, Yellow",
          },
    ];
  return (
    <Layout>
        <HStack height="100vh" w="100vw" align="stretch">
            {/* Sidebar */}
            <Box flex="0 0 15%" h="100vh">
                <SideBarAdmin />
            </Box>
            {/* Main Section */}
            <Box p={10} h="100vh" w="100vw" alignContent="center">
                {/* Header Section */}
                <HStack justifyContent="space-between" mb={4} p={4} px={10}
                    bg="#367236" borderRadius="md" boxShadow="sm">
                    <Text color="white" fontSize="4xl" fontWeight="sm" fontFamily="'Covered By Your Grace', cursive">
                        UltiGear!</Text>
                    <Button color="white" bg="#DFA258" w="10%"
                    variant="unstyled" onClick={() => navigate("/addproduct")}>New Add</Button>
                </HStack>

                {/* Table Section */}
                <Table variant="striped" colorScheme="black" borderRadius="md" boxShadow="sm">
                    <Thead bg="teal.800">
                        <Tr>
                            <Th color="white">Name</Th>
                            <Th color="white">Image</Th>
                            <Th color="white">Description</Th>
                            <Th color="white">Price</Th>
                            <Th color="white">Size</Th>
                            <Th color="white">Color</Th>
                            <Th color="white">Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    {products.map((product) => (
                        <Tr key={product.id}>
                        <Td w={40}>{product.name}</Td>
                        <Td w={10}>
                            <Image
                            src={product.image}
                            alt={product.name}
                            boxSize="40px"
                            objectFit="cover"
                            borderRadius="md"
                            />
                        </Td>
                        <Td w={80}>{product.description}</Td>
                        <Td>{product.price}</Td>
                        <Td>{product.size}</Td>
                        <Td>{product.color}</Td>
                        <Td>
                            <HStack spacing={2}>
                            <Button bg="#367236" color="white" size="sm" variant="unstyled" px={4}
                                onClick={() => navigate("/editproduct")}
                            >
                                Edit
                            </Button>
                            <Button bg="#C81D20" color="white" size="sm" variant="unstyled" px={4}>
                                Delete
                            </Button>
                            </HStack>
                        </Td>
                        </Tr>
                    ))}
                    </Tbody>
                </Table>
            </Box>
        </HStack>
    </Layout>
  )
}

export default CrudProduct
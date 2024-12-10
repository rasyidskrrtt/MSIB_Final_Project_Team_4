import React, { useState } from "react";
import Layout from "../Layout";
import SideBarAdmin from "../../components/SideBarAdmin";
import {Box, Button, HStack, Image, Table, Tbody, Td, Th, Thead, Tr, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CrudProduct = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sepatu Hiking",
      category: "Sepatu", // Category added
      image: "https://via.placeholder.com/60",
      description: "Sepatu hiking nyaman untuk berbagai medan.",
      price: "$40",
      size: "M", // Single size selected
      color: "Blue", // Single color selected
      stock: 15, // Stock added
    },
    {
      id: 2,
      name: "Jaket Himalaya",
      category: "Jaket", // Category added
      image: "https://via.placeholder.com/60",
      description: "Jaket gunung yang tahan air dan tahan angin.",
      price: "$60",
      size: "L", // Single size selected
      color: "Red", // Single color selected
      stock: 10, // Stock added
    },
    {
      id: 3,
      name: "Tenda Paralel",
      category: "Tenda", // Category added
      image: "https://via.placeholder.com/60",
      description: "Tenda yang mampu menampung beberapa orang.",
      price: "$100",
      size: "XL", // Single size selected
      color: "Yellow", // Single color selected
      stock: 20, // Stock added
    },
    {
      id: 4,
      name: "Tas Gunung",
      category: "Tas", // Category added
      image: "https://via.placeholder.com/60",
      description: "Tas yang cukup memuat alat campingmu.",
      price: "$80",
      size: "M", // Single size selected
      color: "Black", // Single color selected
      stock: 10, // Stock added
    },
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/editproduct/${id}`);
  };

  const handleAddProduct = () => {
    navigate("/addproduct");
  };

  return (
    <Layout>
      <HStack height="100vh" w="100vw" align="stretch" spacing={0}>
        {/* Sidebar */}
        <Box>
          <SideBarAdmin />
        </Box>
      
      {/* Main Section */}
        <Box
          flex="1"
          align="stretch"
          p={4} px={{base:4, md:16}}
          h="100vh"
          overflowY="auto"
        >
          <HStack
            justifyContent="space-between"
            mb={4}
            p={4}
            px={10}
            bg="#367236"
            borderRadius="md"
            boxShadow="sm"
            w={{base:"136vw", md:"100%"}}
          >
            <Text
              color="white"
              fontSize="4xl"
              fontWeight="sm"
              fontFamily="'Covered By Your Grace', cursive"
            >
              UltiGear!
            </Text>
            <Button
              color="white"
              bg="#DFA258"
              w={{base: "20%", md: "10%"}}
              variant="unstyled"
              onClick={handleAddProduct}
            >
              New Add
            </Button>
          </HStack>

          {/* Table Section */}
          <Table
            variant="striped"
            colorScheme="black"
            borderRadius="md"
            boxShadow="sm"
          >
            <Thead bg="teal.800">
              <Tr>
                <Th color="white" textAlign="center">No</Th>
                <Th color="white">Name</Th>
                <Th color="white" textAlign="center">Category</Th>
                <Th color="white">Description</Th>
                <Th color="white" textAlign="center">Image</Th>
                <Th color="white" textAlign="center">Price</Th>
                <Th color="white" textAlign="center">Size</Th>
                <Th color="white" textAlign="center">Color</Th>
                <Th color="white" textAlign="center">Stock</Th>
                <Th color="white" textAlign="center">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product, index) => (
                <Tr key={product.id}
                  bg={index % 2 === 1 ? "gray.100" : "white"}
                >
                  <Td w={4}>{product.id}</Td>
                  <Td w={10}>{product.name}</Td>
                  <Td w={8} textAlign="center">{product.category}</Td>
                  <Td w={56}>{product.description}</Td>
                  <Td w={48} justifyContent="center" alignItems="center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      boxSize="80px"
                      objectFit="cover"
                      borderRadius="md"
                      margin="auto"
                    />
                  </Td>
                  <Td w={8} textAlign="center">{product.price}</Td>
                  <Td w={4} textAlign="center">{product.size}</Td>
                  <Td w={6} textAlign="center">{product.color}</Td>
                  <Td w={4} textAlign="center">{product.stock}</Td>
                  <Td>
                    <HStack spacing={2}>
                      <Button
                        bg="#367236"
                        color="white"
                        size="sm"
                        variant="unstyled"
                        px={4}
                        onClick={() => handleEdit(product.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        bg="#C81D20"
                        color="white"
                        size="sm"
                        variant="unstyled"
                        px={4}
                        onClick={() => handleDelete(product.id)}
                      >
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
  );
};

export default CrudProduct;

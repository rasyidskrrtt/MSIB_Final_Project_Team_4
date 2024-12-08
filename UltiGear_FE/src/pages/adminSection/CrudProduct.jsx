import React, { useState } from "react";
import Layout from "../Layout";
import SideBarAdmin from "../../components/SideBarAdmin";
import {
  Box,
  Button,
  HStack,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CrudProduct = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sepatu Hiking",
      category: "Tenda", // Category added
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
      <HStack height="100vh" w="100vw" align="stretch">
        <SideBarAdmin />

        <Box
          p={10}
          h="100vh"
          w="100vw"
          alignContent="center"
          overflowY="scroll"
        >
          <HStack
            justifyContent="space-between"
            mb={4}
            p={4}
            px={10}
            bg="#367236"
            borderRadius="md"
            boxShadow="sm"
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
              w="10%"
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
                <Th color="white">Name</Th>
                <Th color="white">Category</Th>
                <Th color="white">Description</Th>
                <Th color="white">Image</Th>
                <Th color="white">Price</Th>
                <Th color="white">Size</Th>
                <Th color="white">Color</Th>
                <Th color="white">Stock</Th>
                <Th color="white">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.name}</Td>
                  <Td>{product.category}</Td>
                  <Td>{product.description}</Td>
                  <Td>
                    <Image
                      src={product.image}
                      alt={product.name}
                      boxSize="40px"
                      objectFit="cover"
                      borderRadius="md"
                    />
                  </Td>
                  <Td>{product.price}</Td>
                  <Td>{product.size}</Td>
                  <Td>{product.color}</Td>
                  <Td>{product.stock}</Td>
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

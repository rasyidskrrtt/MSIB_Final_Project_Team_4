import React, { useState } from "react";
import Layout from "../Layout";
import SideBarAdmin from "../../components/SideBarAdmin";
import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { IconButton } from '@chakra-ui/react';
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [stock, setStock] = useState(1);

  return (
    <Layout>
      <HStack height="100vh" w="100vw" align="stretch">
        {/* Sidebar */}
        <Box>
          <SideBarAdmin />
        </Box>
        {/* Main Section */}
        <Box 
          flex="1"
          align="start"
          p={4}
          px={{base:4, md:16}}
          h="100vh" bg="#F7F3F4" 
          overflow="auto">
          {/* Header Section */}
          <HStack
            justifyContent="space-between"
            mb={4}
            p={4}
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
              px={4}
              variant="unstyled"
              onClick={() => navigate("/crudproduct")}
            >
              Back to Product
            </Button>
          </HStack>
          {/* Form Section */}
          <VStack
            spacing={4}
            align="stretch"
            bg="gray.200"
            p={10}
            borderRadius={10}
          >
            {/* Name Product */}
            <FormControl>
              <HStack>
                <FormLabel w={48}>Name</FormLabel>
                <Input
                  placeholder="masukan nama produk"
                  borderColor="black"
                  bg="white"
                />
              </HStack>
            </FormControl>

            {/* Category */}
            <FormControl>
              <HStack>
                <FormLabel w={48}>Category</FormLabel>
                <Input
                  placeholder="masukan kategori produk"
                  borderColor="black"
                  bg="white"
                />
              </HStack>
            </FormControl>

            {/* Description Product */}
            <FormControl>
              <HStack>
                <FormLabel w={48}>Description</FormLabel>
                <Textarea
                  placeholder="masukan deskripsi produk"
                  borderColor="black"
                  bg="white"
                />
              </HStack>
            </FormControl>

            {/* Image Products */}
            <FormControl>
              <HStack>
                <FormLabel w={48}>Image</FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  borderColor="black"
                  bg="white"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: "50px",
                    padding: "10px",
                  }}
                />
              </HStack>
            </FormControl>

            {/* Product Price */}
            <FormControl>
              <HStack>
                <FormLabel w={48}>Price</FormLabel>
                <Input
                  type="number"
                  placeholder="masukan Harga produk"
                  borderColor="black"
                  bg="white"
                />
              </HStack>
            </FormControl>

            {/* Size */}
            <FormControl>
              <HStack>
                <FormLabel w={{base:32, md:40}}>Size</FormLabel>
                <HStack spacing={4}>
                  {["S", "M", "L", "XL"].map((size) => (
                    <Button
                      key={size}
                      size="sm"
                      variant="outline"
                      borderColor="black"
                    >
                      {size}
                    </Button>
                  ))}
                </HStack>
              </HStack>
            </FormControl>

            {/* Color */}
            <FormControl>
              <HStack>
                <FormLabel w={{base:32, md:40}}>Color</FormLabel>
                <HStack spacing={2}>
                  {["Red", "Green", "Yellow", "Blue"].map((color) => (
                    <Button
                      key={color}
                      size="sm"
                      variant="outline"
                      colorScheme={color.toLowerCase()}
                    >
                      {color}
                    </Button>
                  ))}
                </HStack>
              </HStack>
            </FormControl>

            {/* Product Stock */}
            <FormControl>
              <HStack spacing={4}>
                <FormLabel w={{base:32, md:40}}>Stock</FormLabel>
                <HStack spacing={4}>
                  <Text fontSize="sm" color="gray.500">
                    Quantity:
                  </Text>
                  <HStack spacing={1}>
                    <IconButton
                      icon={<FaMinus />}
                      aria-label="Decrease Quantity"
                      onClick={() => setStock(stock - 1)}
                      isDisabled={stock <= 1}
                      size="lg"
                      color="#28521d"
                      bgColor="gray.200"
                    />
                    <Text fontWeight="bold" px={2} fontSize="lg">
                      {stock}
                    </Text>
                    <IconButton
                      icon={<FaPlus />}
                      aria-label="Increase Quantity"
                      onClick={() => setStock(stock + 1)}
                      size="lg"
                      color="#28521d"
                      bgColor="gray.200"
                    />
                  </HStack>
                </HStack>
              </HStack>
            </FormControl>

            {/* Submit Button */}
            <Button
              color="white"
              bg="#DFA258"
              w={{base: "20%", md: "10%"}}
              variant="unstyled"
              onClick={() => navigate("/crudproduct")}
              size="md"
              alignSelf="flex-end"
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </HStack>
    </Layout>
  );
};

export default AddProduct;

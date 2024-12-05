import React from "react";
import { IoSearch, } from "react-icons/io5";
import {  VStack,  HStack, Text, Input, InputGroup, InputRightAddon, Box, Button, Image, Select,Badge,} from "@chakra-ui/react";
import SideBarSection from "../components/SideBarSection";

const Product = () => {
  return (
    <HStack align="stretch" height="100vh" w="100vw">
      {/* Sidebar Section */}
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
        
          
        {/* Header */}
        <HStack width="100%" justifyContent="space-between">
       
          <Text
            color="#367236"
            fontSize="3xl"
            fontWeight="medium"
            fontFamily="'Covered By Your Grace', cursive"
          >
            UltiGear!
          </Text>
          <InputGroup width="40%" borderColor="black">
            <Input placeholder="Search on Here" />
            <InputRightAddon bgColor="#367236" color="white">
              <IoSearch />
            </InputRightAddon>
    
          </InputGroup>
        </HStack>
        
        {/* Product Section */}
        <Box
        bg="white"
        borderRadius="md"
        boxShadow="sm"
        padding="20px"
        align="flex-start"
        spacing={8}
        width="100%"
          
        >
          <HStack spacing={6}>
            {/* Product Image */}
            <Image
              src="https://i.pinimg.com/474x/1c/4e/11/1c4e1138627951fde209916143318abd.jpg"
              alt="Product Image"
              boxSize="300px"
              borderRadius="md"
            />
           
            {/* Product Details */}
            <VStack align="start" spacing={3}>
            <Text fontWeight="bold" fontSize="lg" color="#367236">
                $40
              </Text>
              <Text fontSize="xl" fontWeight="bold">
                Jaket Himalaya
              </Text>
              <Text fontSize="md" color="gray.600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
             
              <HStack>
                <Text fontSize="sm" color="gray.500">Stock:</Text>
                <Badge  fontSize="sm">
                  120
                </Badge>
              </HStack>
              {/* Options */}
              <HStack spacing={3}>
                <Select placeholder="Size" width="100px">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </Select>
                <Select placeholder="Color" width="100px">
                  <option value="blue">Blue</option>
                  <option value="red">Red</option>
                  <option value="yellow">Yellow</option>
                </Select>
              </HStack>

              {/* Actions */}
              <HStack spacing={3}>
                <Button colorScheme="teal">Add to Cart</Button>
                <Button colorScheme="green">Buy</Button>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </HStack>
  );
};

export default Product;

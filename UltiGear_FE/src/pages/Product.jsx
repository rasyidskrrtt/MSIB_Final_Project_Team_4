import React from "react";
import {
  VStack,
  HStack,
  Text,
  Button,
  Image,
  Select,
  Badge,
  Divider,
  Flex,
} from "@chakra-ui/react";
import SideBarSection from "../components/SideBarSection";

const Product = () => {
  return (
    <HStack align="stretch" height="100vh" w="100vw">
      {/* Sidebar Section */}
      <SideBarSection />

      {/* Main Section */}
      <Flex
        flex="1"
        align="center"
        justify="center"
        padding="20px"
        bg="white"
        height="100vh"
      >
        <VStack align="start" width="80%" spacing={6}>
          {/* Header */}
          <Text
            color="green.700"
            fontSize="3xl"
            fontWeight="medium"
            fontFamily="'Covered By Your Grace', cursive"
          >
            UltiGear!
          </Text>

          <Divider borderColor="gray.300" />

          {/* Product Section */}
          <HStack spacing={10} align="start" width="100%">
            {/* Product Image */}
            <Image
              src="https://i.pinimg.com/474x/1c/4e/11/1c4e1138627951fde209916143318abd.jpg"
              alt="Product Image"
              boxSize="300px"
              borderRadius="md"
              boxShadow="md"
            />

            {/* Product Details */}
            <VStack align="start" spacing={4} width="100%">
              <Text fontWeight="bold" fontSize="2xl" color="#367236">
                $40
              </Text>
              <Text fontSize="lg" fontWeight="semibold">
                Jaket Himalaya
              </Text>
              <Text fontSize="md" color="gray.600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>

              <Divider borderColor="gray.300" />

              {/* Stock Info */}
              <HStack>
                <Text fontSize="sm" color="gray.500">
                  Stock:
                </Text>
                <Badge fontSize="sm" colorScheme="green">
                  120
                </Badge>
              </HStack>

              {/* Options */}
              <HStack spacing={4}>
                <Select placeholder="Size" width="100px">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </Select>
                <HStack spacing={2}>
                  <Text fontSize="sm" color="gray.500">
                    Color:
                  </Text>
                  <Badge bg="blue.500" color="white">
                    Blue
                  </Badge>
                  <Badge bg="red.500" color="white">
                    Red
                  </Badge>
                  <Badge bg="yellow.500" color="white">
                    Yellow
                  </Badge>
                </HStack>
              </HStack>

              {/* Quantity */}
              <HStack spacing={4}>
                <Text fontSize="sm" color="gray.500">
                  Quantity:
                </Text>
                <Select placeholder="0" width="60px">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Select>
              </HStack>

              <Divider borderColor="gray.300" />

              {/* Actions */}
              <HStack spacing={4} width="100%">
                <Button
                  backgroundColor="white"
                  color="green"
                  flex="1"
                  variant="outline"
                  borderColor="#28521d"
                >
                  Add to Cart
                </Button>
                <Button
                  backgroundColor="#367236"
                  color="white"
                  _hover={{
                    backgroundColor: "#28521d", 
                  }}
                  flex="1"
                >
                  Buy
                </Button>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </Flex>
    </HStack>
  );
};

export default Product;

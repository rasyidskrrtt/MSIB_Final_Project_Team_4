import React, { useState } from "react";
import {
  VStack,
  HStack,
  Text,
  Button,
  Image,
  Badge,
  Divider,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import SideBarSection from "../components/SideBarSection";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Add logic to add the product to the cart (you can use state management here)
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <HStack align="stretch" height="100vh" w="100vw">
      <SideBarSection />

      <Flex flex="1" align="center" justify="center" padding="20px" bg="white">
        <VStack align="start" width="80%" spacing={6}>
          <HStack width="100%" justify="space-between">
            <IconButton
              icon={<FaArrowLeft />}
              aria-label="Back to Home"
              bg="#367236"
              color="white"
              _hover={{ backgroundColor: "#28521d" }}
              onClick={() => navigate("/home")}
            />
            <Text
              color="#367236"
              fontSize="3xl"
              fontWeight="medium"
              fontFamily="'Covered By Your Grace', cursive"
            >
              UltiGear!
            </Text>
          </HStack>

          <Divider borderColor="gray.300" />

          <HStack spacing={10} align="start" width="100%">
            <Image
              src="https://i.pinimg.com/474x/1c/4e/11/1c4e1138627951fde209916143318abd.jpg"
              alt="Product Image"
              boxSize="300px"
              borderRadius="md"
              boxShadow="md"
            />

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

              <HStack>
                <Text fontSize="sm" color="gray.500">
                  Stock:
                </Text>
                <Badge fontSize="sm" colorScheme="green">
                  120
                </Badge>
              </HStack>

              <HStack spacing={4}>
                <Text fontSize="sm" color="gray.500">
                  Size:
                </Text>
                <Text fontWeight="bold">L</Text>

                <Text fontSize="sm" color="gray.500">
                  Color:
                </Text>
                <Badge bg="#40415f" color="white" p={2} borderRadius="md">
                  Navy
                </Badge>
              </HStack>

              <HStack spacing={4}>
                <Text fontSize="sm" color="gray.500">
                  Quantity:
                </Text>
                <HStack spacing={1}>
                  <IconButton
                    icon={<FaMinus />}
                    aria-label="Decrease Quantity"
                    onClick={handleDecrement}
                    isDisabled={quantity <= 1}
                    size="lg"
                    color="#28521d"
                    bgColor="white"
                  />
                  <Text fontWeight="bold" px={2} fontSize="lg">
                    {quantity}
                  </Text>
                  <IconButton
                    icon={<FaPlus />}
                    onClick={handleIncrement}
                    size="lg"
                    color="#28521d"
                    bgColor="white"
                  />
                </HStack>
              </HStack>

              <Divider borderColor="gray.300" />

              <HStack spacing={4} width="100%">
                <Button
                  backgroundColor="white"
                  color="green"
                  flex="1"
                  variant="outline"
                  borderColor="#28521d"
                  _hover={{ bg: "#e8f5e9" }}
                  onClick={handleAddToCart} 
                >
                  Add to Cart
                </Button>
                <Button
                  backgroundColor="#367236"
                  color="white"
                  flex="1"
                  _hover={{ backgroundColor: "#28521d" }}
                  onClick={() => navigate("/paymentMethod")}
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
import React from "react";
import { 
  HStack, VStack, Text, InputGroup, Input, InputRightAddon, Box 
} from "@chakra-ui/react";
import SideBarSection from "../components/SideBarSection";

const NotFound = () => {
  return (
    <HStack align="stretch" height="100vh" w="100vw" spacing="0">
      {/* Sidebar */}
      <SideBarSection />

      {/* Main Content */}
      <VStack
        bg="gray.50"
        flex="1"
        align="center"
        p="20px"
        spacing="8"
        overflow="auto"
        height="100vh"
      >
        {/* Header */}
        <HStack width="100%" justifyContent="space-between" p="4">
          <Text
            color="green.700"
            fontSize="3xl"
            fontWeight="medium"
            fontFamily="'Covered By Your Grace', cursive"
          >
            UltiGear!
          </Text>
          <InputGroup width="40%" borderColor="gray.400">
            <Input placeholder="Search products..." value="Martabak manis" />
            <InputRightAddon bgColor="green.600" color="white" cursor="pointer">
              Search
            </InputRightAddon>
          </InputGroup>
        </HStack>

        {/* Product Not Found Section */}
        <VStack spacing="4" flex="1" justify="center" align="center">
          <Box w="90%" h="200px" bg="gray.300" borderRadius="md" p="20%"></Box>
          <VStack spacing="2" textAlign="center">
            <Text fontSize="xl" fontWeight="bold">
              Sorry, product not found...
            </Text>
            <Text fontSize="md" color="gray.600">
              Try using another keyword
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default NotFound;

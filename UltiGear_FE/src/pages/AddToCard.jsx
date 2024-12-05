import React, { useState } from 'react';
import { useNumberInput } from '@chakra-ui/react'; // Keep this
import Layout from './Layout';
import { Box, HStack,  Image,  Input,  InputGroup,  InputRightAddon,  Text,  VStack,  Button,} from '@chakra-ui/react'; // Remove `useNumberInput` from this import
import { IoSearch } from "react-icons/io5";
import SideBarSection from '../components/SideBarSection';
import { FiPlusCircle } from "react-icons/fi"

const AddToCard = () => {
    const [selectedSize, setSelectedSize] = useState("L");
    const [selectedColor, setSelectedColor] = useState("Blue");
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: 2,
        min: 1,
      });
  
    const increment = getIncrementButtonProps();
    const decrement = getDecrementButtonProps();
    const input = getInputProps();

  return (
    <Layout>
        <HStack align={"stretch"} height={"100vh"} w={"100vw"}>
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
              <HStack width="100%" justifyContent="space-between ">
                <Text color={"#367236"} fontSize="3xl" fontWeight="medium" fontFamily="'Covered By Your Grace', cursive">UltiGear!</Text>
                <InputGroup width={"40%"} borderColor={"black"}>
                  <Input placeholder='Search on Here'/>
                  <InputRightAddon bgColor={"#367236"} color={"white"}> <IoSearch /> </InputRightAddon>
                </InputGroup>
              </HStack>

              {/* Banner */}
              <Box bg="#367236"
                width="100%"
                color="white"
                padding="50px"
                borderRadius="lg"
              > 
                <HStack justify="center" align="center" h="100%" w="100%" spacing="16">
                  <Text fontSize="8xl" fontWeight="medium" fontStyle="italic"
                    fontFamily="'Covered By Your Grace', cursive" lineHeight="1" 
                  >UltiGear!</Text>
                  <Box orientation="vertical" borderColor="white" height="100%" borderWidth="3px" borderRadius="5px" />
                  <Text fontSize="3xl" fontFamily="'Poppins', cursive" >Your Adventure Partner Stats Here</Text>
                </HStack>
              </Box>


              {/* Product Card */}
              <Box display="grid"
                gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
                gap={2}
                width="100%">
                {Array(10)
                .fill('')
                .map((_, idx) => (
                <Box
                  key={idx} position="relative">
                  <Image src="" alt='Tenda Biru' boxSize="150px" bgColor={"#D9D9D9"}
                    objectFit="cover" />
                      
                    <VStack bg={"#F7F3F4"} align={"start"} spacing={"-1"} mb={"6"}>
                      <HStack justify={"space-between"} w="95%" mt={"2"}>
                      <Text fontSize="revert" fontWeight="medium">Tenda Biru</Text>
                      <FiPlusCircle color="#367236" size="20px"ali />
                      </HStack>
                      <Text color={"#367236"} fontWeight={"bold"} fontSize="sm"> $40 </Text>
                    </VStack>
                </Box>
                ))}
              </Box>

              <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      textAlign="center"
      boxShadow="lg"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Jaket Himalaya
      </Text>

      {/* Size Options */}
      <VStack align="start" mb={4}>
        <Text fontSize="sm" fontWeight="medium">
          Size:
        </Text>
        <HStack spacing={2}>
          {["S", "M", "L", "XL"].map((size) => (
            <Button
              key={size}
              size="sm"
              variant={selectedSize === size ? "solid" : "outline"}
              colorScheme={selectedSize === size ? "orange" : "gray"}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </Button>
          ))}
        </HStack>
      </VStack>

      {/* Color Options */}
      <VStack align="start" mb={4}>
        <Text fontSize="sm" fontWeight="medium">
          Color:
        </Text>
        <HStack spacing={2}>
          {["Blue", "Red", "Yellow"].map((color) => (
            <Button
              key={color}
              size="sm"
              variant={selectedColor === color ? "solid" : "outline"}
              bg={color.toLowerCase()}
              color={selectedColor === color ? "white" : "black"}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </Button>
          ))}
        </HStack>
      </VStack>

      {/* Quantity */}
      <VStack align="start" mb={4}>
        <Text fontSize="sm" fontWeight="medium">
          Quantity:
        </Text>
        <HStack>
          <Button {...decrement} size="sm" colorScheme="blue">
            -
          </Button>
          <Input {...input} size="sm" w="50px" textAlign="center" />
          <Button {...increment} size="sm" colorScheme="blue">
            +
          </Button>
        </HStack>
      </VStack>

      {/* Add to Cart Button */}
      <Button
        colorScheme="green"
        size="md"
        width="full"
        onClick={() => alert("Added to Cart")}
      >
        Add to Cart
      </Button>
    </Box>
            </VStack>
        </HStack>
    </Layout>
  );
};

export default AddToCard;
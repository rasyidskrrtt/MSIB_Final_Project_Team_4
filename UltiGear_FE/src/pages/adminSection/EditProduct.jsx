import React, { useState } from 'react'
import Layout from '../Layout'
import SideBarAdmin from '../../components/SideBarAdmin'
import { Box, Button, Heading, HStack, Image, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Text, VStack, FormControl, FormLabel, Input, Textarea, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
  const navigate = useNavigate();
  const [stock, setStock] = useState(15);

  return (
    <Layout>
      <HStack height="100vh" w="100vw" align="stretch">
        {/* Sidebar */}
        <Box >
          <SideBarAdmin />
        </Box>
        {/* Main Section */}
        <Box p={5} px={20} h="100vh" w="100vw" bg="#F7F3F4" overflow="auto">
          {/* Header Section */}
          <HStack justifyContent="space-between" mb={4} p={4} px={10}
            bg="#367236" borderRadius="md" boxShadow="sm">
            <Text color="white" fontSize="4xl" fontWeight="sm" fontFamily="'Covered By Your Grace', cursive">
              UltiGear!</Text>
            <Button color="white" bg="#DFA258" px={4}
              variant="unstyled" onClick={() => navigate("/crudproduct")}>Back to Product</Button>
          </HStack>
          {/* Form Section */}
          <VStack spacing={4} align="stretch" bg="gray.200" p={10} borderRadius={10}>
            <FormControl>
              <HStack>
                <FormLabel w={48}>Name Product</FormLabel>
                <Input placeholder="masukan nama produk" borderColor="black" />
              </HStack>
            </FormControl>

            <FormControl>
              <HStack>
                <FormLabel w={48}>Description Product</FormLabel>
                <Textarea placeholder="masukan deskripsi produk" borderColor="black" />
              </HStack>
            </FormControl>

            <FormControl>
              <HStack>
                <FormLabel w={48}>Image Products</FormLabel>
                <Input type="file" accept="image/*" borderColor="black"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: "50px",
                    padding: "10px",
                  }} />
              </HStack>
            </FormControl>

            <FormControl>
              <HStack>
                <FormLabel w={48}>Product Price</FormLabel>
                <Input type="number" placeholder="masukan Harga produk" borderColor="black" />
              </HStack>
            </FormControl>

            <FormControl>
              <HStack>
                <FormLabel w={40}>Size</FormLabel>
                <HStack spacing={4}>
                  {["S", "M", "L", "XL"].map((size) => (
                    <Button key={size} size="sm" variant="outline" borderColor="black">
                      {size}
                    </Button>
                  ))}
                </HStack>
              </HStack>
            </FormControl>

            <FormControl>
              <HStack>
                <FormLabel w={40}>Color</FormLabel>
                <HStack spacing={4}>
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

            <FormControl>
              <HStack>
                <FormLabel w={40}>Product Stock</FormLabel>
                <HStack>
                  <Button bg="green.600" color="white" variant="unstyled" onClick={() => setStock(stock - 1)}>-</Button>
                  <NumberInput borderColor="black" w="20"
                    value={stock}
                    onChange={(valueString) => setStock(parseInt(valueString, 10))}
                    min={0}
                  >
                    <NumberInputField />
                  </NumberInput>
                  <Button bg="green.600" color="white" variant="unstyled" onClick={() => setStock(stock + 1)}>+</Button>
                </HStack>
              </HStack>
            </FormControl>

            <Button color="white" bg="#DFA258" w="10%" variant="unstyled"
              onClick={() => navigate("/crudproduct")} size="md" alignSelf="flex-end">
              Submit
            </Button>
          </VStack>
        </Box>
      </HStack>
    </Layout>
  )
}

export default EditProduct
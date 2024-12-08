import React, { useState } from "react";
import Layout from "./Layout";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import SideBarSection from "../components/SideBarSection";
import { FiPlusCircle } from "react-icons/fi";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]); 

  const products = [
    {
      name: "Jaket Himalaya",
      price: 400000, // Harga dalam IDR
      image: "https://via.placeholder.com/200x150?text=Jaket+Himalaya",
    },
    {
      name: "Tenda Gunung",
      price: 700000, // Harga dalam IDR
      image: "https://via.placeholder.com/200x150?text=Tenda+Gunung",
    },
    {
      name: "Sepatu Pendakian",
      price: 600000, // Harga dalam IDR
      image: "https://via.placeholder.com/200x150?text=Sepatu+Pendakian",
    },
    {
      name: "Senter Outdoor",
      price: 150000, // Harga dalam IDR
      image: "https://via.placeholder.com/200x150?text=Senter+Outdoor",
    },
    {
      name: "Tas Ransel Hiking",
      price: 500000, // Harga dalam IDR
      image: "https://via.placeholder.com/200x150?text=Tas+Ransel+Hiking",
    },
    {
      name: "Jakarta Jacket",
      price: 450000, // Harga dalam IDR
      image: "https://via.placeholder.com/200x150?text=Jakarta+Jacket",
    },
    {
      name: "Pelindung Hujan Ponco",
      price: 250000, // Harga dalam IDR
      image: "https://via.placeholder.com/200x150?text=Pelindung+Hujan+Ponco",
    },
    {
      name: "Sleeping Bag Travel",
      price: 800000, // Harga dalam IDR
      image: "https://via.placeholder.com/200x150?text=Sleeping+Bag+Travel",
    },
    {
      name: "Matras Tidur",
      price: 300000, // Harga dalam IDR
      image: "https://via.placeholder.com/200x150?text=Matras+Tidur",
    },
    {
      name: "Kompas Navigation",
      price: 200000, // Harga dalam IDR
      image: "https://via.placeholder.com/200x150?text=Kompas+Navigation",
    },
  ];  

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); 
    navigate("/product"); 
  };

  const handleProductClick = () => {
    // navigate("/Product"); 
  };

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
          <Search />

          {/* Banner */}
          <Box
            bg="#367236"
            width="100%"
            color="white"
            padding="50px"
            borderRadius="lg"
          >
            <HStack
              justify="center"
              align="center"
              h="100%"
              w="100%"
              spacing={{ base: 8, md: 16 }}
            >
              <Text
                fontSize={{ base: "4xl", md: "8xl" }}
                fontWeight="medium"
                fontStyle="italic"
                fontFamily="'Covered By Your Grace', cursive"
                lineHeight="1"
              >
                UltiGear!
              </Text>
              <Box
                orientation="vertical"
                borderColor="white"
                height="100%"
                borderWidth={{ base: "2px", md: "3px" }}
                borderRadius="5px"
              />
              <Text
                fontSize={{ base: "xl", md: "3xl" }}
                fontFamily="'Poppins', cursive"
              >
                Your Adventure Partner Stats Here
              </Text>
            </HStack>
          </Box>

          {/* Product Card */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(5, 1fr)" 
            gap={6} 
            width="100%"
          >
            {products.map((product, idx) => (
              <Box
                key={idx}
                position="relative"
                boxShadow="md"
                borderRadius="lg"
                bg="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                overflow="hidden"
              >
                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width="100%"
                  height="150px"
                  objectFit="cover"
                  bgColor="gray.200"
                  cursor="pointer"
                  onClick={handleProductClick} 
                />

                {/* Product Details */}
                <VStack align="start" spacing={1} width="100%" p={3} bg="white">
                  <Text fontSize="sm" fontWeight="medium">
                    {product.name}
                  </Text>
                  <Text color="green.600" fontWeight="bold" fontSize="md">
                    Rp {product.price.toLocaleString()} {/* Menampilkan harga dalam format IDR */}
                  </Text>
                </VStack>

                {/* Add to Cart Icon */}
                <Box
                  as="button"
                  position="absolute"
                  bottom="10px"
                  right="10px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="#367236"
                  color="white"
                  width="30px"
                  height="30px"
                  borderRadius="full"
                  cursor="pointer"
                  boxShadow="lg"
                  transition="all 0.3s ease"
                  _hover={{
                    bg: "green.700",
                    transform: "scale(1.1)",
                    boxShadow: "xl",
                  }}
                  onClick={() => handleAddToCart(product)} // Tambahkan ke keranjang dan arahkan ke /cart
                >
                  <FiPlusCircle size="24px" />
                </Box>
              </Box>
            ))}
          </Box>
        </VStack>
      </HStack>
    </Layout>
  );
};

export default HomePage;

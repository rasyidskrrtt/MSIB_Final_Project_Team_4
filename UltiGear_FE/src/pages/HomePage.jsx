import React from 'react'
import Layout from './Layout'
import { Box, HStack, Image, Input, InputGroup, InputRightAddon, Text, VStack } from '@chakra-ui/react'
import { IoSearch } from "react-icons/io5";
import SideBarSection from '../components/SideBarSection';
import { FiPlusCircle } from "react-icons/fi";

const HomePage = () => {
  
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
            </VStack>
        </HStack>
    </Layout>
  );
};

export default HomePage
import React from 'react'
import { Avatar, Box, Button, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { IoLogOutOutline } from "react-icons/io5";
import { AiFillHome, AiOutlineFileSearch } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { MdEdit } from "react-icons/md"
import { useNavigate } from 'react-router-dom';

const SideBarSection = () => {

    const name = 'Windows Batubara'
    const navigate = useNavigate();

  return (
    <HStack>
        {/* Sidebar Section */}
        <Box bg="#367236"
              color="white"
              width="110%"
              h="100vh"
              top="0"
              position="sticky" 
              padding="20px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center">
            <VStack align="center" width="100%">
                <Box textAlign="center">
                  <Avatar size={"xl"} mb={"4"}/>
                  <Text fontSize={"lg"} mb={"8"}>Welcome Back! <br /><Text as="span" fontWeight={"bold"}>{name}</Text></Text>
                </Box>
                <VStack align={"start"} spacing={"2"}>
                  <Button 
                    leftIcon={<AiFillHome size="24px" />}
                    fontSize="lg"
                    justifyContent="flex-start"
                    bg="#367236"
                    color="#DFA258"
                    width="100%"
                    _hover={{ color: "#DFA258" }}
                    _active={{ bg: "#367236" }}
                    position="relative" // Untuk tanda garis vertikal
                    pl="4" // Menambah padding kiri agar ada ruang untuk garis
                    _before={{
                      content: '""',
                      position: "absolute",
                      height: "40%",
                      width: "4px",
                      bg: "#DFA258",
                      left: "0", // Menempatkan garis di paling kiri
                      borderRadius: "full",
                    }}
                  > Home</Button>
                  <Button 
                    leftIcon={<IoMdCart size="24px"/>}
                    fontSize="lg"
                    justifyContent="flex-start"
                    bg="#367236"
                    color="white"
                    width="100%"
                    _hover={{ color: "#DFA258" }}
                    _active={{ bg: "#367236" }}
                    position="relative" // Untuk tanda garis vertikal
                    pl="4" 
                  > Cart</Button>
                  <Button
                    leftIcon={<AiOutlineFileSearch size="24px" />}
                    fontSize="lg"
                    justifyContent="flex-start"
                    bg="#367236"
                    color="white"
                    width="100%"
                    _hover={{ color: "#DFA258" }}
                    position="relative" // Untuk tanda garis vertikal
                    pl="4" mb={"3"}
                  > My Orders</Button>
                  <Divider borderColor="whiteAlpha.900" />
                  <Button 
                    leftIcon={<MdEdit size="24px" />}
                    fontSize="lg"
                    justifyContent="flex-start"
                    bg="#367236"
                    color="white"
                    width="100%"
                    _hover={{ color: "#DFA258" }}
                    _active={{ bg: "#367236" }}
                    position="relative" // Untuk tanda garis vertikal
                    pl="4" mt={"3"}
                  > Edit Profile</Button>
                </VStack>
                <Button color={"white"} bg={"#DFA258"} mt={"16"} _hover={{ bg: "yellow.700" }}
                    onClick={() => navigate('/')}
                >  <IoLogOutOutline /> Logout</Button>
              </VStack>
            </Box>
        </HStack>
  )
}

export default SideBarSection
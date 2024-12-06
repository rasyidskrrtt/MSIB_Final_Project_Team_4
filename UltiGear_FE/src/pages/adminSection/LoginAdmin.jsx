import React, { useState } from 'react'
import Layout from '../Layout'
import { Box, Button, Input, Text, VStack, HStack, InputGroup, InputRightElement, Icon, useToast } from '@chakra-ui/react'
import { FaCheck } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const LoginAdmin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const toast = useToast(); 
    const navigate = useNavigate()

    // / Regex untuk validasi email
    // const isEmailValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // kaalau ga pake alert, fungsi ini hapus aja
    const handleLogin = () => {
        // Validasi jika email atau password kosong
    if (!email || !password) {
        toast({
          title: "Input Missing",
          description: "Please fill out all fields before logging in.",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }
  
      // Validasi email
      if (!validateEmail(email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }
  
      // Jika validasi berhasil
      toast({
        title: "Login Successful",
        description: "Redirecting to dashboard...",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
  
      navigate("/dashboard");
    };

  return (
    <Layout>
        <HStack w={"100vw"} >
            {/* Side Section */}
            <Box w={"30%"} bg={"#367236"} h={"100vh"} display="flex" alignItems="center" justifyContent="center">
            <Text color={"white"} fontSize="7xl" fontWeight="medium" fontFamily="'Covered By Your Grace', cursive">UltiGear!</Text>
            </Box>

            {/* Form Section */}
            <VStack w={{ lg: "35vw", base: "70vw" }} p={"12"} mx={"auto"}>
                    <Text fontSize={"3xl"} fontWeight={"bold"}>Welcome to UltiGear!</Text>
                
                <Box w={"100%"} mt={"4"}>
                    <Text textAlign={"left"} mb={"1"}>Email</Text>
                    <InputGroup>
                        <Input placeholder="Enter your email" borderColor={"black"} 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* {isEmailValid && ( */}
                        {validateEmail(email) && (
                            <InputRightElement>
                                <Icon as={FaCheck} color="green.500" />
                            </InputRightElement>
                            )}
                    </InputGroup>  
                </Box>

                <Box w={"100%"} mt={"4"}>
                    <Text textAlign={"left"} mb={"1"}>Password</Text>
                    <InputGroup>
                        <Input  type={passwordVisible ? 'text' : 'password'} placeholder="Enter your password" borderColor={"black"}
                            value={password} onChange={(e) => setPassword(e.target.value)} 
                        />
                        <InputRightElement>
                            <Button size="sm"
                                onClick={() => setPasswordVisible((prev) => !prev)}
                                bg="transparent"
                                _hover={{ bg: 'transparent' }}
                            >
                                {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash /> }
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>

                <Button bgColor={"#367236"} mt={"4"} color={"#F7F3F4"} w={"24"} _hover={{ bg: '#285b28' }}
                    onClick={handleLogin} 
                    // onClick={() => navigate('/home')}
                    >
                    Login
                </Button>
            </VStack >
        </HStack>
    </Layout>
  )
}

export default LoginAdmin
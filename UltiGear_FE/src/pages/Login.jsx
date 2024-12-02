import React, { useState } from 'react'
import Layout from './Layout'
import { Box, Button, Input, Text, VStack, HStack, InputGroup, InputRightElement, Icon, Alert, AlertIcon } from '@chakra-ui/react'
import { FaCheck } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true); // State untuk validasi email
    const navigate = useNavigate()

    // / Regex untuk validasi email
    // const isEmailValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // kaalau ga pake alert, fungsi ini hapus aja
    const handleLogin = () => {
        if (validateEmail(email)) {
          setIsEmailValid(true); // Reset validasi jika benar
          navigate('/home'); // Lanjutkan navigasi jika valid
        } else {
          setIsEmailValid(false); // Tampilkan alert jika email tidak valid
        }
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
                <HStack justify="space-between" w="100%">
                    <Text fontSize={"3xl"} fontWeight={"bold"}>Welcome to UltiGear!</Text>
                    <Button bg={"F7F3F4"} color={"#367236"} variant={"link"} fontWeight={"bold"}
                        _hover={{ color: 'teal.600' }}
                        onClick={() => navigate('/regist')}
                    >Sign Up</Button>
                </HStack>

                {/* Alert jika email tidak valid */}
                {/* kalau ga pake alert ini dihapus aja */}
                    {!isEmailValid && (
                    <Alert status="error" w="100%">
                        <AlertIcon />
                        Email is not valid. Please enter a valid email address.
                    </Alert>
                    )}
                
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
                        <Input  type={passwordVisible ? 'text' : 'password'} placeholder="Enter your password" borderColor={"black"}/>
                        <InputRightElement>
                            <Button size="sm"
                                onClick={() => setPasswordVisible((prev) => !prev)}
                                bg="transparent"
                                _hover={{ bg: 'transparent' }}
                            >
                                {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye /> }
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

export default Login
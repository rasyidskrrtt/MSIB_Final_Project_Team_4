import React, { useState } from 'react'
import Layout from './Layout'
import { Box, Button, Input, Text, VStack, HStack, InputGroup, InputRightElement, Icon } from '@chakra-ui/react'
import { FaCheck } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'; // Import SweetAlert2

const Regist = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    // Regex for email validation
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSignUp = () => {
        if (!username) {
            Swal.fire({
                title: 'Invalid Username',
                text: 'Username is required.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        if (username.length < 4) {
            Swal.fire({
                title: 'Invalid Username',
                text: 'Username must be at least 4 characters long.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        if (!validateEmail(email)) {
            Swal.fire({
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        if (!password) {
            Swal.fire({
                title: 'Invalid Password',
                text: 'Password is required.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                title: 'Password Mismatch',
                text: 'Password and Confirm Password must match.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        if (!confirmPassword) {
            Swal.fire({
                title: 'Invalid Confirm Password',
                text: 'Please confirm your password.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }
    
        // Proceed with registration logic
        Swal.fire({
            title: 'Account Created',
            text: 'Your account has been successfully created.',
            icon: 'success',
            confirmButtonText: 'Okay'
        }).then(() => {
            navigate('/'); // Navigate to the login page after successful registration
        });
    };

    return (
        <Layout>
            <HStack w={"100vw"} h={"100%"}>
                {/* Side Section */}
                <Box w={"30%"} bg={"#367236"} h={"100%"} display="flex" alignItems="center" justifyContent="center">
                    <Text color={"white"} fontSize="7xl" fontWeight="medium" fontFamily="'Covered By Your Grace', cursive">UltiGear!</Text>
                </Box>

                {/* Form Section */}
                <VStack w={{ lg: "35vw", base: "70vw" }} p={"12"} mx={"auto"}>
                    <HStack justify="space-between" w="100%">
                        <Text fontSize={"3xl"} fontWeight={"bold"}>Create Account</Text>
                        <Button bg={"F7F3F4"} color={"#367236"} variant={"link"} fontWeight={"bold"}
                            _hover={{ color: 'teal.600' }}
                            onClick={() => navigate('/')}
                        >Login</Button>
                    </HStack>
                    
                    <Box w={"100%"} mt={"4"}>
                        <Text textAlign={"left"} mb={"1"}>Username</Text>
                        <InputGroup>
                            <Input placeholder="Enter your Username" borderColor={"black"} 
                                value={username} onChange={(e) => setUsername(e.target.value)}
                            />
                            {username.length >= 4 && (
                                <InputRightElement>
                                    <Icon as={FaCheck} color="green.500" />
                                </InputRightElement>
                            )}
                        </InputGroup>   
                    </Box>

                    <Box w={"100%"} mt={"4"}>
                        <Text textAlign={"left"} mb={"1"}>Email</Text>
                        <InputGroup>
                            <Input placeholder="Enter your email" borderColor={"black"} 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
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
                                    {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye /> }
                                </Button>
                            </InputRightElement>
                        </InputGroup>    
                    </Box>

                    <Box w={"100%"} mt={"4"}>
                        <Text textAlign={"left"} mb={"1"}>Confirm Password</Text>
                        <InputGroup>
                            <Input  type={passwordVisible ? 'text' : 'password'} placeholder="Enter your password again" borderColor={"black"}
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            />
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
                        onClick={handleSignUp}>
                        Sign Up
                    </Button>
                </VStack >
            </HStack>
        </Layout>
    );
}

export default Regist;

import { Box, Button, FormControl, FormLabel, Input, HStack, VStack,Text, InputGroup,InputRightAddon, Avatar, Heading, Flex, GridItem, IconButton,} from '@chakra-ui/react';
import React, { useState } from 'react';
import SideBarSection from '../components/SideBarSection';
import Layout from './Layout';
import { FaChevronLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const [profile, setProfile] = useState({
        name: 'Windows Batubara',
        email: 'windowsbatubara@gmail.com',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!profile.name || !profile.email || profile.password.length < 8) {
        alert('Pastikan semua kolom telah diisi dengan benar!');
        return;
        }
        console.log('Profile updated:', profile);
        alert('Profil berhasil diperbarui!');
    };
    const navigate = useNavigate()

    return (
        <Layout>
        <HStack align="stretch" height="100vh" w="100vw">
            <SideBarSection />
            {/* Main Section */}
            <VStack
                flex="1"
                align="center"
                justify="center"
                p="20px"
                spacing="8"
                overflow="auto"
                height="100vh"
            >
                <VStack w="100%" px={10}>
                    <Box as="form" w="100%" maxW="500px" p={6} bg="white" borderRadius="lg" 
                        boxShadow="md" onSubmit={handleSubmit}
                        position="relative"  
                    >   
                        <HStack w="100%" mb={6}>
                           <IconButton variant="unstyled"
                            onClick={() => {
                                navigate('/home')
                            }}>
                                <FaChevronLeft />
                            </IconButton>
                            <Text fontSize="2xl" fontWeight="bold" align="start" ml={-4}>
                            Edit Profile </Text>
                        </HStack>

                        <Flex justify="center" align="center" position="relative" top="2" left="1">
                            <Avatar size="2xl" mb="6" src="" />
                        </Flex>

                        <VStack spacing="4" align="stretch">
                            {/* Name Field */}
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    bg="white"
                                    borderColor="gray.300"
                                />
                            </FormControl>

                            {/* Email Field */}
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    bg="white"
                                    borderColor="gray.300"
                                />
                            </FormControl>

                            {/* Password Field */}
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    name="password"
                                    value={profile.password}
                                    onChange={handleChange}
                                    placeholder="Minimum 8 characters"
                                    bg="white"
                                    borderColor="gray.300"
                                />
                                <Text fontSize="sm" color="gray.500" mt="1">
                                Minimum 8 characters </Text>
                            </FormControl>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                bg="#DFA258"
                                color="white"
                                w="100%"
                                _hover={{ bg: 'yellow.700' }}
                                mt={4}
                            > Submit </Button>
                        </VStack> 
                    </Box> 
                </VStack>
            </VStack>
        </HStack>
        </Layout>
    );
};

export default EditProfile;
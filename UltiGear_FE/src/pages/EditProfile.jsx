import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    HStack,
    VStack,
    Text,
    Avatar,
    Flex,
    IconButton,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import SideBarSection from "../components/SideBarSection";
  import Layout from "./Layout";
  import { FaChevronLeft } from "react-icons/fa6";
  import { useNavigate } from "react-router-dom";
  import Swal from "sweetalert2"; // Import SweetAlert
  
  const EditProfile = () => {
    const [profile, setProfile] = useState({
      name: "Windows Batubara",
      email: "windowsbatubara@gmail.com",
      password: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProfile({ ...profile, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!profile.name || !profile.email || profile.password.length < 8) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please ensure all fields are filled out correctly, and password is at least 8 characters.",
          confirmButtonColor: "#DFA258", // Customize the button color
        });
        return;
      }
  
      console.log("Profile updated:", profile);
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been successfully updated.",
        confirmButtonColor: "#DFA258", // Customize the button color
      }).then(() => {
        navigate("/home"); // Navigate to /home after successful update
      });
    };
  
    const navigate = useNavigate();
  
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
            <VStack w="100%" px={8}>
              <Box
                as="form"
                w="100%"
                maxW="450px"
                p={5}
                bg="white"
                borderRadius="lg"
                boxShadow="md"
                onSubmit={handleSubmit}
                position="relative"
              >
                <HStack w="100%" mb={5}>
                  <IconButton
                    variant="unstyled"
                    size="md"
                    onClick={() => navigate("/home")}
                  >
                    <FaChevronLeft />
                  </IconButton>
                  <Text fontSize="xl" fontWeight="bold" align="start" ml={-3}>
                    Edit Profile
                  </Text>
                </HStack>
  
                <Flex justify="center" align="center" position="relative">
                  <Avatar size="xl" mb={5} src="" />
                </Flex>
  
                <VStack spacing={4} align="stretch">
                  {/* Name Field */}
                  <FormControl>
                    <FormLabel fontSize="sm">Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      size="md"
                      bg="white"
                      borderColor="gray.300"
                    />
                  </FormControl>
  
                  {/* Email Field */}
                  <FormControl>
                    <FormLabel fontSize="sm">Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      size="md"
                      bg="white"
                      borderColor="gray.300"
                    />
                  </FormControl>
  
                  {/* Password Field */}
                  <FormControl>
                    <FormLabel fontSize="sm">Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      value={profile.password}
                      onChange={handleChange}
                      placeholder="Minimum 8 characters"
                      size="md"
                      bg="white"
                      borderColor="gray.300"
                    />
                    <Text fontSize="xs" color="gray.500" mt={1}>
                      Minimum 8 characters
                    </Text>
                  </FormControl>
  
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    bg="#DFA258"
                    color="white"
                    w="100%"
                    size="md"
                    _hover={{ bg: "yellow.700" }}
                    mt={4}
                  >
                    Submit
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </VStack>
        </HStack>
      </Layout>
    );
  };
  
  export default EditProfile;  
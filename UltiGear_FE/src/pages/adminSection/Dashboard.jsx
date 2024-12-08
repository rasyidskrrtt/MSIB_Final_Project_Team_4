import React from "react";
import { Box, Text, HStack, VStack } from "@chakra-ui/react";
import SideBarAdmin from "../../components/SideBarAdmin";
import { MdApps } from "react-icons/md";

const Dashboard = () => {
  return (
    <HStack height="100vh" align="stretch" spacing={0}>
      {/* Sidebar */}
      <Box>
        <SideBarAdmin />
      </Box>

      {/* Main Content */}
      <VStack
        flex="1"
        align="start"
        padding="20px 40px"
        spacing={8}
        overflowY="auto"
        height="100vh"
      >
        {/* Header */}
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

        {/* Dashboard Content */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(5, 1fr)" // Match layout with HomePage
          gap={6} // Same gap size as HomePage
          width="100%"
        >
          {/* Example Dashboard Stats */}
          <Box
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
            <VStack
              spacing={4}
              align="center"
              p={6}
              w="100%"
              bg="#DFA258"
              borderRadius="lg"
            >
              <Box
                bg="#367236"
                borderRadius="full"
                w={16}
                h={16}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  1
                </Text>
              </Box>
              <Text fontSize="lg" fontWeight="bold" color="#367236">
                <MdApps size="24px" style={{ display: "inline-block" }} /> Product
              </Text>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </HStack>
  );
};

export default Dashboard;

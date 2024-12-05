import React from "react";
import { Avatar, Box, Button, Divider, HStack, Text, VStack, } from "@chakra-ui/react";
import { IoLogOutOutline } from "react-icons/io5";
import { AiFillHome, AiOutlineFileSearch } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const SideBarSection = () => {
  const name = "Windows Batubara";
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <HStack>
      <Box
        bg="#367236"
        color="white"
        width="110%"
        h="100vh"
        top="0"
        position="sticky"
        padding="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <VStack align="center" width="100%">
          <Box textAlign="center">
            <Avatar size={"xl"} mb={"4"} />
            <Text fontSize={"lg"} mb={"8"}>
              Welcome Back! <br />
              <Text as="span" fontWeight={"bold"}>
                {name}
              </Text>
            </Text>
          </Box>
          <VStack align={"start"} spacing={"2"}>
            <Button
              leftIcon={<AiFillHome size="24px" />}
              fontSize="lg"
              justifyContent="flex-start"
              bg="#367236"
              color={isActive("/home") ? "#DFA258" : "white"}
              width="100%"
              _hover={{ color: "#DFA258" }}
              _active={{ bg: "#367236" }}
              position="relative"
              pl="4"
              onClick={() => navigate("/home")}
              _before={{
                content: '""',
                position: "absolute",
                height: isActive("/home") ? "50%" : "0",
                width: "4px",
                bg: "#DFA258",
                left: "-23px",
                borderRadius: "0 1.5px 1.5px 0",
                transition: "height 0.3s ease-in-out",
              }}
            >
              Home
            </Button>
            <Button
              leftIcon={<IoMdCart size="24px" />}
              fontSize="lg"
              justifyContent="flex-start"
              bg="#367236"
              color={isActive("/cart") ? "#DFA258" : "white"}
              width="100%"
              _hover={{ color: "#DFA258" }}
              _active={{ bg: "#367236" }}
              position="relative"
              pl="4"
              onClick={() => navigate("/cart")}
              _before={{
                content: '""',
                position: "absolute",
                height: isActive("/cart") ? "50%" : "0",
                width: "4px",
                bg: "#DFA258",
                left: "-23px",
                borderRadius: "0 1.5px 1.5px 0",
                transition: "height 0.3s ease-in-out",
              }}
            >
              Cart
            </Button>
            <Button
              leftIcon={<AiOutlineFileSearch size="24px" />}
              fontSize="lg"
              justifyContent="flex-start"
              bg="#367236"
              color={isActive("/myorders") ? "#DFA258" : "white"}
              width="100%"
              _hover={{ color: "#DFA258" }}
              _active={{ bg: "#367236" }}
              position="relative"
              pl="4"
              mb={"3"}
              onClick={() => navigate("/myorders")}
              _before={{
                content: '""',
                position: "absolute",
                height: isActive("/myorders") ? "50%" : "0",
                width: "4px",
                bg: "#DFA258",
                left: "-23px",
                borderRadius: "0 1.5px 1.5px 0",
                transition: "height 0.3s ease-in-out",
              }}
            >
              My Orders
            </Button>
            <Divider borderColor="whiteAlpha.900" />
            <Button
              leftIcon={<MdEdit size="24px" />}
              fontSize="lg"
              justifyContent="flex-start"
              bg="#367236"
              color={isActive("/editprofile") ? "#DFA258" : "white"}
              width="100%"
              _hover={{ color: "#DFA258" }}
              _active={{ bg: "#367236" }}
              position="relative"
              pl="4"
              mt={"3"}
              onClick={() => navigate("/editprofile")}
              _before={{
                content: '""',
                position: "absolute",
                height: isActive("/editprofile") ? "50%" : "0",
                width: "4px",
                bg: "#DFA258",
                left: "-23px",
                borderRadius: "0 1.5px 1.5px 0",
                transition: "height 0.3s ease-in-out",
              }}
            >
              Edit Profile
            </Button>
          </VStack>
          <Button
            color={"white"}
            bg={"#DFA258"}
            mt={"16"}
            _hover={{ bg: "yellow.700" }}
            onClick={() => navigate("/")}
          >
            <IoLogOutOutline /> Logout
          </Button>
        </VStack>
      </Box>
    </HStack>
  );
};

export default SideBarSection;
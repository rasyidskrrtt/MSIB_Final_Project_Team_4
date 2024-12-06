import React from "react";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoLogOutOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { MdApps } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const SideBarAdmin = () => {
  const name = "ADMIN!";
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <HStack>
      <Box
        bg="#367236"
        color="white"
        width="100%"
        h="100vh"
        top="0"
        position="sticky"
        padding="10px"
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
              color={isActive("/dashboard") ? "#DFA258" : "white"}
              width="100%"
              _hover={{ color: "#DFA258" }}
              _active={{ bg: "#367236" }}
              position="relative"
              pl="4"
              onClick={() => navigate("/dashboard")}
              _before={{
                content: '""',
                position: "absolute",
                height: isActive("/dashboard") ? "50%" : "0",
                width: "4px",
                bg: "#DFA258",
                left: "-38px",
                borderRadius: "0 1.5px 1.5px 0",
                transition: "height 0.3s ease-in-out",
              }}
            >
              Dashboard
            </Button>
            <Button
              leftIcon={<MdApps size="24px" />}
              fontSize="lg"
              justifyContent="flex-start"
              bg="#367236"
              color={isActive("/crudproduct") ? "#DFA258" : "white"}
              width="100%"
              _hover={{ color: "#DFA258" }}
              _active={{ bg: "#367236" }}
              position="relative"
              pl="4"
              onClick={() => navigate("/crudproduct")}
              _before={{
                content: '""',
                position: "absolute",
                height: isActive("/crudproduct") ? "50%" : "0",
                width: "4px",
                bg: "#DFA258",
                left: "-38px",
                borderRadius: "0 1.5px 1.5px 0",
                transition: "height 0.3s ease-in-out",
              }}
            >
              Product
            </Button>
          </VStack>
          <Button
            color={"white"}
            bg={"#DFA258"}
            mt={"16"}
            _hover={{ bg: "yellow.700" }}
            onClick={() => navigate("/loginadmin")}
          >
            <IoLogOutOutline /> Logout
          </Button>
        </VStack>
      </Box>
    </HStack>
  );
};

export default SideBarAdmin;

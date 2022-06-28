import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userInformation = JSON.parse(localStorage.getItem("userInformation"));

    if (userInformation) navigate("/chats");
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      {/* <Box
        d="flex"
        justifyContent="center"
       
        p={3}
        borderRadius="lg"
        borderColor="black" borderWidth="1px"
        w="100%"
        bg="blue.700"
      >
        <Text
          color="white"
          fontSize="4xl"
          fontFamily="Work sans"
          fontWeight="bold"
        >
          Mumblein
        </Text>
      </Box> */}
      <Box bg="blue.50" w="100%" p={4} borderRadius="lg" borderColor="black" borderWidth="1px"  margin="5rem 0 1rem 0" >
      <Text
          color="purple"
          fontSize="4xl"
          fontFamily="Work sans"
          fontWeight="bold"
          textAlign={"center"}
          mb="1em"
        >
          Mumblein
        </Text>
        <Tabs isFitted variant="soft-rounded" colorScheme="cyan" >
          <TabList mb="1em">
            <Tab fontWeight="bold">Login</Tab>
            <Tab fontWeight="bold">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;

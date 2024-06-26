import React, { useEffect } from 'react'
import {Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react"
import Login from '../components/authentication/Login'
import SignUp from '../components/authentication/SignUp'
import { useHistory } from 'react-router-dom'
const HomePage = () => {
  const history = useHistory()
    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    // console.log("user from home page-------",user)

    if (user) history.push("/chats");
    
  }, [history]);
  return (
    <Container main="xl" centerContent>
      <Box d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
        <Text fontSize="4xl" fontFamily="Work sans" >Chit-A-Chat</Text>
      </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ChatState } from '../context/ChatProvider'
import { Box } from '@chakra-ui/react'
import SideDrawer from '../components/chatsPageParts/SideDrawer'
import MyChats from '../components/chatsPageParts/MyChats'
import ChatBox from '../components/chatsPageParts/ChatBox'

const ChatPage = () => {

 const { user } =  ChatState()

 console.log("user from chat page--------",user)
 const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
     
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        {/* <MyChats fetchAgain={fetchAgain} /> */}
        {/* <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} /> */}
      </Box>
    </div>
  )
}

export default ChatPage

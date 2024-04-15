import React, { useEffect, useState } from 'react'
import axios from "axios"

const ChatPage = () => {

    const [chats, setChats] = useState([])
    const fetchChats = async ()=>{
        const data = await axios.get('/api/chat')
        console.log(data);
        setChats(data.data)
    }
    useEffect(()=>{
        fetchChats()
    },[])
  return (
    <div>
      {chats && chats.map((item)=>(
        <>
        <p key={item._id}>{item.chatName}</p>
        </>
      ))}
    </div>
  )
}

export default ChatPage

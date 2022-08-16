import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Messages";
import Login from "./Login";
var tabID = sessionStorage.tabID ? sessionStorage.tabID : sessionStorage.tabID = "Tab-"+Math.random().toString(36).slice(2, 7)
const user =JSON.parse(localStorage.getItem(tabID));
const chats =JSON.parse(localStorage.getItem('chats'));

const Chat = () => {
    const channel = new BroadcastChannel('app-data');
    const data =[];
    channel.addEventListener ('message', (event) => {
		//console.log(event.data);
        setMessages(event.data);
		//data =event.data;
	   });

       const list = chats === null ?[]:chats
    

  const [messages, setMessages] = useState(data.length > 0 ?data:list);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
	if (!inputMessage.trim().length) {
  	return;
	}
	const data = inputMessage;
   
//add new message to localstorage and update across the browser windows realtime
    if(chats === null){
        //console.log(data,chats)
        localStorage.setItem('chats',JSON.stringify([{ from: user.id,name:user.name, text: data }]))
        const channel = new BroadcastChannel('app-data');
        channel.postMessage(chats);

    }else{
        chats.push({ from: user.id,name:user.name, text: data })
        localStorage.setItem('chats',JSON.stringify(chats))
        const channel = new BroadcastChannel('app-data');
         channel.postMessage(chats);

    }

///update list and set input to empty

setMessages((old) => [...old, { from: user.id,name:user.name, text: data }]);
	setInputMessage("");

  };

  return (
	<Flex w="100%" h="100vh" justify="center" align="center">
  	<Flex w="70%" h="100%" flexDir="column">
       {
        
       !user ?
       <Login/>:
        <div>
    	<Header />
    	<Divider />
    	<Messages messages={messages} />
    	<Divider />
    	<Footer
      	inputMessage={inputMessage}
      	setInputMessage={setInputMessage}
      	handleSendMessage={handleSendMessage}
    	/>
        </div>
        
        }
  	</Flex>
	</Flex>
  );
};

export default Chat;

import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Messages";
import Login from "./Login";
var tabID = sessionStorage.tabID ? sessionStorage.tabID : sessionStorage.tabID = "Tab-"+Math.random().toString(36).slice(2, 7)
const user =JSON.parse(localStorage.getItem(tabID));

const Chat = () => {
  const [messages, setMessages] = useState([
	{ from: "computer", text: "Hi, My Name is HoneyChat" },
	{ from: "me", text: "Hey there" },
	{ from: "me", text: "Myself Ferin Patel" },
	{
  	from: "computer",
  	text: "Nice to meet you. You can send me message and i'll reply you with same message.",
	},
  ]);
  //
  //localStorage.removeItem('user');
  //console.log(JSON.parse(localStorage.getItem(tabID)) );
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
	if (!inputMessage.trim().length) {
  	return;
	}
	const data = inputMessage;

	setMessages((old) => [...old, { from: user.id, text: data }]);
	setInputMessage("");

	// setTimeout(() => {
  	// setMessages((old) => [...old, { from: "computer", text: data }]);
	// }, 1000);
  };

  return (
	<Flex w="100%" h="100vh" justify="center" align="center">
  	<Flex w="40%" h="90%" flexDir="column">
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

import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
var tabID = sessionStorage.tabID ? sessionStorage.tabID : sessionStorage.tabID = "Tab-"+Math.random().toString(36).slice(2, 7)
const user =JSON.parse(localStorage.getItem(tabID));
const Messages = ({ messages }) => {
	console.log(messages)

  const AlwaysScrollToBottom = () => {
	const elementRef = useRef();
	useEffect(() => elementRef.current.scrollIntoView());
	return <div ref={elementRef} />;
  };

  return (
	<Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
  	{messages.map((item, index) => {
    	if (item.from === user.id) {
      	return (
        	<Flex key={index} w="100%" justify="flex-end">
          	<Flex
            	bg="black"
            	color="white"
            	minW="100px"
            	maxW="350px"
            	my="1"
            	p="3"
          	>
				<Text>{user.name}</Text>:
				&nbsp;&nbsp;&nbsp;&nbsp;
            	<Text>{item.text}</Text>
          	</Flex>
        	</Flex>
      	);
    	} else {
      	return (
        	<Flex key={index} w="100%">
          	{/* <Avatar
            	name="Computer"
            	src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            	bg="blue.300"
          	></Avatar> */}
          	<Flex
            	bg="gray.100"
            	color="black"
            	minW="100px"
            	maxW="350px"
            	my="1"
            	p="3"

          	>
				<Text>{item.from}</Text>:
				&nbsp;&nbsp;&nbsp;&nbsp;
            	<Text>{item.text}</Text>
          	</Flex>
        	</Flex>
      	);
    	}
  	})}
  	<AlwaysScrollToBottom />
	</Flex>
  );
};

export default Messages;

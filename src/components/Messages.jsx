import React, { useEffect, useRef,useState } from "react";
import { Flex, Text,Button } from "@chakra-ui/react";
var tabID = sessionStorage.tabID ? sessionStorage.tabID : sessionStorage.tabID = "Tab-"+Math.random().toString(36).slice(2, 7)
const user =JSON.parse(localStorage.getItem(tabID));
const PerRow = 10;

const Messages = ({ messages }) => {
	
  const AlwaysScrollToBottom = () => {
	const elementRef = useRef();
	useEffect(() => elementRef.current.scrollIntoView());
	return <div ref={elementRef} />;
  };
  const [next, setNext] = useState(PerRow);
  
  const handleMore = () => {
    setNext(next + PerRow);
  };
  

	
  
//localStorage.removeItem(tabID);
  return (
	<Flex w="100%" h="90%" overflowY="scroll" flexDirection="column" p="3">
  	{messages?.slice(0, next)?.map((item, index) => {
    	if (item.from === user.id) {
      	return (
        	<Flex key={index} w="100%" justify="flex-end">
          	<Flex
            	bg="black"
            	color="white"
            	minW="100px"
            	maxW="600px"
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
            	maxW="600px"
            	my="1"
            	p="3"

          	>
				<Text>{item.name}</Text>:
				&nbsp;&nbsp;&nbsp;&nbsp;
            	<Text>{item.text}</Text>
          	</Flex>
        	</Flex>
      	);
    	}
  	})}

     {next < messages?.length && (
          <Button
            mt={4}
			colorScheme="teal"
            onClick={handleMore}
          >
            Load more
          </Button>
        )}

  	<AlwaysScrollToBottom />
	</Flex>
  );
};

export default Messages;

import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

var tabID = sessionStorage.tabID ? sessionStorage.tabID : sessionStorage.tabID = "Tab-"+Math.random().toString(36).slice(2, 7)
 //console.log(JSON.parse(localStorage.getItem(tabID)) );
 const user =JSON.parse(localStorage.getItem(tabID));
const Header = () => {
  return (
	<Flex w="100%">
  	<Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
    	<AvatarBadge boxSize="1.0em" bg="green.500" />
  	</Avatar>
  	<Flex flexDirection="column" mx="5" justify="center">
    	<Text fontSize="lg" fontWeight="bold">
      	{user.name}
    	</Text>
    	<Text color="green.500">Online</Text>
  	</Flex>
	</Flex>
  );
};

export default Header;

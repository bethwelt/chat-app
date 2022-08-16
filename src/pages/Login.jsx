import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Heading,
  Stack,
  Box,
  Avatar,

} from "@chakra-ui/react";

const Login = () =>  {

  const { handleSubmit, formState } = useForm();
  const errors = '';
  const [value, setValue] = React.useState('');
 

  function onSubmit(values) {
    var tabID = sessionStorage.tabID ?sessionStorage.tabID : sessionStorage.tabID = "Tab-"+Math.random().toString(36).slice(2, 7);

            if(value){
                var data ={
                    id:Math.floor(1000 + Math.random() * 9000),
                    name:value
                }

        localStorage.setItem(""+tabID,JSON.stringify(data))
    }
    
    return new Promise(resolve => {
      
      setTimeout(() => {
        window.location.reload();
        resolve();
      }, 1000);
    });
  }

  return (
    <Flex
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
  >
     <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome...</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
      <FormControl isInvalid={errors} isRequired>
        <FormLabel htmlFor="name">Username</FormLabel>
        <Input

          name="name"
          placeholder="Username"
        //   onChange={validateName}
          value ={value}
          onChange={(e)=> setValue(e.currentTarget.value)} 
        //   onKeyPress={e=> {
        //      if (e.key === 'Enter') {
        //         location.assign('?wd=' + value)
        //      }
        //   }}
          //ref={register({ validate: validateName })}
        />
        <FormErrorMessage>
            Username is required
          {/* {errors.name && errors.name.message} */}
        </FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
        Submit
      </Button>
      </Stack>
    </form>
    </Box>
    </Stack>
    </Flex>
  );
};
export default Login;

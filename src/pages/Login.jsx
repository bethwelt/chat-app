import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from "@chakra-ui/react";

const Login = () =>  {

  const { handleSubmit, register, formState } = useForm();
  const errors = '';
  const [value, setValue] = React.useState('');
  //const handleInputChange = (e) => setInput(e.target.value)

  function validateName(value) {
    if (!value) {
      return "Name is required";
    } else if (value !== "Naruto") {
      return "Jeez! You're not a fan 😱";
    } else return true;
  }

  function onSubmit(values) {


    // if (!window.name.match(/^GUID-/)) {
    //     window.name = "GUID-" + "${gUid}";
    //     console.log(window.name);
    // }

    var tabID = sessionStorage.tabID ? 
            sessionStorage.tabID : 
            sessionStorage.tabID = "Tab-"+Math.random().toString(36).slice(2, 7);

   
    console.log(value,tabID);
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
        ///location.assign("/");
        alert(JSON.stringify(value, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
};
export default Login;

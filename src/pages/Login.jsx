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
  const errors = input === ''

  function validateName(value) {
    if (!value) {
      return "Name is required";
    } else if (value !== "Naruto") {
      return "Jeez! You're not a fan 😱";
    } else return true;
  }

  function onSubmit(values) {

    console.log(values);
    return new Promise(resolve => {
        console.log()
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors} >
        <FormLabel htmlFor="name">Username</FormLabel>
        <Input
          name="name"
          placeholder="name"
          onChange={validateName}
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

import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkTo } from "../../components/LinkTo";
import { PageWrapper } from "../../globalStyles";
import { LogoWrapper, TopLink, } from "./styles";
import { useForm } from "react-hook-form";
import { LabelError } from "../CreateTask/styles";

export const Signin = () => {
  const { register, control, handleSubmit, formState: { errors,isValid } } = useForm({mode: 'onChange'});
  
  const onSubmitCreate = (data) =>{
      console.log("form data", data)
  }

  return(
    <PageWrapper>
      <TopLink>
        <LinkTo text="Sign up" url="/signup" />
      </TopLink>
      <LogoWrapper>
        <img src="./assets/logo-color.png" alt="logo" />
      </LogoWrapper>
      <form onSubmit={handleSubmit(onSubmitCreate)}>
        <Input 
            type="email" 
            placeholder="Enter your email" 
            label="Email address" 
            register={register}
            name="email"
            rules={{
              required:true, 
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              }
            } 
        />
        {   errors.email?.type === "required" && <LabelError>Field required</LabelError> }
        {   errors.email?.type === "pattern" && <LabelError>Email is not valid</LabelError> }
        <Input 
            type="password" 
            placeholder="Enter your password" 
            label="Password" 
            register={register}
            name="password"
            rules={{required:true, minLength:8}}
        />
        {   errors.password?.type === "required" && <LabelError>Field required</LabelError> }
        {   errors.password?.type === "minLength" && <LabelError>Min Length 6 characters</LabelError> }
        <Button disabled={!isValid} type="submit" text="Sign in" />
      </form>
      
    </PageWrapper>
  );
}

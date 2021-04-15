import React from "react";
import { Button } from "../../componentes/Button";
import { Input } from "../../componentes/Input";
import { LinkTo } from "../../componentes/LinkTo";
import { PageWrapper, LogoWrapper, TopLink  } from "../../globalStyles";


export const Signin = () => (
    <PageWrapper>
        <TopLink>
            <LinkTo text="Sing up" url="signup" />
        </TopLink>        
        <LogoWrapper>
            <img src="./assets/logocolor.png" alt="logo" />
        </LogoWrapper>
        <Input 
            type="email" 
            placeholder="Enter your email" 
            label="Email address" />
        <Input 
            type="password" 
            placeholder="Enter your password" 
            label="Password" />
        <Button text="Sing In" />    
    </PageWrapper>
    
)

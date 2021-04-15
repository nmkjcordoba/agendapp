import { Button } from "../../componentes/Button";
import { Input } from "../../componentes/Input";
import { LinkTo } from "../../componentes/LinkTo";
import { PageWrapper, LogoWrapper, TopLink  } from "../../globalStyles";

export const Signup = () => (
    <PageWrapper>
        <TopLink>
            <LinkTo text="Sing in" url="signin" />
        </TopLink>
        <LogoWrapper>
            <img src="./assets/logocolor.png" alt="logo" />
        </LogoWrapper>
        <Input 
            type="text" 
            placeholder="Enter your full name" 
            label="Name" />
        <Input 
            type="email" 
            placeholder="Enter your email" 
            label="Email address" />
        <Input 
            type="password" 
            placeholder="Enter your password" 
            label="password" />
        <Input 
            type="password" 
            placeholder="Confirm your password" 
            label="Confirm password" />
        <Button text="Sing Up" />
    </PageWrapper>
)

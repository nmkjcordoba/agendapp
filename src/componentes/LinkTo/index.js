import { Link } from "react-router-dom";
import { LinkWrapper } from "./style";

export const LinkTo = ({url,text}) => (
    <LinkWrapper>
        <Link to={url}>{text}</Link>
    </LinkWrapper>
    
)

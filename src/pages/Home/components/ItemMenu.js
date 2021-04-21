import { Link } from "react-router-dom";
import { ItemWrapper, Label } from "./style";

export const ItemMenu = ({label, icon:Icon, path, active}) => (
    <ItemWrapper active={active} >
        <Link to = {path}>
            <Icon /> {/* aqui está pasando el componete Icon; icon:Icon es para renombrar icon */}
            <Label active={active}>{label}</Label>
        </Link>
    </ItemWrapper>
)

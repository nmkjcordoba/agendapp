import { ItemWrapper, Label } from "./style";

export const ItemMenu = ({label, icon:Icon}) => (
    <ItemWrapper>
        <Icon /> {/* aqui está pasando el componete Icon; icon:Icon es para renombrar icon */}
        <Label>{label}</Label>
    </ItemWrapper>
)

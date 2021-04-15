import { FaHome, FaCalendar, FaCheckCircle, FaUser, FaFacebook } from "react-icons/fa"
import { ItemMenu } from "../../pages/Home/components/ItemMenu";
import { MenuWrapper } from "../../pages/Home/style";

const MenuOptions = [
    {
        icon: FaHome,
        label: 'Home'
    },
    {
        icon: FaCalendar,
        label: 'Schedule'
    },
    {
        icon: FaCheckCircle,
        label: 'Create task'
    },
    {
        icon: FaUser,
        label: 'Profile'
    }
]

export const Menu = () => {
    return(
        <MenuWrapper>
            {
                MenuOptions.map((item,i)=> <ItemMenu key={i} {...item} /> )
            }
        </MenuWrapper>
    );
}

import { FaHome, FaCalendar, FaCheckCircle, FaUser, FaFacebook } from "react-icons/fa"
import { ItemMenu } from "../../pages/Home/components/ItemMenu";
import { MenuWrapper } from "../../pages/Home/style";

const MenuOptions = [
    {
        icon: FaHome,
        label: 'Home',
        path: "/"
    },
    {
        icon: FaCalendar,
        label: 'Schedule',
        path: "/schedule"
    },
    {
        icon: FaCheckCircle,
        label: 'Create task',
        path: "/create"
    },
    {
        icon: FaUser,
        label: 'Profile',
        path: "/profile"
    }
]

export const Menu = ({pathname}) => {
    return(
        <MenuWrapper>
            {
                MenuOptions.map((item,i)=> <ItemMenu active={item.path === pathname} key={i} {...item} /> )
            }
        </MenuWrapper>
    );
}

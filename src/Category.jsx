import { TiThSmallOutline } from "react-icons/ti";
import { MdBreakfastDining } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { GiHamburger } from "react-icons/gi";
import { GiFrenchFries } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";

const Categories = [
    {
        id:1,
        name:"All",
        icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-400"/>
    },
    {
        id:1,
        name:"Breakfast",
        icon: <MdBreakfastDining className="w-[60px] h-[60px] text-green-400"/>
    },
    {
        id:1,
        name:"Soupe",
        icon: <TbSoupFilled className="w-[60px] h-[60px] text-green-400"/>
    },
    {
        id:1,
        name:"Pasta",
        icon: <GiFrenchFries className="w-[60px] h-[60px] text-green-400"/>
    },
    {
        id:1,
        name:"Main-course",
        icon: <BiSolidDish className="w-[60px] h-[60px] text-green-400"/>
    },
    {
        id:1,
        name:"Burger",
        icon: <GiHamburger className="w-[60px] h-[60px] text-green-400"/>
    }
]

export default Categories;
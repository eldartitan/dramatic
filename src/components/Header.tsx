import { Link } from "react-router-dom";
import Search from "./Search";
import { ReactComponent as GiftIcon } from "../assets/gift.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";

export default function Header() {
    return (
        <div className="absolute h-20 header-gradient w-full flex items-center px-8 font-bold text-wild-blue-yonder text-base top-0 z-10">
            <Link
                to={"/"}
                className="text-4xl font-normal text-metallic-yellow font-griffy"
            >
                DRAMATIC
            </Link>
            <ul className="flex ml-[60px] gap-[51px]">
                <li>
                    <button>HOME</button>
                </li>
                <li>
                    <button>TV SHOW</button>
                </li>
                <li>
                    <button>MOVIES</button>
                </li>
                <li>
                    <button>NEW</button>
                </li>
            </ul>
            <div className="flex items-center ml-auto">
                <Search />
                <GiftIcon className="ml-14" />
                <BellIcon className="ml-10" />
                <span className="w-10 h-10 ml-12 bg-white rounded-full"></span>
            </div>
        </div>
    );
}

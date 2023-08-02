import {useContext} from "react";
import {SidebarContext} from "../contexts/SidebarContext.jsx";

import {BsBag} from "react-icons/bs"

function Header() {
	const {isOpen, setIsOpen} = useContext(SidebarContext)
	return (
		<header className="bg-pink-200">
			<div>Header</div>
			<div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer
			flex relative">
				<BsBag className="text-2xl"/>
			</div>
		</header>
	);
}

export default Header;
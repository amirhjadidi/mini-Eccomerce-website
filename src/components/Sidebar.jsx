import React, {useState, createContext, useContext} from "react";
import {Link} from "react-router-dom"

import CartItem from "./CartItem.jsx";

import {SidebarContext} from "../contexts/SidebarContext.jsx";
import {CartContext} from "../contexts/CartContext.jsx";

import {IoMdArrowForward} from "react-icons/io"
import {FiTrash2} from "react-icons/fi"

function Sidebar() {
	const {isOpen, handleClose} = useContext(SidebarContext)
	console.log(useContext(CartContext))
	return (
		<div className={`${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:w-[30vw]
		 transition-all duration-300 z-20 px-4 lg:px-[35]`}>
			<div className="flex items-center - justify-between py-6 border-b">
				<div className="uppercase text-sm font-semibold
				">shooping bag(0)
				</div>
				<div className="cursor-pointer w-8 h-8 flex justify-center items-center	">
					<IoMdArrowForward onClick={() => handleClose()} className="text-2xl"/>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;

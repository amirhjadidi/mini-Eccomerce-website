import {Link} from "react-router-dom"
import {IoMdClose} from "react-icons/io";

function CartItem({item}) {
	const {id, title, image, price, amount} = item

	return (
		<div className="flex">
			<div className="w-full min-h-[150px] flex items-center gap-x-4">
				<Link to={`/product/${id}`}>
					<img className="max-w-[80px]" src={image} alt=""/>
				</Link>
				<div className="w-full flex flex-col">
					<div className="flex justify-between mb-2">
						<Link to={`/product/${id}`} className="uppercase
				 text-sm font-medium max-w-[240px] text-primary hover:underline">
							{title}
						</Link>
						<div className="text-xl cursor-pointer">
							<IoMdClose className="text-gray-500 hover:text-red-500"/>
						</div>
					</div>
					<div className="flex-1 justify-center items-center">
						<div className="bg-red-500">
							{amount}
						</div>
						<div className="bg-red-200   ">
							{price}
						</div>
						<div className="bg-red-200  ">
							{}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
import {Link} from "react-router-dom";
import {BsPlus, BsEyeFill} from "react-icons/bs";

import {CartContext} from "../contexts/CartContext.jsx"
import {useContext} from "react";


function Product({product}) {

	const {addToCart} = useContext(CartContext)


	const {id, image, category, title, price} = product;

	// console.log(product)
	return (
		<div>
			<div
				className="border border-[#e4e4e4] h-[300px]
			relative overflow-hidden group transition"
			>
				<div className="w-full h-full flex justify-center items-center bg-pink">
					<div>
						<img
							className="max-h-[160px] group-hover:scale-110 transition duration-300 "
							src={image}
							alt=""
						/>
					</div>
					<div
						className="absolute top-6 right-11 group-hover:right-5
						 p-2 flex-col items-center gap-y-2
					opacity-0 group-hover:opacity-100 transition-all duration-800"
					>
						<button onClick={() => addToCart(product,id)}>
							<div
								className="flex justify-center items-center
							text-white w-12 h-12 bg-red-500"
							>
								<BsPlus className="text-3xl"/>
							</div>
						</button>
						<Link
							to={`/product/${id}`}
							className="w-12 h-12 bg-white
						flex justify-center items-center text-primary shadow-2xl"
						>
							<BsEyeFill/>
						</Link>
					</div>
				</div>
			</div>
			<div>
				<div className="text-sm capitalize text-gray-500">{category}</div>
				<Link to={`/product/${id}`}>
					<div className="font-semibold mb-1">{title}</div>
				</Link>
				<div className="font-semibold ">{price}</div>
			</div>
		</div>
	)
		;
}

export default Product;

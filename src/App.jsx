import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.jsx"
import Product from "./pages/ProductDetail.jsx"
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	return (
		<div className="overflow-hidden">
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/product/:id" element={<Product/>}/>
				</Routes>
				<Sidebar/>
				<Footer/>
			</BrowserRouter>
		</div>
	);
}

export default App;
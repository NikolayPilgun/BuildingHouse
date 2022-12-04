import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import "./styles/index.scss";

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;

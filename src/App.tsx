import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import HouseCard from "./components/houseCatalog/houseCard/HouseCard";
import HouseCatalog from "./components/houseCatalog/HouseCatalog";
import Materials from "./components/materials/Materials";
import Services from "./components/servic/Services";
import "./styles/index.scss";

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />

				<Route path="/housecatalog" element={<HouseCatalog />} />
				<Route path="/housecatalog/:card" element={<HouseCard />} />

				<Route path="/materials" element={<Materials />} />
				<Route path="/services" element={<Services />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;

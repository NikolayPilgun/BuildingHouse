import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import LoaderComp from "./components/loader/LoaderComp";
import "./styles/index.scss";

const About = React.lazy(() => import("./components/about/About"));
const HouseCatalog = React.lazy(
	() => import("./components/houseCatalog/HouseCatalog")
);
const HouseCard = React.lazy(
	() => import("./components/houseCatalog/houseCard/HouseCard")
);
const Materials = React.lazy(() => import("./components/materials/Materials"));
const Services = React.lazy(() => import("./components/servic/Services"));
const Gallery = React.lazy(() => import("./components/gallery/Gallery"));
const Contacts = React.lazy(() => import("./components/contacts/Contacts"));

// import About from "./components/about/About";
//import HouseCatalog from "./components/houseCatalog/HouseCatalog";
//import HouseCard from "./components/houseCatalog/houseCard/HouseCard";
//import Materials from "./components/materials/Materials";
//import Services from "./components/servic/Services";
//import Gallery from "./components/gallery/Gallery";
//import Contacts from "./components/contacts/Contacts";

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/about"
					element={
						<Suspense fallback={<LoaderComp />}>
							<About />
						</Suspense>
					}
				/>

				<Route
					path="/housecatalog"
					element={
						<Suspense fallback={<LoaderComp />}>
							<HouseCatalog />
						</Suspense>
					}
				/>
				<Route
					path="/housecatalog/:card"
					element={
						<Suspense fallback={<LoaderComp />}>
							<HouseCard />
						</Suspense>
					}
				/>

				<Route
					path="/materials"
					element={
						<Suspense fallback={<LoaderComp />}>
							<Materials />
						</Suspense>
					}
				/>
				<Route
					path="/services"
					element={
						<Suspense fallback={<LoaderComp />}>
							<Services />
						</Suspense>
					}
				/>
				<Route
					path="/gallery"
					element={
						<Suspense fallback={<LoaderComp />}>
							<Gallery />
						</Suspense>
					}
				/>
				<Route
					path="/contacts"
					element={
						<Suspense fallback={<LoaderComp />}>
							<Contacts />
						</Suspense>
					}
				/>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;

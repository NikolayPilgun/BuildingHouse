import CatalogHome from "./catalogHome/CatalogHome";
import ContactsHome from "./contactsHome/ContactsHome";
import GalleryHome from "./galleryHome/GalleryHome";
import styles from "./home.module.scss";
import MaterialsHome from "./materialsHome/MaterialsHome";

import ServicesHome from "./servicesHome/ServicesHome";
import SliderBanner from "./sliderBanner/SliderBanner";

function Home() {
	return (
		<main className={styles.home}>
			<SliderBanner />
			<ContactsHome />
			<CatalogHome />
			<MaterialsHome />
			<ServicesHome />
			<GalleryHome />
		</main>
	);
}

export default Home;

import Contacts from "./contacts/Contacts";
import styles from "./home.module.scss";
import SliderBanner from "./sliderBanner/SliderBanner";

function Home() {
	return (
		<main className={styles.home}>
			<SliderBanner />
			<Contacts />
		</main>
	);
}

export default Home;

import Banner from "./banner/Banner";
import Contacts from "./contacts/Contacts";
import styles from "./home.module.scss";

function Home() {
	return (
		<main className={styles.home}>
			<Banner />
			<Contacts />
		</main>
	);
}

export default Home;

import { Link } from "react-router-dom";
import { HomeDataGal } from "../../../data/homeData";
import Button from "../../button/Button";
import styles from "./galleryHome.module.scss";

function GalleryHome() {
	return (
		<div className={styles.galleryHome}>
			<div className={styles.title}>
				<h2>Галерея</h2>
			</div>
			<div className={styles.container}>
				{HomeDataGal.map((item, i) => (
					<div key={i} className={styles.column}>
						<img src={item.img} alt={item.name} />
					</div>
				))}
			</div>

			<div className={styles.button}>
				<Button>
					<Link to="/gallery">Галерея</Link>
				</Button>
			</div>
		</div>
	);
}

export default GalleryHome;

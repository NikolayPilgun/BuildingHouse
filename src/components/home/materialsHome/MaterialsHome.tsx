import { Link } from "react-router-dom";
import { HomeDataMat } from "../../../data/homeData";
import Button from "../../button/Button";
import styles from "./materials.module.scss";

function MaterialsHome() {
	return (
		<div
			className={styles.materials}
			style={{
				backgroundImage: `url(${HomeDataMat[0].img})`,
			}}
		>
			<div className={styles.title}>
				<h2>Экологические материалы</h2>
			</div>
			<div className={styles.button}>
				<Button>
					<Link to="/materials">Материалы</Link>
				</Button>
			</div>
		</div>
	);
}

export default MaterialsHome;

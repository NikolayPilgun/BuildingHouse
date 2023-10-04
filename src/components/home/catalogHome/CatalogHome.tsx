import { Link } from "react-router-dom";
import { HomeDataCOH } from "../../../data/homeData";
import Button from "../../button/Button";
import styles from "./catalogHome.module.scss";

function CatalogHome() {
	return (
		<div className={styles.catalogHome}>
			<div className={styles.container}>
				{HomeDataCOH.map((item, i) => (
					<div key={i} className={styles.column}>
						<img src={item.img} alt={item.name} />
						<span>
							<Link to={item.path}>{item.description}</Link>
						</span>
					</div>
				))}
			</div>
			<div className={styles.text}>
				<p>
					Мы предлагаем широкий выбор комфортабельных и уютных проектов финских
					домов любого размера или сложности. Найдите тот, который станет вашим
					в нашей обширной коллекции!
				</p>
			</div>
			<div className={styles.button}>
				<Button>
					<Link to="/housecatalog">Каталог домов</Link>
				</Button>
			</div>
		</div>
	);
}

export default CatalogHome;

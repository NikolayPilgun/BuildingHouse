import { Link } from "react-router-dom";
import { HomeDataSer } from "../../../data/homeData";
import Button from "../../button/Button";
import styles from "./servicesHome.module.scss";

function ServicesHome() {
	return (
		<div className={styles.servicesHome}>
			<div className={styles.title}>
				<h2>Услуги</h2>
			</div>
			<div className={styles.container}>
				{HomeDataSer.map((item, i) => (
					<div key={i} className={styles.column}>
						<img src={item.img} alt={item.name} />
						<span>{item.description}</span>
					</div>
				))}
			</div>
			<div className={styles.text}>
				<p>
					Вы получаете не просто настоящий финский деревянный дом под ключ, но и
					преданного партнера, который позаботится о всем жизненном цикле
					строительства, от проектирования до сборки.
				</p>
			</div>
			<div className={styles.button}>
				<Button>
					<Link to="/services">Услуги</Link>
				</Button>
			</div>
		</div>
	);
}

export default ServicesHome;

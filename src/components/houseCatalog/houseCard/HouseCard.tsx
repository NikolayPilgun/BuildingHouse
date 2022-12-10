import { Link } from "react-router-dom";
import { CatalogPageData } from "../../../data/catalogPageData";
import Button from "../../button/Button";
import styles from "./houseCard.module.scss";

function HouseCard() {
	return (
		<div className={styles.houseCard}>
			<div className={styles.title}>
				<h2>Каталог домов</h2>
				<h2>{CatalogPageData[0].description}</h2>
			</div>
			<div className={styles.slider}>
				<img src={CatalogPageData[0].img} alt={CatalogPageData[0].name} />
			</div>
			<div className={styles.text1}>
				<p>{CatalogPageData[0].text1}</p>
			</div>
			<div className={styles.subTitle}>
				<h3>Гарантия – 20 лет!</h3>
			</div>
			<div className={styles.characteristics}>
				<div className={styles.left}>
					<p>
						<span>Площадь дома:</span>
						<span>{CatalogPageData[0].houseArea}</span>
					</p>
					<p>
						<span>Площадь внутренних помещений:</span>
						<span>{CatalogPageData[0].areaInlandPremises}</span>
					</p>
					<p>
						<span>Площадь террас и балконов:</span>
						<span>{CatalogPageData[0].terraceAreaBalconies}</span>
					</p>
					<p>
						<span>Размеры:</span>
						<span>{CatalogPageData[0].dimensions}</span>
					</p>
				</div>
				<div className={styles.right}>
					<div className={styles.text2}>
						<p>{CatalogPageData[0].text2}</p>
					</div>
					<div className={styles.button}>
						<Button>
							<Link to="/housecatalog">Посмотреть все проекты</Link>
						</Button>
						<Button>
							<Link to="/contacts">Узнать цену</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HouseCard;

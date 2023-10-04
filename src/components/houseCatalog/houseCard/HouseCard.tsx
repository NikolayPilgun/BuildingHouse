import { Link, useParams } from "react-router-dom";
import {
	CatalogPageData,
	ICatalogPageData,
} from "../../../data/catalogPageData";
import Button from "../../button/Button";
import styles from "./houseCard.module.scss";
import HouseSlider from "./houseSlider/HouseSlider";

function HouseCard() {
	const { card } = useParams();
	let cardData = card ? card : CatalogPageData[0].type;
	let cardHouse: ICatalogPageData[] = CatalogPageData.filter(
		(card) => card.type === cardData
	);

	return (
		<div className={styles.houseCard}>
			<div className={styles.title}>
				<h2>Каталог домов</h2>
				<h2>{cardHouse[0].description}</h2>
			</div>
			{/* slider  */}
			<div className={styles.slider}>
				<HouseSlider cardHouseProps={cardHouse} />
			</div>
			{/* slider  */}
			<div className={styles.text1}>
				<p>{cardHouse[0].text1}</p>
			</div>
			<div className={styles.subTitle}>
				<h3>Гарантия – 20 лет!</h3>
			</div>
			<div className={styles.characteristics}>
				<div className={styles.left}>
					<p>
						<span>Площадь дома:</span>
						<span>{cardHouse[0].houseArea}</span>
					</p>
					<p>
						<span>Площадь внутренних помещений:</span>
						<span>{cardHouse[0].areaInlandPremises}</span>
					</p>
					<p>
						<span>Площадь террас и балконов:</span>
						<span>{cardHouse[0].terraceAreaBalconies}</span>
					</p>
					<p>
						<span>Размеры:</span>
						<span>{cardHouse[0].dimensions}</span>
					</p>
				</div>
				<div className={styles.right}>
					<div className={styles.text2}>
						<p>{cardHouse[0].text2}</p>
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

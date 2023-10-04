import { FooterImageData } from "../../data/footerData";
import styles from "./footer.module.scss";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.contacts}>
				<span>Контакты</span>
				<span>
					<a href="tel:+7(819)342-33-44">+7 (819) 342-33-44</a>
				</span>
				<span>
					<a href="mailto: contact@yourhouse.ru">contact@yourhouse.ru</a>
				</span>
			</div>
			<address className={styles.address}>
				<span>Санкт-Петербург 193828,</span>
				<span>ул. Полулютникова, д.34</span>
			</address>

			<div className={styles.center}>
				<img src={FooterImageData[2].img} alt={FooterImageData[2].name} />
				<span>YourHouse</span>
			</div>

			<div className={styles.social}>
				<span>#YourHouse</span>
				<span>
					<img src={FooterImageData[0].img} alt={FooterImageData[0].name} />
					<img src={FooterImageData[1].img} alt={FooterImageData[1].name} />
				</span>
			</div>
			<div className={styles.copyright}>&copy; 2022 YourHouse.ru</div>
		</footer>
	);
}

export default Footer;

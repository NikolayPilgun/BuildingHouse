import { Link } from "react-router-dom";
import Button from "../../button/Button";
import styles from "./contacts.module.scss";

function ContactsHome() {
	return (
		<div className={styles.contacts}>
			<div className={styles.title}>
				<h2>Дом Вашей мечты!</h2>
			</div>
			<div className={styles.text}>
				<p>
					YourHouse является производителем аутентичных, энергоэффективных
					финских домов. Мы специализируемся на скандинавском дизайне,
					устойчивых стройматериалах и экологичном строительстве под ключ.
					Свяжитесь с нами и начните строить коттедж своей мечты!
				</p>
			</div>
			<div className={styles.button}>
				<Button>
					<Link to="/contacts">Напишите нам!</Link>
				</Button>
			</div>
		</div>
	);
}

export default ContactsHome;

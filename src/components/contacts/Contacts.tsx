import { useState } from "react";
import { ContactsData } from "../../data/contactsData";
import Button from "../button/Button";
import styles from "./contacts.module.scss";
import GoogleCard from "./googleCard/GoogleCard";

function Contacts() {
	const [mapOnClick, setMapOnClick] = useState(false);

	const onClickMap = () => {
		setMapOnClick(!mapOnClick);
	};
	return (
		<div className={styles.contacts}>
			<div
				style={{
					backgroundImage: ` url(${ContactsData[0].img})`,
				}}
				className={styles.banner}
			></div>
			<div className={styles.header}>
				<div className={styles.title}>
					<h2>Контакты</h2>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.address}>
					<div className={styles.city}>
						<span>Санкт-Петербург</span>
						<span>1234567, ул. Ленина, д.55</span>
						<span>Отдел продаж: +7 (811) 111-11-11 </span>
						<span>Отдел рекламы: +7 (811) 111-22-22 </span>
						<span>E-mail: contact@yourhouse.ru</span>
					</div>
					<div className={styles.city}>
						<span>Москва</span>
						<span>1234567, ул. Ленина, д.44</span>
						<span>Отдел продаж: +7 (811) 111-11-11 </span>
						<span>Отдел рекламы: +7 (811) 111-22-22 </span>
						<span>E-mail: contact@yourhouse.ru</span>
					</div>
					<div className={styles.city}>
						<span>Екатеринбург</span>
						<span>1234567, ул. Ленина, д.66</span>
						<span>Отдел продаж: +7 (811) 111-11-11 </span>
						<span>Отдел рекламы: +7 (811) 111-22-22</span>
						<span>E-mail: contact@yourhouse.ru</span>
					</div>
				</div>
				<div className={styles.form}>
					<form>
						<div className={styles.formText}>
							<label htmlFor="name">ФИО</label>
							<input id="name" type="text" />
						</div>
						<div className={styles.formText}>
							<label htmlFor="tel">Телефон</label>
							<input id="tel" type="tel" />
						</div>
						<div className={styles.formText}>
							<label htmlFor="email">E-mail </label>
							<input id="email" type="email" />
						</div>
						<div className={styles.formRadio}>
							<legend>С участком</legend>
							<input type="radio" id="yes" name="drone" value="yes" />
							<label htmlFor="yes">да</label>
							<input type="radio" id="no" name="drone" value="no" />
							<label htmlFor="no">нет</label>
						</div>
						<div className={styles.formTextarea}>
							<label htmlFor="message">Сообщение</label>
							<textarea id="message"></textarea>
						</div>
						<div className={styles.button}>
							<Button>Отправить</Button>
						</div>
					</form>
				</div>
			</div>
			<div className={styles.map} onClick={onClickMap}>
				{mapOnClick ? (
					<GoogleCard />
				) : (
					<div
						style={{
							backgroundImage: ` url(${ContactsData[1].img})`,
						}}
						className={styles.banner}
					></div>
				)}
			</div>
		</div>
	);
}

export default Contacts;

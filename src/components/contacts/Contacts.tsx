import { useState } from "react";
import { ContactsData } from "../../data/contactsData";
import styles from "./contacts.module.scss";
import ContactsForm from "./form/ContactsForm";
import { GoogleCard } from "./googleCard/GoogleCard";

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
					<ContactsForm />
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

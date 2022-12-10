import { ServicesBanerData, ServicesData } from "../../data/servicesData";
import styles from "./services.module.scss";

function Services() {
	return (
		<div className={styles.services}>
			<div
				style={{
					backgroundImage: ` url(${ServicesBanerData[0].img})`,
				}}
				className={styles.banner}
			></div>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>Услуги</h2>
				</div>
				{ServicesData.map((item, i) => (
					<div key={i} className={styles.content}>
						<div className={styles.subTitle}>
							<h4>{item.subTitle1}</h4>
						</div>
						<div className={styles.picture}>
							<img src={item.img} alt={item.name} />
						</div>
						<div className={styles.text}>
							<h3>{item.subTitle2}</h3>
							<p>{item.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Services;

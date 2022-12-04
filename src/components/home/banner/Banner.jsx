import Button from "../../button/Button";
import styles from "./banner.module.scss";

function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h1>
						<span>Элитные дома</span>
						<span>в стиле хай-тек</span>
					</h1>
				</div>
				<div className={styles.button}>
					<Button>Подробнее</Button>
				</div>
			</div>
		</div>
	);
}

export default Banner;

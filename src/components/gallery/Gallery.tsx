import { GalleryBanerData, GalleryData } from "../../data/galleryData";
import styles from "./gallery.module.scss";

function Gallery() {
	return (
		<div className={styles.gallery}>
			<div
				style={{
					backgroundImage: ` url(${GalleryBanerData[0].img})`,
				}}
				className={styles.banner}
			></div>
			<div className={styles.header}>
				<div className={styles.title}>
					<h2>Галерея</h2>
				</div>
				<div className={styles.text}>
					<p>
						И нет сомнений, что реплицированные с зарубежных источников,
						современные исследования, инициированные исключительно синтетически,
						преданы социально-демократической анафеме. Противоположная точка
						зрения подразумевает, что многие известные личности формируют
						глобальную экономическую сеть и при этом — ограничены исключительно
						образом мышления. Как принято считать, базовые сценарии поведения
						пользователей, вне зависимости от их уровня, должны быть превращены
						в посмешище.
					</p>
				</div>
			</div>
			<div className={styles.container}>
				{GalleryData.map((item, i) => (
					<div key={i} className={styles.slid}>
						<img src={item.img} alt={item.name} />
					</div>
				))}
			</div>
			<div className={styles.sabNav}>
				<span>1</span>
				<span>2</span>
				<span>3</span>
			</div>
		</div>
	);
}

export default Gallery;

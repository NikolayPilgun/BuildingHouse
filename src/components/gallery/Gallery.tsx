import { useState } from "react";
import { Grid, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { GalleryBanerData, GalleryData } from "../../data/galleryData";
import styles from "./gallery.module.scss";
import GalleryPopup from "./galleryPopup/GalleryPopup";
import "./sliderGallery.css";

function Gallery() {
	let [isOpen, setIsOpen] = useState(false);
	const [offset, setOffset] = useState(0);

	const onClickImgItem = (index: number) => {
		setOffset(index);
		setIsOpen(true);
	};
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

			<div className="sliderGallery">
				<Swiper
					slidesPerView={3}
					grid={{
						rows: 2,
					}}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Grid, Pagination, Navigation]}
					navigation={true}
					className="mySwiper"
					breakpoints={{
						// when window width is >= 700px
						700: {
							slidesPerView: 3,
						},
						// when window width is >= 450px
						450: {
							slidesPerView: 2,
						},
						// when window width is >= 300px
						300: {
							slidesPerView: 1,
						},
						// when window width is >= 0px
						0: {
							slidesPerView: 1,
						},
					}}
				>
					{GalleryData.map((item, i) => (
						<SwiperSlide key={i}>
							<img
								src={item.img}
								alt={item.name}
								onClick={() => onClickImgItem(i)}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{isOpen && (
				<GalleryPopup
					offset={offset}
					setOffset={setOffset}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			)}
		</div>
	);
}

export default Gallery;

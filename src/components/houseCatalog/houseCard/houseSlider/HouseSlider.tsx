import { ICatalogPageData } from "../../../../data/catalogPageData";
import "./sliderHouse.css";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

interface Props {
	cardHouseProps: ICatalogPageData[];
}

function HouseSlider(props: Props) {
	const { cardHouseProps } = props;
	return (
		<div className="s-container">
			<Swiper
				modules={[Navigation, Pagination]}
				slidesPerView={1}
				spaceBetween={40}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				navigation={true}
				pagination={{ clickable: true }}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src={cardHouseProps[0].img} alt={cardHouseProps[0].name} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={cardHouseProps[0].img1} alt={cardHouseProps[0].name} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={cardHouseProps[0].img2} alt={cardHouseProps[0].name} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={cardHouseProps[0].img3} alt={cardHouseProps[0].name} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={cardHouseProps[0].img4} alt={cardHouseProps[0].name} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default HouseSlider;

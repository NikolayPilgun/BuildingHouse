import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { HomeDataBaner } from "../../../data/homeData";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import Button from "../../button/Button";
import styles from "./sliderBanner.module.scss";

function SliderBanner() {
	const [offset, setOffset] = useState(0);
	const { width } = useWindowDimensions();
	const widthSize = width ? width : 1920;
	const widthContainer = widthSize * HomeDataBaner.length;

	const handleLeftArrowClick = () => {
		if (offset < 0) {
			setOffset(offset + widthSize);
		} else {
			setOffset(0);
		}
	};
	const handleRightArrowClick = () => {
		if (Math.abs(offset) === widthContainer - widthSize) {
			setOffset(offset);
		} else {
			setOffset(offset - widthSize);
		}
	};

	return (
		<div className={styles.carousel} style={{ minWidth: `${width}px` }}>
			<div
				className={styles.container}
				style={{
					width: `${widthContainer}px`,
					transform: `translateX(${offset}px)`,
				}}
			>
				{HomeDataBaner.map((slider, i) => (
					<div
						key={i}
						className={styles.sliderBanner}
						style={{
							backgroundImage: ` url(${slider.img})`,
							minWidth: `${width}px`,
						}}
					>
						<div className={styles.content}>
							<div className={styles.title}>
								<h1>
									<span>{slider.title1}</span>
									<span>{slider.title2}</span>
								</h1>
							</div>
							<div className={styles.button}>
								<Button>{slider.button}</Button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className={styles.arrows}>
				<button
					disabled={offset === 0 ? true : false}
					onClick={handleLeftArrowClick}
					className={styles.arrowsLeft}
				>
					<AiFillCaretLeft />
				</button>

				<button
					disabled={
						Math.abs(offset) === widthContainer - widthSize ? true : false
					}
					onClick={handleRightArrowClick}
					className={styles.arrowsRight}
				>
					<AiFillCaretRight />
				</button>
			</div>
		</div>
	);
}

export default SliderBanner;

import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HomeDataBaner } from "../../../data/homeData";
import Button from "../../button/Button";
import styles from "./sliderBanner.module.scss";

function SliderBanner() {
	const [offset, setOffset] = useState(0);

	const handleLeftArrowClick = () => {
		if (offset > 0) {
			setOffset(offset - 1);
		} else {
			setOffset(HomeDataBaner.length - 1);
		}
	};
	const handleRightArrowClick = () => {
		if (HomeDataBaner.length - 1 > offset) {
			setOffset(offset + 1);
		} else {
			setOffset(0);
		}
	};

	return (
		<div className={styles.carousel}>
			<div
				className={styles.sliderBanner}
				style={{
					backgroundImage: ` url(${HomeDataBaner[offset].img})`,
				}}
			>
				<div className={styles.content}>
					<div className={styles.title}>
						<h1>
							<span>{HomeDataBaner[offset].title1}</span>
							<span>{HomeDataBaner[offset].title2}</span>
						</h1>
					</div>
					<div className={styles.button}>
						<Button>
							<Link to={HomeDataBaner[offset].path}>
								{HomeDataBaner[offset].button}
							</Link>
						</Button>
					</div>
				</div>
			</div>

			<div className={styles.arrows}>
				<button onClick={handleLeftArrowClick} className={styles.arrowsLeft}>
					<AiFillCaretLeft />
				</button>

				<button onClick={handleRightArrowClick} className={styles.arrowsRight}>
					<AiFillCaretRight />
				</button>
			</div>
		</div>
	);
}

export default SliderBanner;

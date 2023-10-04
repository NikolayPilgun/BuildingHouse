import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HomeDataBaner } from "../../../data/homeData";
import Button from "../../button/Button";
import styles from "./sliderBanner.module.scss";

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

function SliderBanner() {
	const [[page, direction], setPage] = useState([0, 0]);

	const imageIndex = wrap(0, HomeDataBaner.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};
	return (
		<div className={styles.carousel}>
			<div className={styles.sliderBanner}>
				<AnimatePresence initial={false} custom={direction}>
					<motion.img
						key={page}
						src={HomeDataBaner[imageIndex].img}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 },
						}}
						drag="x"
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);

							if (swipe < -swipeConfidenceThreshold) {
								paginate(1);
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1);
							}
						}}
					/>
				</AnimatePresence>
			</div>

			<div className={styles.content}>
				<div className={styles.title}>
					<h1>
						<span>{HomeDataBaner[imageIndex].title1}</span>
						<span>{HomeDataBaner[imageIndex].title2}</span>
					</h1>
				</div>
				<div className={styles.button}>
					<Button>
						<Link to={HomeDataBaner[imageIndex].path}>
							{HomeDataBaner[imageIndex].button}
						</Link>
					</Button>
				</div>
			</div>

			<div className={styles.arrows}>
				<button onClick={() => paginate(-1)} className={styles.arrowsLeft}>
					<AiFillCaretLeft />
				</button>

				<button onClick={() => paginate(1)} className={styles.arrowsRight}>
					<AiFillCaretRight />
				</button>
			</div>
		</div>
	);
}

export default SliderBanner;

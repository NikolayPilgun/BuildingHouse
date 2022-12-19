import { Dialog } from "@headlessui/react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { GalleryPOPData } from "../../../data/galleryPOPData";
import styles from "./galleryPopup.module.scss";

interface Props {
	offset: number;
	isOpen: boolean;
	setOffset: (val: number) => void;
	setIsOpen: (val: boolean) => void;
}

function GalleryPopup(props: Props) {
	const { offset, setOffset, isOpen, setIsOpen } = props;

	const handleLeftArrowClick = () => {
		if (offset > 0) {
			setOffset(offset - 1);
		} else {
			setOffset(GalleryPOPData.length - 1);
		}
	};
	const handleRightArrowClick = () => {
		if (GalleryPOPData.length - 1 > offset) {
			setOffset(offset + 1);
		} else {
			setOffset(0);
		}
	};

	return (
		<Dialog
			className={styles.galleryPopup}
			open={isOpen}
			onClose={() => setIsOpen(false)}
		>
			<Dialog.Panel>
				<div className={styles.popup}>
					<div className={styles.picture}>
						<img
							src={GalleryPOPData[offset].img}
							alt={GalleryPOPData[offset].name}
						/>
					</div>

					<button onClick={handleLeftArrowClick} className={styles.arrowsLeft}>
						<AiFillCaretLeft />
					</button>

					<button
						onClick={handleRightArrowClick}
						className={styles.arrowsRight}
					>
						<AiFillCaretRight />
					</button>

					<button
						onClick={() => setIsOpen(false)}
						className={styles.close}
					></button>
				</div>
			</Dialog.Panel>
		</Dialog>
	);
}

export default GalleryPopup;

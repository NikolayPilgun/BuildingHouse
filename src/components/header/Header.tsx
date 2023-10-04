import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogoImageData } from "../../data/logoData";
import { NavigationData } from "../../data/navigationData";
import useWindowDimensions from "../../utils/useWindowDimensions";
import styles from "./header.module.scss";

function Header() {
	const { width } = useWindowDimensions();
	const winDthSize = width ? width : 654;
	const mobile = winDthSize <= 655 ? true : false;
	const [menuOpened, setMenuOpened] = useState(false);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={LogoImageData[0].img} alt={LogoImageData[0].name} />
				<span>YourHouse</span>
			</div>
			<div className={styles.phone_number}>
				<a href="tel:+7(819)342-33-44">+7 (819) 342-33-44</a>
			</div>
			<nav className={styles.navigation}>
				{menuOpened === false && mobile === true ? (
					<div className={styles.bars} onClick={() => setMenuOpened(true)}>
						<img src={LogoImageData[1].img} alt={LogoImageData[1].name} />
					</div>
				) : (
					<>
						<div className={styles.bars} onClick={() => setMenuOpened(false)}>
							<img src={LogoImageData[2].img} alt={LogoImageData[2].name} />
						</div>
						<ul>
							{NavigationData.map((menu, i) => (
								<li key={i} onClick={() => setMenuOpened(false)}>
									<NavLink to={menu.path}>{menu.name}</NavLink>
								</li>
							))}
						</ul>
					</>
				)}
			</nav>
		</header>
	);
}

export default Header;

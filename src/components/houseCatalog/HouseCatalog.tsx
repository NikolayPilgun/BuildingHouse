import { useState } from "react";
import { Link } from "react-router-dom";
import { HCBanerData, HouseCatalogData } from "../../data/catalogData";
import styles from "./houseCatalog.module.scss";

function HouseCatalog() {
	const [catalogHouse, setCatalogHouse] = useState(HouseCatalogData);

	const onClickFilter = (data: string) => {
		let filterHouse = HouseCatalogData.filter((card) => card.filter === data);
		setCatalogHouse(filterHouse);
	};
	return (
		<div className={styles.houseCatalog}>
			<div
				style={{
					backgroundImage: ` url(${HCBanerData[0].img})`,
				}}
				className={styles.banner}
			></div>
			<div className={styles.title}>
				<h2>Каталог домов</h2>
				<div className={styles.text}>
					<p>
						В своём стремлении повысить качество жизни, они забывают, что
						граница обучения кадров создаёт предпосылки для прогресса
						профессионального сообщества. Как принято считать, непосредственные
						участники технического прогресса. Качество жизни, они забывают, что
						граница обучения кадров создаёт предпосылки для прогресса
						профессионального сообщества. Как принято считать, непосредственные
						участники технического прогресса.
					</p>
				</div>
				<div className={styles.filter}>
					<span
						onClick={() => {
							onClickFilter("CVN");
						}}
					>
						Проект дома тип - CVN
					</span>
					<span
						onClick={() => {
							onClickFilter("PNV");
						}}
					>
						Проект дома тип - PNV
					</span>
					<span
						onClick={() => {
							onClickFilter("XZN");
						}}
					>
						Проект дома тип - XZN
					</span>
				</div>
			</div>
			<div className={styles.content}>
				{catalogHouse.map((items, i) => (
					<div key={i} className={styles.item}>
						<Link to={items.type}>
							<img src={items.img} alt={items.name} />
						</Link>

						<Link to={items.type}>
							<span>{items.description}</span>
						</Link>
					</div>
				))}
			</div>
			<div className={styles.title}>
				<h3>Выбор компании</h3>
				<div className={styles.text}>
					<p>
						Чтобы купить деревянный дом и при этом быть уверенным, что он
						прослужит Вам долгие годы, следует серьезно подойти к вопросу выбора
						компании. При этом важным критерием принятия решения, после того,
						как вас предварительно устроила цена, является ее опыт работы,
						используемые технологии, профессионализм и квалификация
						специалистов, а также готовность решать вопросы, возникающие в
						процессе работы. Желательно, чтобы разработкой проекта и его
						дальнейшей реализацией занималась одна и та же компания, поэтому
						примерно 2/3 наших заказчиков обращаются к нам, чтобы не только
						спроектировать и заказать коттедж, но также построить его нашими
						силами. На протяжении многих лет мы занимаемся строительством
						финских домов под ключ в Москве, Санкт-Петербурге, Екатеринбурге,
						Казани, Челябинске, Тюмени, Саратове и других городах России,
						поэтому знаем все нюансы работы на различных этапах, начиная от
						проектирования и производства основных конструктивных элементов и
						заканчивая сборкой и отделкой. Мы с удовольствием поможем вам
						построить как уютный финский деревянный дом в 100 кв. м или гостевой
						домик, так и респектабельную загородную резиденцию на несколько
						семей.
					</p>
				</div>
			</div>
			<div className={styles.title}>
				<h3>Стоимость</h3>
				<div className={styles.text}>
					<p>
						Продажа финских деревянных домов YourHouse и их последующее
						строительство возможны практически в любом регионе России. Цены на
						поставку комплектов и возведение зависят в том числе от дальности
						региона и расположения участка. В среднем, стоимость строительства
						деревянного дома из клееного бруса 205х220мм составляет 850-1000
						евро за кв. м (данные цены актуальны для Москвы и Санкт-Петербурга).
						В цену входит:
					</p>
					<ul>
						<li>комплект</li>
						<li>доставка на участок из Финляндии</li>
						<li>монтаж (сборка)</li>
						<li>устройство фундамента</li>
						<li>устройство кровли</li>
						<li>наружная отделка</li>
					</ul>
					<p>
						Точную стоимость строительства «под ключ» можно рассчитать только
						согласно проектам – фундамента (КЖ), архитектуры (АР, КД),
						внутренних инженерных сетей (ОВ, ВК, ЭО, СС). Цена, указывается за 1
						кв. м. Объясняется это тем, что продажа включает в себя не только
						стеновой материал, но и окна, двери, лестницу, напольное покрытие,
						т. е. всю деревянную часть, а также требуемый для сборки крепеж.
						Более подробную информацию о строительстве финских деревянных домов
						YourHouse вы можете получить по телефонам в Санкт-Петербурге +7
						(819) 327-55-99 или Москве +7 (495) 669-33-44.
					</p>
					<p>
						Желательно, чтобы разработкой проекта и его дальнейшей реализацией
						занималась одна и та же компания, поэтому примерно 2/3 наших
						заказчиков обращаются к нам, чтобы не только спроектировать и
						заказать коттедж, но также построить его нашими силами. На
						протяжении многих лет мы занимаемся строительством финских домов под
						ключ в Москве, Санкт-Петербурге, Екатеринбурге, Казани, Челябинске,
						Тюмени, Саратове и других городах России, поэтому знаем все нюансы
						работы на различных этапах, начиная от проектирования и производства
						основных конструктивных элементов и заканчивая сборкой и отделкой.
						Мы с удовольствием поможем вам построить как уютный финский
						деревянный дом в 100 кв. м или гостевой домик, так и респектабельную
						загородную резиденцию на несколько семей. Тюмени, Саратове и других
						городах России, поэтому знаем все нюансы работы на различных этапах,
						начиная от проектирования и производства основных конструктивных
						элементов и заканчивая сборкой и отделкой. Мы с удовольствием
						поможем вам построить как уютный финский деревянный дом в 100 кв. м
						или гостевой домик, так и респектабельную загородную резиденцию на
						несколько семей.
					</p>
				</div>
			</div>
		</div>
	);
}

export default HouseCatalog;
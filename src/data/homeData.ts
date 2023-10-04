import homeCOH1 from "../assets/home/coh_1.jpg";
import homeCOH2 from "../assets/home/coh_2.jpg";
import homeCOH3 from "../assets/home/coh_3.jpg";
import homeGal1 from "../assets/home/gal_1.png";
import homeGal10 from "../assets/home/gal_10.png";
import homeGal2 from "../assets/home/gal_2.png";
import homeGal3 from "../assets/home/gal_3.png";
import homeGal4 from "../assets/home/gal_4.png";
import homeGal5 from "../assets/home/gal_5.png";
import homeGal6 from "../assets/home/gal_6.png";
import homeGal7 from "../assets/home/gal_7.png";
import homeGal8 from "../assets/home/gal_8.png";
import homeGal9 from "../assets/home/gal_9.png";
import homeBaner1 from "../assets/home/main_1.png";
import homeBaner2 from "../assets/home/main_2.png";
import homeBaner3 from "../assets/home/main_3.png";
import homeBaner4 from "../assets/home/main_4.png";
import homeBaner5 from "../assets/home/main_5.png";
import homeMat1 from "../assets/home/mat_1.png";
import homeSer1 from "../assets/home/ser_1.png";
import homeSer2 from "../assets/home/ser_2.png";
import homeSer3 from "../assets/home/ser_3.png";
import homeSer4 from "../assets/home/ser_4.png";

export interface IHomeDataBanner {
	name: string;
	img: string;
	title1: string;
	title2: string;
	button: string;
	path: string;
}
export interface IHomeData {
	name: string;
	img: string;
}
export interface IHomeDataDes {
	name: string;
	img: string;
	description: string;
	path: string;
}
export interface IHomeDataServis {
	name: string;
	img: string;
	description: string;
}

export const HomeDataBaner: IHomeDataBanner[] = [
	{
		name: "homeBaner1",
		img: homeBaner1,
		title1: "Элитные дома",
		title2: "в стиле хай-тек",
		button: "Подробнее",
		path: "/about",
	},
	{
		name: "homeBaner2",
		img: homeBaner2,
		title1: "Строительство",
		title2: "домов 'под ключ'",
		button: "Подробнее",
		path: "/about",
	},
	{
		name: "homeBaner3",
		img: homeBaner3,
		title1: "Коллекция",
		title2: "авторских проектов",
		button: "Подробнее",
		path: "/about",
	},
	{
		name: "homeBaner4",
		img: homeBaner4,
		title1: "25 лет опыта",
		title2: "в строительстве",
		button: "Подробнее",
		path: "/about",
	},
	{
		name: "homeBaner5",
		img: homeBaner5,
		title1: "Мы лучшие",
		title2: "в вашей стране",
		button: "Подробнее",
		path: "/about",
	},
];
export const HomeDataCOH: IHomeDataDes[] = [
	{
		name: "homeCOH1",
		img: homeCOH1,
		description: "Проект дома CVN - 832",
		path: "/housecatalog/CVN832",
	},
	{
		name: "homeCOH2",
		img: homeCOH2,
		description: "Проект дома PNV - 402",
		path: "/housecatalog/PNV402",
	},
	{
		name: "homeCOH3",
		img: homeCOH3,
		description: "Проект дома XZN - 734",
		path: "/housecatalog/XZN734",
	},
];
export const HomeDataMat: IHomeData[] = [
	{
		name: "homeMat1",
		img: homeMat1,
	},
];
export const HomeDataSer: IHomeDataServis[] = [
	{
		name: "homeSer1",
		img: homeSer1,
		description: "Дизайн",
	},
	{
		name: "homeSer2",
		img: homeSer2,
		description: "Производство",
	},
	{
		name: "homeSer3",
		img: homeSer3,
		description: "Доставка",
	},
	{
		name: "homeSer4",
		img: homeSer4,
		description: "Сборка",
	},
];
export const HomeDataGal: IHomeData[] = [
	{
		name: "homeGal1",
		img: homeGal1,
	},
	{
		name: "homeGal2",
		img: homeGal2,
	},
	{
		name: "homeGal3",
		img: homeGal3,
	},
	{
		name: "homeGal4",
		img: homeGal4,
	},
	{
		name: "homeGal5",
		img: homeGal5,
	},
	{
		name: "homeGal6",
		img: homeGal6,
	},
	{
		name: "homeGal7",
		img: homeGal7,
	},
	{
		name: "homeGal8",
		img: homeGal8,
	},
	{
		name: "homeGal9",
		img: homeGal9,
	},
	{
		name: "homeGal10",
		img: homeGal10,
	},
];

import hcBaner_1 from "../assets/houseCatalog/hcBaner_1.png";
import HouseCata1 from "../assets/houseCatalog/hcP_1.png";
import HouseCata10 from "../assets/houseCatalog/hcP_10.png";
import HouseCata11 from "../assets/houseCatalog/hcP_11.png";
import HouseCata12 from "../assets/houseCatalog/hcP_12.png";
import HouseCata13 from "../assets/houseCatalog/hcP_13.png";
import HouseCata14 from "../assets/houseCatalog/hcP_14.png";
import HouseCata2 from "../assets/houseCatalog/hcP_2.png";
import HouseCata3 from "../assets/houseCatalog/hcP_3.png";
import HouseCata4 from "../assets/houseCatalog/hcP_4.png";
import HouseCata5 from "../assets/houseCatalog/hcP_5.png";
import HouseCata6 from "../assets/houseCatalog/hcP_6.png";
import HouseCata7 from "../assets/houseCatalog/hcP_7.png";
import HouseCata8 from "../assets/houseCatalog/hcP_8.png";
import HouseCata9 from "../assets/houseCatalog/hcP_9.png";

export interface IHCBanerData {
	name: string;
	img: string;
}
export interface IHouseCatalogData {
	name: string;
	img: string;
	description: string;
	type: string;
	filter: string;
}

export const HCBanerData: IHCBanerData[] = [
	{
		name: "hcBaner_1",
		img: hcBaner_1,
	},
];

export const HouseCatalogData: IHouseCatalogData[] = [
	{
		name: "HouseCata1",
		img: HouseCata1,
		description: "Проект дома CVN - 402",
		type: "CVN402",
		filter: "CVN",
	},
	{
		name: "HouseCata2",
		img: HouseCata2,
		description: "Проект дома PNV - 133",
		type: "PNV133",
		filter: "PNV",
	},
	{
		name: "HouseCata3",
		img: HouseCata3,
		description: "Проект дома XZN - 298",
		type: "XZN298",
		filter: "XZN",
	},
	{
		name: "HouseCata4",
		img: HouseCata4,
		description: "Проект дома CVN - 512",
		type: "CVN512",
		filter: "CVN",
	},
	{
		name: "HouseCata5",
		img: HouseCata5,
		description: "Проект дома XZN - 111",
		type: "XZN111",
		filter: "XZN",
	},
	{
		name: "HouseCata6",
		img: HouseCata6,
		description: "Проект дома PNV - 232",
		type: "PNV232",
		filter: "PNV",
	},
	{
		name: "HouseCata7",
		img: HouseCata7,
		description: "Проект дома CVN - 342",
		type: "CVN342",
		filter: "CVN",
	},
	{
		name: "HouseCata8",
		img: HouseCata8,
		description: "Проект дома CVN - 332",
		type: "CVN332",
		filter: "CVN",
	},
	{
		name: "HouseCata9",
		img: HouseCata9,
		description: "Проект дома PNV - 414",
		type: "PNV414",
		filter: "PNV",
	},
	{
		name: "HouseCata10",
		img: HouseCata10,
		description: "Проект дома PNV - 542",
		type: "PNV542",
		filter: "PNV",
	},
	{
		name: "HouseCata11",
		img: HouseCata11,
		description: "Проект дома XZN - 189",
		type: "XZN189",
		filter: "XZN",
	},
	{
		name: "HouseCata12",
		img: HouseCata12,
		description: "Проект дома XZN - 212",
		type: "XZN212",
		filter: "XZN",
	},
	{
		name: "HouseCata13",
		img: HouseCata13,
		description: "Проект дома PNV - 872",
		type: "PNV872",
		filter: "PNV",
	},
	{
		name: "HouseCata14",
		img: HouseCata14,
		description: "Проект дома XZN - 873",
		type: "XZN873",
		filter: "XZN",
	},
];

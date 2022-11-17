import ServicesBaner from "../assets/servic/serBaner_1.png";
import Services1 from "../assets/servic/serP_1.png";
import Services2 from "../assets/servic/serP_2.png";
import Services3 from "../assets/servic/serP_3.png";
import Services4 from "../assets/servic/serP_4.png";

export interface IServicesData {
	name: string;
	img: string;
}

export const ServicesBanerData: IServicesData[] = [
	{
		name: "ServicesBaner",
		img: ServicesBaner,
	},
];
export const ServicesData: IServicesData[] = [
	{
		name: "Services1",
		img: Services1,
	},
	{
		name: "Services2",
		img: Services2,
	},
	{
		name: "Services3",
		img: Services3,
	},
	{
		name: "Services4",
		img: Services4,
	},
];

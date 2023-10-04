import MaterialsBaner from "../assets/materials/matBaner_1.png";
import Materials1 from "../assets/materials/matP_1.png";
import Materials2 from "../assets/materials/matP_2.png";
import Materials3 from "../assets/materials/matP_3.png";
import Materials4 from "../assets/materials/matP_4.png";
import Materials5 from "../assets/materials/matP_5.png";

export interface IMaterialsData {
	name: string;
	img: string;
}

export const MaterialsBanerData: IMaterialsData[] = [
	{
		name: "MaterialsBaner",
		img: MaterialsBaner,
	},
];
export const MaterialsData: IMaterialsData[] = [
	{
		name: "Materials1",
		img: Materials1,
	},
	{
		name: "Materials2",
		img: Materials2,
	},
	{
		name: "Materials3",
		img: Materials3,
	},
	{
		name: "Materials4",
		img: Materials4,
	},
	{
		name: "Materials5",
		img: Materials5,
	},
];

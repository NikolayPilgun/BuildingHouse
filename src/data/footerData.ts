import facebook from "../assets/footer/fot_1.png";
import instagram from "../assets/footer/fot_2.png";
import Logo_2 from "../assets/footer/logo_2.png";

export interface IHomeData {
	name: string;
	img: string;
}

export const FooterImageData: IHomeData[] = [
	{
		name: "facebook",
		img: facebook,
	},
	{
		name: "instagram",
		img: instagram,
	},
	{
		name: "Logo_2",
		img: Logo_2,
	},
];

import logo from "../assets/logo/logo.png";

export interface IHomeData {
	name: string;
	img: string;
}

export const LogoImageData: IHomeData[] = [
	{
		name: "Logo",
		img: logo,
	},
];

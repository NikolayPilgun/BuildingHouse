import bars from "../assets/logo/bars.png";
import close from "../assets/logo/close2.png";
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
	{
		name: "bars",
		img: bars,
	},
	{
		name: "close",
		img: close,
	},
];

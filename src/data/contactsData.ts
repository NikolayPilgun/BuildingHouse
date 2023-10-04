import ContactsBaner from "../assets/contacts/conBaner_1.png";
import ContactsMap from "../assets/contacts/conMap.png";

export interface IContactsData {
	name: string;
	img: string;
}

export const ContactsData: IContactsData[] = [
	{
		name: "ContactsBaner",
		img: ContactsBaner,
	},
	{
		name: "ContactsMap",
		img: ContactsMap,
	},
];

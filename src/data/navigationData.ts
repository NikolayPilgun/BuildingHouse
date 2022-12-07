export interface INavigationData {
	name: string;
	path: string;
}

export const NavigationData: INavigationData[] = [
	{ name: "Главная", path: "/" },
	{ name: "О нас", path: "/about" },
	{ name: "Каталог домов", path: "/housecatalog" },
	{ name: "Материалы", path: "/materials" },
	{ name: "Услуги", path: "/services" },
	{ name: "Галерея", path: "/gallery" },
	{ name: "Контакты", path: "/contacts" },
];

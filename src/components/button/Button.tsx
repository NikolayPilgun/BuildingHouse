import styles from "./button.module.scss";

type TProps = {
	children: string;
};

const Button: React.FC<TProps> = ({ children }) => {
	return <button className={styles.button}>{children}</button>;
};

export default Button;

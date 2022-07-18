import Image from "next/image";
import React from "react";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard: React.FC = () => {
	return (
		<div className={styles.container}>
			<Image src="/images/pizza.png" width="500" height="500" />
			<h1 className={styles.title}>FIORI DI ZUCCA</h1>
			<span className={styles.price}>$19.90</span>
			<p className={styles.desc}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Cupiditate sapiente unde harum! Accusantium, eum quisquam!
			</p>
		</div>
	);
};
export default PizzaCard;

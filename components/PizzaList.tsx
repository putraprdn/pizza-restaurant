import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
			<p className={styles.desc}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Consectetur temporibus cum voluptate tempora aspernatur nisi
				possimus, consequuntur quis sint, inventore distinctio molestias
				rem, nobis iure dignissimos quam incidunt asperiores animi.
			</p>
			<div className={styles.wrapper}>
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
			</div>
		</div>
	);
};
export default PizzaList;

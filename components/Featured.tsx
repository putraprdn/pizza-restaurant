import Image from "next/image";
import styles from "../styles/Featured.module.css";
import React, { useState } from "react";

const Featured: React.FC = () => {
	const [index, setIndex] = useState(0);
	const images = [
		"/images/featured.png",
		"/images/featured2.png",
		"/images/featured3.png",
	];

	const handleArrow = (direction: string) => {
		console.log('direction', direction);
		if (direction === "l") {
			setIndex(index !== 0 ? index - 1 : 2);
		}
		if (direction === "r") {
			setIndex(index !== 2 ? index + 1 : 0);
		}
	};
	console.log(index);

	return (
		<div className={styles.container}>
			<div
				className={styles.arrowContainer}
				style={{ left: 0 }}
				onClick={() => handleArrow("l")}
			>
				<Image
					src="/images/arrowl.png"
					layout="fill"
					objectFit="contain"
				/>
			</div>
			<div
				className={styles.wrapper}
				style={{ transform: `translateX(${-100 * index}vw)` }}
			>
				{images.map((image, i) => (
					<div className={styles.imgContainer} key={i}>
						<Image src={image} layout="fill" objectFit="contain" />
					</div>
				))}
			</div>
			<div
				className={styles.arrowContainer}
				style={{ right: 0 }}
				onClick={() => handleArrow("r")}
			>
				<Image
					src="/images/arrowr.png"
					layout="fill"
					objectFit="contain"
				/>
			</div>
		</div>
	);
};
export default Featured;

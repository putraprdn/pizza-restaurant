import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizza Restaurant</title>
				<meta name="description" content="Best pizza in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Featured />
			<Footer />
		</div>
	);
};

export default Home;

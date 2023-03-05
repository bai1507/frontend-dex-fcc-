import React from "react";
import styles from "../styles";
import { useGetCryptosQuery } from "../utils/getCrypToApi";
import milllify from "millify";
import CryptoCurrencies from "../components/CryptoCurrencies";
import CryptoNews from "../components/CryptoNews"
import Loading from "../components/Loading"
const Currency = () => {
	const { data, isFetching } = useGetCryptosQuery(10);

	const globalStates = data?.data?.stats;
	const cryptos = data?.data?.coins;
	if (isFetching) return  <Loading />;

	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div class="grid grid-rows-3 grid-flow-col gap-2 h-screen overflow-scroll no-scrollbar">
					<div class="row-span-3  px-5 py-6">
						<p className={styles.cryptoTitle}>Top 10 Currencies</p>
						<CryptoCurrencies cryptos={cryptos} />
					</div>
					<div className={styles.cryptoContainer}>
						<div className={styles.cryptoGrid}>
							<div className={styles.cryptoTitle}>Global Crypto Stats:</div>
							{Object.entries(globalStates).map(([key, value], index) => (
								<div className={styles.cryptoSubTitle}>
									{key}:<div className={styles.cryptoText}>${milllify(value)}</div>
								</div>
							))}
						</div>
					</div>
				
					<div class="col-span-2">
						<CryptoNews simplified/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Currency;

import React, { useState } from "react";
import styles from "../styles";
import {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
} from "../utils/getCrypToApi";
import milllify from "millify";
import { CryptoCurrencies, LineChart, Loading } from "../components";
import { useParams } from "react-router-dom";

const CurrencyDetails = () => {
	const { coinId } = useParams();
	const [timePeriod, setTimePeriod] = useState("24h");
	const { data } = useGetCryptosQuery(10);
	console.log(timePeriod)

	const { data: coinData, isFetching } = useGetCryptoDetailsQuery(coinId);
	const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
	const cryptos = data?.data?.coins;
	const cryptoDetails = coinData?.data?.coin;
	const timeOptions = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

	if (!cryptoDetails || !data || !coinHistory) return <Loading />;
	const stats = [
		{ title: "Price to USD", value: `$${milllify(cryptoDetails.price)}` },
		{ title: "Rank", value: cryptoDetails.rank },
		{ title: "24h Volume", value: `$${milllify(cryptoDetails["24hVolume"])}` },
		{ title: "Market Cap", value: `$${milllify(cryptoDetails.marketCap)}` },
		{ title: "All-time-high", value: `$${milllify(cryptoDetails.allTimeHigh.price)}` },
	];

	const genericStats = [
		{ title: "Number of Markets", value: cryptoDetails.numberOfMarkets },
		{ title: "Number of Exchanges", value: cryptoDetails.numberOfExchanges },
		{ title: "Total Supply", value: `$ ${milllify(cryptoDetails.supply.total)}` },
		{
			title: "Circulating Supply",
			value: `$ ${milllify(cryptoDetails.supply.circulating)}`,
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div class="grid  grid-flow-col gap-2 ">
					<div class="row-span-3  px-5 py-6">
						<p className={styles.cryptoTitle}>Top 10 Currencies </p>
						<CryptoCurrencies cryptos={cryptos} />
					</div>
					<div class="col-span-2 min-w-[1100px] bg-side">
						<div className="">
							<select
								className={styles.newsSelect}
								onChange={(event) => setTimePeriod(event.target.value)}
							>
								<option selected>Time Period</option>
								{timeOptions.map((time) => (
									<option value={time}>{time}</option>
								))}
							</select>
						</div>
						<LineChart
							coinHistory={coinHistory}
							currentPrice={cryptoDetails.price}
							coinName={cryptoDetails.name}
						/>
					</div>
					<div className={`${styles.cryptoContainer} min-w-[1100px]`}>
						<div className={styles.cryptoGrid}>
							<div className={styles.cryptoTitle}>
								{cryptoDetails.name} ({cryptoDetails.tags[0]}) Price
							</div>

							{stats?.map((coin) => (
								<div className={styles.cryptoSubTitle}>
									{coin.title}:
									<div className={styles.cryptoText}>{milllify(coin.value)}</div>
								</div>
							))}
							{genericStats?.map((coin) => (
								<div className={styles.cryptoSubTitle}>
									{coin.title}:
									<div className={styles.cryptoText}>{milllify(coin.value)}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrencyDetails;

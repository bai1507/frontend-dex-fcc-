import React from "react";
import styles from "../styles";
import { useGetCryptoNewsQuery } from "../utils/getCrypNewsApi";
import {Loading} from "../components";

const CryptoNews = ({ simplified}) => {
	const { data: cryptoNews, isFetching:isNewsFetching } = useGetCryptoNewsQuery(simplified ? 9 : 20);
	// const { data: cryptos, isFetching:isCryptosFetching } = useGetCryptosQuery(100);
	// const [newsCategory,setNewsCategory] = useState("Cryptocurrency")

	
	if (isNewsFetching ) return  <Loading />

	return (
		<div>
			{/* <div className="w-full flex justify-center ">
			<select
				id="countries"
				className={styles.newsSelect}
				onChange={(value)=>setNewsCategory(value)}
			>
				<option selected>Cryptocurrency</option>
				{cryptos.data.coins.map((coin)=>(
					<option value={coin.name}>{coin.name}</option>
				))}
				
			</select>
			</div> */}
			<div className={styles.newsContainer}>
				{cryptoNews?.map((news) => (
					<div className={styles.newsBlock}>
						<div class="px-5 pt-5 pb-1 ">
							<h5 className={styles.newsTitle}>
								{news.title}
							</h5>
							<p className={styles.newsDescription}>
								{news.description}
							</p>
							{/* <p className={styles.newsDescription}>
								{news.date}
							</p> */}
						</div>
						<div class="pb-3 pl-5  ">
							<a
								href={news.url}
								className={styles.newsAtag}
							>
								Read more
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CryptoNews;

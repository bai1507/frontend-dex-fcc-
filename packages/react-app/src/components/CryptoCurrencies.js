import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import styles from "../styles";

// import { useGetCryptosQuery } from '../utils/getCrypToApi';
const CryptoCurrencies = ({ cryptos }) => {

	return (
		<div>
			<ul>
				{cryptos?.map((currency) => (
					<li className={`${styles.currencyListItem} 'bg-site-dim2':''} cursor-pointer `}>
						<Link to={`/currencyDetails/${currency.uuid}`}>
							<div className="text-black px-4 py-4 grid grid-rows-2 grid-flow-col gap-x-2 bg-white border rounded-lg border-2  hover:border-indigo-300">
								<div className="flex gap-x-2">
									<div>
										<img src={currency.iconUrl} width="30" height="30" />
									</div>
									<p className="flex">{currency.symbol}</p>
								</div>
								<p>Price:{millify(currency.price)}</p>

								<p>Market Cap:{millify(currency.marketCap)}</p>
								<p
									className={`${
										currency.change.indexOf("-") < 0 ? "text-green-500" : "text-red-500"
									}`}
								>
									Daily Change:{millify(currency.change)}%
								</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CryptoCurrencies;

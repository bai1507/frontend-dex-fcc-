import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Currency from "./pages/Currency";
import CurrencyDetails from "./pages/CurrencyDetails";

import App from "./App";
import {Header } from "./components";
import styles from "./styles";


const RouterConfig = () => {
	return (
		<div>
			<Router>
      		<Header />
				<Routes>
					<Route path="/currencyDetails/:coinId" element={<CurrencyDetails />}  />
					<Route path="/currency" element={<Currency />} />

					<Route path="/" element={<App />} />
				</Routes>
			</Router>
			
		</div>
	);
};
export default RouterConfig;

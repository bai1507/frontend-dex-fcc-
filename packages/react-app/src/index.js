import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";
import { DAPP_CONFIG } from "./config";
import RouterConfig from "./RouterConfig";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<DAppProvider config={DAPP_CONFIG}>
			<Provider store={store}>
				<RouterConfig />
			</Provider>
		</DAppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

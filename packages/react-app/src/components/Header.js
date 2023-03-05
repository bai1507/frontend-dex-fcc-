import {Link} from "react-router-dom";
import { logo } from "../assets";

import { WalletButton } from "./";
import styles from "../styles";

const Header = () => {
	return (
		<div className="flex px-16 w-full bg-site-black">
			<nav className={styles.header}>
				<div>
					{/* <img
              // class="absolute mt-14 ml-24 clear-both	z-10	"
              src="/logo.png"
              height="150"
              width="150"
            /> */}
					<img
						src={logo}
						alt="uniswap logo"
						className="w-16 h-16 object-contain"
						height="150"
						width="150"
					/>
				</div>
				<h1
					className={
						"py-4 px-6 font-bold text-3xl text-white flex-none tracking-wide font-poppins "
					}
				>
					YBitSwap
				</h1>
				<div className="flex max-w-md mx-auto items-center pl-36 flex-none"></div>
				<div>
					<div className="flex flex-row items-center ">
						<Link to="/" className="flex">
							<p className="mr-8 p-6 font-bold text-pink-600 hover:text-blue-500 ">
								Home
							</p>
						</Link>
						<Link to="/" className="flex">
							<p className="mr-8 p-6 font-bold text-pink-600 hover:text-blue-500	">
								Exchange
							</p>
						</Link>
						
						<Link to="/currency" className="flex">
							<p className="mr-8 p-6 font-bold text-pink-600 hover:text-blue-500	">
								Tokens
							</p>
						</Link> 
						<WalletButton />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;

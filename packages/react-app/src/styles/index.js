const styles = {
  // App.js
  container: "flex justify-center min-h-screen sm:px-16 px-6 bg-site-black",
  innerContainer:
    "flex justify-between items-center flex-col max-w-[1480px] w-full ",
  header: "flex flex-row justify-between items-center w-full sm:py-10 py-6",
  exchangeContainer:
    "flex-1 flex justify-start items-center flex-col w-full mt-10",
  headTitle: "text-white font-poppins font-black text-5xl tracking-wide",
  subTitle: "text-dim-white font-poppins font-medium mt-3 text-base",
  exchangeBoxWrapper: "mt-10 w-full flex justify-center",
  exchangeBox:
    "relative md:max-w-[700px] md:min-w-[500px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl",
  exchange:
    "w-full min-h-[400px] bg-site-black backdrop-blur-[4px] rounded-3xl shadow-card flex p-10",

  // AmountIn & AmountOut
  amountContainer:
    "flex justify-between items-center flex-row w-full min-w-full bg-site-dim border-[1px] border-transparent hover:border-site-dim2 min-h-[96px] sm:p-8 p-4 rounded-[20px]",
  amountInput:
    "w-full min-w-fit	 flex-1 bg-transparent outline-none font-poppins font-black text-2xl text-white",
  currencyButton:
    "flex flex-row items-center bg-site-dim2 py-2 px-4 rounded-xl font-poppins font-bold text-white",
  currencyList:
    "min-w-max	absolute z-10 right-0 bg-site-black border-[1px] border-site-dim2 w-full mt-2 rounded-lg min-w-[170px] overflow-hidden",
  currencyListItem:
    "font-poppins font-medium text-base text-white hover:text-dim-white px-5 py-3 hover:bg-site-dim2 cursor-pointer",

  // Exchange
  actionButton:
    "border-none outline-none px-6 py-2 font-poppins font-bold text-lg rounded-2xl leading-[24px] transition-all min-h-[56px]",
  message: "font-poppins font-lg text-white font-bold mt-7",

  // WalletButton
  walletButton:
    "bg-site-pink border-none outline-none px-6 py-2 font-poppins font-bold text-lg text-white rounded-3xl leading-[24px] hover:bg-pink-600 transition-all",

  // loader
  loader: "flex justify-center items-center flex-col w-full min-h-full",
  loaderImg: "w-56 h-56 object-contain",
  loaderText:
    "font-poppins font-normal text-dim-white text-lg text-center mt-10 font-bold",

  // balance
  balance: "w-full text-left mt-2 ml-2",
  balanceText: "font-poppins font-normal text-dim-white",
  balanceBold: "font-semibold text-white",

  //currency
  cryptoContainer:" col-span-2 px-5 py-7 rounded-md border-solid	bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400",
  cryptoGrid:"grid grid-cols-3 gap-y-10",
  cryptoTitle:"col-span-3 text-white font-poppins font-black text-3xl tracking-wide",
  cryptoSubTitle:"text-gray-500	font-poppins font-black text-xl tracking-wide ",
  cryptoText:"text-3xl px-6 underline font-sans	text-zinc-700	",
  //news
  newsSelect : "block  p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  newsContainer :"flex px-5 py-5 grid grid-cols-3 gap-4 ",
  newsBlock :"h-50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
  newsTitle:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
  newsDescription:"mb-3 font-normal text-gray-700 dark:text-gray-400 scroll-pl-6 ",
  newsAtag:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
};

export default styles;

import React, { useEffect, useState } from "react";
import abi from "./abi.json";
import abi_skuy from "./abi-skuy.json";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

export default function Mintbtn() {
  const REACT_APP_CONTRACT_ADDRESS =
    "0xA8b4d84A937980b2966688756BebeB733649b68B";
  const REACT_APP_CONTRACT_ADDRESS_skuy =
    "0x2f47898684492e3018C6f4E557d5FBb84ED20c96";
  const SELECTEDNETWORK = "4";
  const SELECTEDNETWORKNAME = "Ethereum";

  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState(0);
  const [price, setPrice] = useState("X");
  const [total, setTotal] = useState(0);
  const [collection, setCollection] = useState([]);
  const [metamaskAddress, setMetamaskAddress] = useState("");
  let ct, web3;

  const loadweb3 = async () => {
    if (!initializeWeb3()) return;

    let p = price * quantity;
    if ((await web3.eth.getBalance(metamaskAddress)) < p) {
      toast.error("Insufficient Eth Balance!");
      return;
    }

    let ct_skuy = new web3.eth.Contract(
      abi_skuy,
      web3.utils.toChecksumAddress("0x2f47898684492e3018c6f4e557d5fbb84ed20c96")
    );

    try {
      await toast.promise(
        async () => {
          if (
            (await ct_skuy.methods.balanceOf(metamaskAddress).call()) <
            (await ct.methods.SKUY().call())
          ) {
            toast.error("Insufficient Skuy Balance!");
            return;
          }
          await ct.methods
            .mint(quantity)
            .send({ from: metamaskAddress, value: p });
        },
        {
          pending: "Mint in Progress!!",
          success: "Mint Success!!",
          error: "Mint Rejected!!",
        }
      );
    } catch (err) {}
  };

  async function checkNetwork() {
    if ((await web3.eth.net.getId()) == SELECTEDNETWORK) return true;
    toast.error('Enable "' + SELECTEDNETWORKNAME + '" network!');
    return false;
  }

  useEffect(() => {
    initializeWeb3();
    loadcollection();
  }, []);

  const initializeWeb3 = async () => {
    if (!connectWallet()) return false;
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      web3 = window.web3;

      if (!checkNetwork()) return false;

      ct = new web3.eth.Contract(abi, REACT_APP_CONTRACT_ADDRESS);
      setStatus(await ct.methods.status().call());
      setPrice(await ct.methods.PRICE().call());
      setTotal(await ct.methods.totalSupply().call());
      return true;
    } else {
      toast.error(
        "Non-Ethereum browser detected. Please use a crypto wallet such as MetaMask!"
      );
      return false;
    }
  };

  const connectWallet = async () => {
    await window.ethereum.enable();
    let m = await web3.eth.getAccounts();
    m = m[0];
    setMetamaskAddress(m);

    if (status == 0) {
      toast.error("Sale not Started!");
    } else if (status == 3) {
      // setWalletConnected(true);
    }
  };

  const loadcollection = async () => {
    await initializeWeb3();
    let arr = [];
    for (let i = 1; i <= total; i++) {
      if ((await ct.methods.ownerOf(i).call()) == metamaskAddress) {
        arr.push(i);
      }
    }
    console.log(arr);
    setCollection(arr);
  };

  return (
    <>
      <div className="row BBB">
        <div className="col-md-12 p-0">
          <h2 className="rare1">{total}/10.000 MINTED</h2>
          <div className="row justify-content-center pt-3 quantity align-items-center">
            <div className="col-4">
              <img
                src="./imgs/minus.png"
                className="ml-auto"
                onClick={() =>
                  setQuantity(quantity > 1 ? quantity - 1 : quantity)
                }
              />
            </div>
            <div className="col-4">
              <span>{quantity}</span>
            </div>
            <div className="col-4">
              <img
                className="mr-auto"
                src="./imgs/plus.png"
                onClick={() => setQuantity(quantity + 1)}
              />
            </div>
          </div>
          <div className="pt-5">
            <button className="btn7" onClick={() => loadweb3()}>
              MINT
            </button>
          </div>
          <h2 className="rare1 text-white pt-5">
            Mint Price: {(price * quantity) / 10 ** 18} BNB
          </h2>
        </div>
      </div>
      <a id="coll"></a>
      <h1 className="heading1 my-4 py-4">My Collection</h1>
      <div className="row">
        {collection.map((x, i) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 py-3">
              <a
                href={
                  "https://testnets.opensea.io/assets/rinkeby/0xa8b4d84a937980b2966688756bebeb733649b68b/" +
                  x
                }
                target="_blank"
              >
                <img className="w-100" src={"./imgs/slider" + x + ".png"} />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

// <div className="AAA">
//   <div className="container-fluid  ">
//     <div className="row hy  px-2 justify-content-center">
//       <div className="col-12 opt">
//         <h3 className="text-white py-4">
//           <small>
//             {status == 1
//               ? "PRE SALE ACTIVE"
//               : status == 2
//               ? "PUBLIC SALE ACTIVE"
//               : "SALE NOT ACTIVE"}
//           </small>
//           <br />
//           <small>
//             Price: {((price / 10 ** 18) * quantity).toFixed(2)}ETH
//           </small>
//           <br />
//           <small>Max per Address: {maxallowed}</small>
//         </h3>

//         <div className="quantityselector d-flex justify-content-center align-items-center pb-2">
//           <button
//             className="count btn mx-4 "
//             onClick={() => setQuantity(quantity - 1)}
//             disabled={quantity <= 1}
//           >
//             -
//           </button>
//           <span className="quantity ">
//             {quantity}
//             <span
//               className="d-block text-white maxbtn p-1"
//               onClick={() => setQuantity(maxallowed)}
//             >
//               MAX
//             </span>
//           </span>
//           <button
//             className="count btn mx-3 "
//             onClick={() => setQuantity(quantity + 1)}
//             disabled={quantity >= maxallowed}
//           >
//             +
//           </button>
//         </div>

//         <br />
//         <br />

//         <svg
//           className="bubbles"
//           xmlns="http://www.w3.org/2000/svg"
//           version="1.1"
//         >
//           <defs>
//             <filter id="gooey">
//               <feGaussianBlur
//                 in="SourceGraphic"
//                 stdDeviation="5"
//                 result="blur"
//               />
//               <feColorMatrix
//                 in="blur"
//                 type="matrix"
//                 values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
//                 result="highContrastGraphic"
//               />
//               <feComposite
//                 in="SourceGraphic"
//                 in2="highContrastGraphic"
//                 operator="atop"
//               />
//             </filter>
//           </defs>
//         </svg>
//         {walletConnected ? (
//           <button onClick={loadweb3} id="gooey-button">
//             MINT
//             <span className="bubbles">
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//             </span>
//           </button>
//         ) : (
//           <button onClick={connectWallet} id="gooey-button">
//             CONNECT
//             <span className="bubbles">
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//               <span className="bubble"></span>
//             </span>
//           </button>
//         )}
//       </div>
//     </div>
//   </div>
// </div>

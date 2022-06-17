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
  const [mintdone, setMintdone] = useState(false);
  const [price, setPrice] = useState("X");
  const [total, setTotal] = useState(0);
  const [collection, setCollection] = useState([]);
  const [wallet, setWallet] = useState("Connect");

  let ct, web3;

  const loadweb3 = async () => {
    window.web3 = new Web3(window.ethereum);
    web3 = window.web3;

    await window.ethereum.enable();
    let m = await web3.eth.getAccounts();
    m = m[0];

    if ((await web3.eth.net.getId()) != SELECTEDNETWORK) {
      toast.error('Enable "' + SELECTEDNETWORKNAME + '" network!');
      return false;
    }

    ct = new web3.eth.Contract(abi, REACT_APP_CONTRACT_ADDRESS);

    let p = (await ct.methods.PRICE().call()) * quantity;

    if ((await web3.eth.getBalance(m)) < p) {
      toast.error("Insufficient Eth Balance!");
      return;
    }

    let ct_skuy = new web3.eth.Contract(
      abi_skuy,
      REACT_APP_CONTRACT_ADDRESS_skuy
    );

    try {
      await toast.promise(
        async () => {
          if (
            (await ct_skuy.methods.balanceOf(m).call()) <
            (await ct.methods.SKUY().call())
          ) {
            toast.error("Insufficient Skuy Balance!");
            return;
          }
          await ct.methods.mint(quantity).send({ from: m, value: p });
        },
        {
          pending: "Mint in Progress!!",
          success: "Mint Success!!",
          error: "Mint Rejected!!",
        }
      );
      setMintdone(true);
    } catch (err) {}
  };

  useEffect(() => {
    initializeWeb3();
  }, []);

  const initializeWeb3 = async () => {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      web3 = window.web3;

      await window.ethereum.enable();
      let m = await web3.eth.getAccounts();
      m = m[0];

      if ((await web3.eth.net.getId()) != SELECTEDNETWORK) {
        toast.error('Enable "' + SELECTEDNETWORKNAME + '" network!');
        return false;
      }

      ct = new web3.eth.Contract(abi, REACT_APP_CONTRACT_ADDRESS);

      let s = await ct.methods.status().call();
      let t = await ct.methods.totalSupply().call();
      let p = await ct.methods.PRICE().call();

      setPrice(p);
      setTotal(t);

      loadcollection(t, m);

      if (s == 0) {
        toast.error("Sale not Started!");
        return false;
      }
      return true;
    } else {
      toast.error(
        "Non-Ethereum browser detected. Please use a crypto wallet such as MetaMask!"
      );
      return false;
    }
  };

  const loadcollection = async (t, m) => {
    let arr = [];
    for (let i = 1; i <= t; i++) {
      if ((await ct.methods.ownerOf(i).call()) == m) {
        arr.push(i);
      }
    }
    setCollection(arr);
  };

  const connectwallet = async () => {
    window.web3 = new Web3(window.ethereum);
    web3 = window.web3;
    await window.ethereum.enable();
    let m = await web3.eth.getAccounts();
    m = m[0];

    setWallet(
      m.substring(0, 10) + "...." + m.substring(m.length - 10, m.length)
    );
  };

  return (
    <>
      <div className="container-fluid sec1">
        <div className="row pt-3">
          <div className="col-1"></div>
          <div className="col-10">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img className="logo" src="./imgs/logo.png" />{" "}
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item px-2 pt-1">
                      <a className="nav-link " aria-current="page" href="#mi">
                        Mint Now
                      </a>
                    </li>
                    <li className="nav-item px-2 pt-1">
                      <a className="nav-link" href="#coll">
                        Collection
                      </a>
                    </li>
                  </ul>
                  <button className="btn-nav" onClick={() => connectwallet()}>
                    {wallet}
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <hr className="line1" />
      <div className="container-fluid sec1">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-12 text-center">
              <p className="heading">Sekuya Kingdom x Inspiring Creators</p>
              <h1 className="heading1">10.000 Rare NFT</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid collection">
        <div className="container">
          <div className="row AAA mt-5">
            <div className="col-3"></div>
            {mintdone ? (
              <div className="col-md-6 text-center shad ">
                <h2 className="rare">
                  CONGRATULATIONS!
                  <br />
                  You got {quantity} Rare NFT!
                </h2>
                <div className="awesome pt-3">
                  <button className="awe">Awesome!</button>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="col-3"></div>
          </div>
        </div>
      </div>
      <a id="mi"></a>
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

import React from "react";
import "./Home.css";
import Mintbtn from "./MintBtn";

export default function Page1() {
  return (
    <div className="sec1">
      <div className="container-fluid sec1">
        <Mintbtn />
      </div>
      <div className="container-fluid sec1">
        <div className="container">
          <div className="row story">
            <div className="col-md-12 text-center">
              <p className="text-white story">© 2022 Sekuya Multiverse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

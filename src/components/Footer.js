import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h3>MORE INFORMATION ABOUT US</h3>
            <h1 className="list-unstyled">
              <li>+212 521502122</li>
              <li>Marrakesh, Morocco</li>
              <li>123 Street</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col1">
            <h3>OUR TEAM</h3>
            <h1 className="list-unstyled">
              <li>Nasroallah Saad</li>
              <li>Sami Srhir</li>
              <li>Amine Bakiz</li>
            </h1>
          </div>
          
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()}  | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
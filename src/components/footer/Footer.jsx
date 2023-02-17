import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    @2022-2023 YOUTV.LTD INDIA
                </div>
                <div className="socialIcons">
                    <span className="ficon">
                        <FaFacebookF />
                    </span>
                    <span className="iicon">
                        <FaInstagram />
                    </span>
                    <span className="ticon">
                        <FaTwitter />
                    </span>
                    <span className="licon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

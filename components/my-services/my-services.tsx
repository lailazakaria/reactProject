import React from "react";
import icon from "../../src/assest/bag.svg"
import TitleComponent from "./titleIcon";
import ParagraphComponent from "./paragraph";
import icon2 from "../../src/assest/scure-payment.svg"
import icon3 from "../../src/assest/international-dilivary.svg"
import Iconn from "./icons";

function MyServices() {
    return (
        <div className="container-services" >
            <div>
                <div style={{ textAlign: "center" }}><Iconn icon={icon} /></div>
                <div style={{ textAlign: "center" }}><TitleComponent title="SIMPLE RETURNS" ></TitleComponent></div><br />
                <div style={{ textAlign: "center", fontSize: "12px" }}> <ParagraphComponent text="Every purchase you make comes with a 30-day money-back guarantee."></ParagraphComponent></div>
            </div>
            <div>
                <div style={{ textAlign: "center" }}><Iconn icon={icon2} /></div>
                <div style={{ textAlign: "center" }}><TitleComponent title="SECURE PAYMENTS"></TitleComponent></div><br />
                <div style={{ textAlign: "center", fontSize: "12px" }}> <ParagraphComponent text="Every purchase is secure thanks to our excellent online safety standards."></ParagraphComponent></div>
            </div>
            <div>
                <div style={{ textAlign: "center" }}><Iconn icon={icon3} /></div>
                <div style={{ textAlign: "center" }}><TitleComponent title="INTERNATIONAL DELIVERY"></TitleComponent></div><br />
                <div style={{ textAlign: "center", fontSize: "12px" }}>    <ParagraphComponent text="We offer free shipping to more than 40 countries around the world."></ParagraphComponent></div>
            </div>
        </div>)
}
export default MyServices;
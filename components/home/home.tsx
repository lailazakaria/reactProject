import Image from "next/image"
import img from "../../src/assest/home.jpg"
import "./home.css"
function TitleHome() {
    return (
        <h1>NEW FALL-WINTER
            COLLECTION</h1>
    )
}
function Button() {
    return (
        <div className="btn">
            <button>SHOP NOW</button>
        </div>
    )
}

function Homee() {
    return (
        <div>
            <div className="style-home">
                <div>
                    <TitleHome></TitleHome>
                </div>
                <div>
                    <Button></Button>
                </div>
            </div>

        </div>
    )
}
export default Homee;






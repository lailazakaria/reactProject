import "./clothes.css"
import Link from 'next/link';
function Causal() {
    return (
        <div className=" box-img1" >
            <h2>Causal</h2></div>
    )
}

function Work() {
    return (
        <div className="box-img2">
            <h2>Work</h2>
        </div>
    )
}

function Clothes() {
    return (
        <div className="container-clothes">
            <Work />
            <Causal />
        </div>
    );
}
export default Clothes;
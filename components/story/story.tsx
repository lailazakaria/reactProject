import Image from "next/image";
import img from "../../src/assest/two-women.jpg";
const ImageComponent = (props: any) => {
    return (<Image src={props.src} alt="Dojo Helpdesk logo" style={{ width: "100%", height: "100%" }} />
    )

};
type RightSectionParams = {
    paragraph?: string
    button?: string
}
function RightSection({ paragraph, button }: RightSectionParams) {
    return (
        <div className="rightSection">
            <p>{paragraph}</p>
            <button className="bttn">{button}</button>
        </div>
    );
};
function Story() {
    return (
        <div className="container">
            <ImageComponent src={img}  />

            <div className="r">
                <br />
                <h1 style={{ color: "black", fontSize: "2rem",marginBottom:"2rem",marginTop:"3rem" }}>OUR STORY</h1>
                <br />
            <RightSection  paragraph="Our Story
                           I grew up in a small town, but always dreamed of moving to the big city. Once I moved to New York, there was no looking back. The noise, the bustle, the scents, the fashion. It was everything I had dream about."
            button="LEARN MORE"/>
        </div></div>
    )
}
export default Story;
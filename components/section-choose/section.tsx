import "./section.css"
// type ChosenPramas = {
//     title?: string
//     paragragh?: string
// }
// function SectionChosen({ title, paragragh }: ChosenPramas) {
//     return (
//         <div >
//             <h2>{title}</h2>
//             <p>{paragragh}</p>
//         </div>
//     )
// }
// export default SectionChosen;
type LeftSectionParams = {
     title?: string
 }
function LeftSection({title}:LeftSectionParams){  
    return (
        <div className="leftSection">
            <p>WHO WE ARE</p><br></br>
            <h2>{ title}</h2>
        </div>
    );
};
type RightSectionParams = {
    paragraph?: string
    button?:string
}
function RightSection({paragraph,button}:RightSectionParams)  {
    return (
        <div className="rightSection">
            <p>{paragraph}</p>
            <button className="bttn">{ button}</button>
        </div>
    );
};

function SectionChosen(){
    return (
        <div className="container">
            <LeftSection title="Hi, there.
We're Blush Boutique." />
            <RightSection paragraph="We make beautiful clothes that don’t just look great on the hanger. They look great on you, too! All of our clothes are designed for both comfort and style, so you look great and feel terrific, whatever you’re wearing."
            button="LEARN MORE"/>
        </div>
    );
};
export default SectionChosen;
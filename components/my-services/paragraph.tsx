import { type } from "os";
import React from "react";
type TextParams = {
    text?:string
}

function ParagraphComponent(props:any) {
    return <p className="paragraph">{props.text}</p>;
};

export default ParagraphComponent;
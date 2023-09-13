import { type } from "os";
import React from "react";

type titleParams = {
    title?:string
}
function TitleComponent({title}:titleParams)  {
    return <h4 className="title">{title}</h4>;
};

export default TitleComponent;
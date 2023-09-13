import React from "react";
import Image from "next/image";

function Iconn(props:any) {
    return (
        <Image src={props.icon} alt="Dojo Helpdesk logo" style={{width:"60px"}}/>)
}
export default Iconn;
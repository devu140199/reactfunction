import React from "react";
import I from "./I"
import C from "./c";


function B({name}){
    return (
        <>
        <h1>Hello B Components {name}</h1>
        <I />
        <C name = {name}/>
        </>
    )
}

export default B;
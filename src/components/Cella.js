import React from 'react';
import "./Cella.css";

export default function Cella(props){

    function katt(){
        //Játéktér katt függvényét kell hívni? -> Megkapta a props-ján keresztül
        props.katt(props.index)
    }

    return(
            <div className={`cella ${props.jel ? "fel" : "le"}`} onClick={()=>katt()}></div>
    )
}
import React, { useContext } from 'react';
import "./Cella.css";
import { KattContext } from '../contexts/KattContext';

export default function Cella(props){

    const {katt}=useContext(KattContext)

    function kattintas(){
        //Játéktér katt függvényét kell hívni? -> Megkapta a props-ján keresztül
        katt(props.index)
    }

    return(
            <div className={`cella ${props.jel ? "fel" : "le"}`} onClick={()=>kattintas()}></div>
    )
}
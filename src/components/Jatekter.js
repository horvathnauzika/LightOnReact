import React from 'react';
import Cella from './Cella';

export default function Jatekter(props){

    return(<>
            {
            props.lista.map((elem, index)=>{
                return(<Cella jel={elem} key={index} index={index}/>)
            })
        }
    </>
    )
}
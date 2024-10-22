import { createContext, useState } from "react";

export const KattContext= createContext("");
export const KattProvider=({children})=>{

    const [lista, setLista]=useState([true, false, false, true, false, true,false, false, true]);

    function katt(adat){
      const segedLista=[...lista] 
  
        if(segedLista[adat] == true){
          segedLista[adat] = false
        }
        else{
          segedLista[adat] = true;
        }
        setLista([...segedLista]);
    }
  
    return(
        <KattContext.Provider value={{lista, katt}}>
            {children}
        </KattContext.Provider>
    )
}
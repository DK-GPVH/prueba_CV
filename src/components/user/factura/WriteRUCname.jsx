import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function WriteRUCname({onRUC}) {
    const [Input, setInput] = useState();
    const onInputChange=({target})=>{ 
        setInput(target.value);
    }
    const writeValue=(event)=>{  
        event.preventDefault();
        const value = Input.trim();
        if(value.length===11){
            onRUC({numero:value});
        }else{return}
    }   

    return (
        <div className="flex flex-col md:col-span-1 mx-2 col-span-2">
            <span className="my-2 font-md">Doc. de Identidad</span>
            <div className="flex flex-row justify-center rounded-md shadow-md">
              <input type="number" className="w-[100%] border-none rounded-l-md" placeholder="Ingrese RUC"
            onChange={onInputChange}
            value={Input} />
              <button className="inline-flex items-center p-2 text-sm text-white bg-[#2F9B86] rounded-r-md " onClick={writeValue}>
                <FaSearch></FaSearch>
              </button>
            </div>
        </div>
    )
}

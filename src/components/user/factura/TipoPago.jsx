import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
const defaultState = {
    numero: "",
    monto: "",
    fecha: "",
  
  };

  function Row({ onChange, onRemove, numero, monto, fecha }) {
    return (
      <div className="grid grid-cols-12 gap-8 ml-8">
        <div className="sm:col-span-1 ">
        <input
          value={numero}
          onChange={e => onChange("numero", e.target.value)}
          placeholder="#"
          className=" bg-gray-50 border w-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required 

        />
        </div>

        <div className="col-span-3">
        <input
          placeholder="Monto de Cuota"
          value={monto}
          onChange={e => onChange("monto", e.target.value)}
          className=" bg-gray-50 border w-32 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required 
          />
        </div>
        <div className="sm:col-span-4">
        <input 
type="date" 
placeholder="Fecha de Cuota"
value={fecha}
onChange={e => onChange("fecha", e.target.value)}
className=" bg-gray-50 border w-40 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required 
/>
        </div>
        <div className="sm:col-span-3 w-44 pt-2"><button onClick={onRemove}><AiFillDelete className="text-red-600 h-6 w-6"/></button></div>
         
        
       

       


      
        
      </div>
    );
  }

export default function TipoPago() {
    const [rows, setRows] = useState([defaultState]);

    const handleOnChange = (index, name, value) => {
      const copyRows = [...rows];
      copyRows[index] = {
        ...copyRows[index],
        [name]: value
      };
      setRows(copyRows);
    };
  
    const handleOnAdd = () => {
      setRows(rows.concat(defaultState));
    };
  
    const handleOnRemove = index => {
      const copyRows = [...rows];
      copyRows.splice(index, 1);
      setRows(copyRows);
    };
  
    return (
      <div className="pt-4">
        <button type="button" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleOnAdd}>Agregar</button>
         
        {rows.map((row, index) => (
          <Row
            {...row}
            onChange={(name, value) => handleOnChange(index, name, value)}
            onRemove={() => handleOnRemove(index)}
            key={index}
          />
        ))}
       
      </div>
    );
  }
  
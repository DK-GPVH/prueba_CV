import React from "react";
import { TiDelete } from "react-icons/ti";


const TablaFactura = () => {
    return (

        <div className="overflow-x-auto rounded-lg">
        <table className="table w-full rounded-xl ">
       
          <thead className="bg-[#2F9B86] border border-[#2F9B86]">
            <tr>
              <th className="text-xs py-3 text-white">Código</th>
              <th className="text-xs text-white">Cantidad</th>
              <th className="text-xs text-white">Descripción</th>
              <th className="text-xs text-white">UM</th>
           
              <th className="text-xs text-white">V. Unitario</th>
              <th className="text-xs text-white">V. Venta Total</th>
              <th className="text-xs text-white">Sub Total</th>
              <th className="text-xs text-white">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white text-center border">
         
            <tr className="h-10">
              <th className="text-xs text-center">1</th>
              <td className="text-xs text-center">1</td>
              <td className="text-xs">producto</td>
              <td className="text-xs text-center">1.00</td>
           
              <td className="text-xs text-center">1.00</td>
              <td className="text-xs text-center">1.00</td>
              <td className="text-xs text-center">1.00</td>
              
              <td className="text-xs text-center">
                <button className="text-center">
                  <TiDelete />
                  </button> 
              </td>
           
            </tr>

            <tr className="h-10">
              <th className="text-xs text-center">1</th>
              <td className="text-xs text-center">1</td>
              <td className="text-xs">producto</td>
              <td className="text-xs text-center">1.00</td>
             
              <td className="text-xs text-center">1.00</td>
              <td className="text-xs text-center">1.00</td>
              <td className="text-xs text-center">1.00</td>
              
              <td className="text-xs text-center">
                <button className="text-center">
                  <TiDelete />
                  </button> 
              </td>
           
            </tr>
          
  
       
          </tbody >
        </table>
      </div>
    );
};
export default TablaFactura;

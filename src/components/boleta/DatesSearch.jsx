import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { getDates } from "./helpers/getDates";
import WriteDNI from "./WriteDNI";
import WriteRUC from "./WriteRUC";

export default function DatesSearch() {
        const [DatesInput, setDatesInput] = useState({});
        const [TipoDocumento, setTipoDocumento] = useState("dni");
        const [Dates,setDates]=useState({});
        const selectDocument = ({target})=>{
            setTipoDocumento(target.value);
            setDatesInput({});
            setDates({});
        }
        const getInformation=(numero)=>{
            getDates(TipoDocumento,numero).then(data=>setDates(data));
        }
        
        return (
    <>
    
    <div className="col-span-full sm:col-span-2">
            <label className="text-sm">Tipo de Documento</label>
            <select className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" onChange={selectDocument}>
                <option value="dni">DNI</option>
                <option value="ruc">RUC</option>
            </select>
        </div>

    <div className="col-span-full sm:col-span-2">
            <label  className="text-sm">Num. Documento</label>
            {
                TipoDocumento==="dni"&&<WriteDNI onDNI={(data)=>{setDatesInput(data);getInformation(data.numero)}}></WriteDNI>
            }
            {
                TipoDocumento==="ruc"&&<WriteRUC onRUC={(data)=>{setDatesInput(data);getInformation(data.numero)}}></WriteRUC>
            }
    </div>
        <div className="col-span-full sm:col-span-4">
            <label  className="text-sm">Nombre o Razón Social</label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-white bg-[#2F9B86] rounded-l-md ">
                <FaUserAlt />
                </span>
                <input
                    type="text"
                    className="w-full rounded-r-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                    placeholder=""
                    value={Dates.message?"Documento invalido":Dates.ruc?Dates.razonSocial:Dates.dni?Dates.nombres+" "+Dates.apellidoPaterno+" "+Dates.apellidoMaterno:""}
                    readOnly
                />
            </div>
        </div>

        <div className="col-span-full sm:col-span-4">
            <label  className="text-sm">Dirección</label>
            <input  
            type="text"
            placeholder={TipoDocumento==="dni"?"Ingrese su direccion":""} 
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
            value={Dates.message?"Documento invalido":Dates.ruc&&Dates.direccion}
            />
        </div>

        <div className="col-span-full sm:col-span-2">
            <label  className="text-sm">Ubigeo</label>
            <input  
            type="number" 
            placeholder={TipoDocumento==="dni"?"Ingrese su ubigeo":""} 
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
            value={Dates.message?0:Dates.ruc&&Dates.ubigeo}
            />
        </div>
    </>
    )
}

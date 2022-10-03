import { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { GiMineTruck } from 'react-icons/gi'
import { getDates } from './helpers/getDates'
import { getDni } from './helpers/getDni'
import WriteRUC from './WriteRUC'

export default function FacturaSearch() {
  //metodo y estado para el RUC
  const [RUC, setRUC] = useState({})
  const getRUC = (number) => {
    getDates('ruc', number).then((data) => setRUC(data))
  }

  //metodo y estado para el DNI
  const [DNI, setDNI] = useState({})
  const getDNI = (numberDNI) => {
    getDni(numberDNI).then((dataDNI) => setDNI(dataDNI))
  }
  return (
    <>
      <div className="col-span-full sm:col-span-2">
        <label className="text-sm">Num. Documento</label>
        <WriteRUC onRUC={(data) => setRUC(data)}></WriteRUC>
      </div>
      {RUC.numero && getRUC(RUC.numero)}
      <div className="col-span-full sm:col-span-4">
        <label className="text-sm">Nombre o Razón Social</label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-white bg-[#2F9B86] rounded-l-md ">
            {/*boton para buscar el RUC */}

            <FaUserAlt />
          </span>
          <input
            type="text"
            className="w-full text-gray-900 border-gray-700 rounded-r-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
            placeholder=""
            value={RUC.message ? 'RUC invalido' : RUC.ruc && RUC.razonSocial}
            readOnly
          />
        </div>
      </div>
      <div className="col-span-full sm:col-span-5">
        <label className="text-sm">Dirección</label>
        <input
          type="text"
          placeholder=""
          className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
          value={RUC.message ? 'RUC invalido' : RUC.ruc && RUC.direccion}
          readOnly
        />
      </div>
      <div className="col-span-full sm:col-span-1">
        <label className="text-sm">Ubigeo</label>
        <input
          type="number"
          placeholder=""
          className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
          value={RUC.message ? 0 : RUC.ruc && RUC.ubigeo}
          readOnly
        />
      </div>
    </>
  )
}

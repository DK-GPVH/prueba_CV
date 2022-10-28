import { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { getDates } from './helpers/getDates'
import WriteDNIname from './WriteDNIname'
import WriteRUCname from './WriteRUCname'

export default function NamesSearch() {
  const [DatesInput, setDatesInput] = useState({})
  const [TipoDocumento, setTipoDocumento] = useState('dni')
  const [Dates, setDates] = useState({})
  const selectDocument = ({ target }) => {
    setTipoDocumento(target.value)
    setDatesInput({})
    setDates({})
  }
  const getInformation = (numero) => {
    getDates(TipoDocumento, numero).then((data) => setDates(data))
  }

  return (
    <>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col col-span-2 md:col-span-1">
          <span className="my-2 font-md">Tipo de Documento</span>
          <select className="border-none rounded-md shadow-md" onChange={selectDocument}>
            <option value="dni">DNI</option>
            <option value="ruc">RUC</option>
          </select>
        </div>
        {TipoDocumento === 'dni' && (
          <WriteDNIname
            onDNI={(data) => {
              setDatesInput(data)
              getInformation(data.numero)
            }}
          ></WriteDNIname>
        )}
        {TipoDocumento === 'ruc' && (
          <WriteRUCname
            onRUC={(data) => {
              setDatesInput(data)
              getInformation(data.numero)
            }}
          ></WriteRUCname>
        )}
      </div>
      <div className="flex flex-col my-2">
        <span className="my-2 text-left font-md">Nombre o Razon Social</span>
        <div className="flex flex-row rounded-md shadow-md">
          <span className="inline-flex justify-center items-center p-2 text-sm text-white bg-[#2F9B86] rounded-l-md w-[10%]">
            <FaUserAlt />
          </span>
          <input
            type="text"
            className="border-none rounded-r-md w-[90%]"
            value={
              Dates.message
                ? 'Documento invalido'
                : Dates.ruc
                ? Dates.razonSocial
                : Dates.dni
                ? Dates.nombres + ' ' + Dates.apellidoPaterno + ' ' + Dates.apellidoMaterno
                : ''
            }
          />
        </div>
      </div>
    </>
  )
}

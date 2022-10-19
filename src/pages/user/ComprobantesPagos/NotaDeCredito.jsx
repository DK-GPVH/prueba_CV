import React from 'react'
import { FaSearch, FaUserAlt } from 'react-icons/fa'

export default function NotaDeDebito() {
  return (
    <div className="grid grid-cols-12 gap-3">
      <h1 className="text-center col-span-12 font-extrabold text-[#2F9B86] my-4">EMITIR NOTA DE CRÉDITO</h1>
      <div className="grid grid-cols-4 col-span-4 p-4 mx-4 rounded-lg shadow-md bg-gray-50">
        <div className="flex flex-col col-span-4">
          <span className="my-2 text-left font-md">Tipo de Notas de Crédito</span>
          <select className="border-none rounded-md shadow-md">
            <option>Seleccione</option>
            <option>Anulación de operación</option>
            <option>Anulación por error de RUC</option>
            <option>Devolución total</option>
            <option>Corrección por error en la descripción</option>
            <option>Devolución por item</option>
          </select>
        </div>
        <div className="grid grid-cols-2 col-span-4 ">
          <div className="flex flex-col col-span-1 ">
            <span className="my-2 font-md">Tipo de Documento</span>
            <select className="border-none rounded-md shadow-md">
              <option>DNI</option>
              <option>RUC</option>
            </select>
          </div>
          <div className="flex flex-col col-span-1 mx-2">
            <span className="my-2 font-md">Doc. de Identidad</span>
            <div className="flex flex-row justify-center rounded-md shadow-md">
              <input type="number" className="w-[90%] border-none rounded-l-md" />
              <button className="inline-flex items-center p-2 text-sm text-white bg-[#2F9B86] rounded-r-md ">
                <FaSearch></FaSearch>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-4">
          <span className="my-2 text-left font-md">Nombre o razon social</span>
          <div className="flex flex-row rounded-md shadow-md">
            <span className="inline-flex justify-center items-center p-2 text-sm text-white bg-[#2F9B86] rounded-l-md w-[10%]">
              <FaUserAlt />
            </span>
            <input type="text" className="border-none rounded-r-md w-[90%]" />
          </div>
        </div>
        <div className="flex flex-col col-span-4">
          <span className="my-2 text-left font-md">Motivo</span>
          <textarea className="border-none rounded-md shadow-md"></textarea>
        </div>
        <div className="flex flex-col col-span-2">
          <span className="my-2 text-left font-md">Doc. Afectado</span>
          <input type="text" className="border-none rounded-md shadow-md" />
        </div>
        <div className="grid col-span-4">
          <button className="px-6 py-2 m-auto mt-4 font-extrabold text-white bg-blue-900 rounded-md">
            Buscar Documento
          </button>
        </div>
      </div>
      <div className="flex flex-col col-span-8 mx-4 rounded-lg shadow-md bg-gray-50">
        <span className=" col-span-4 p-2 m-1 font-bold text-[#2F9B86] text-center">Nota de crédito seleccionada</span>
        <div className="col-span-4 mx-2 border-t border-gray-300 "></div>
        <div className="grid grid-cols-3 p-2 m-1">
          <div className="flex flex-col col-span-2">
            <div className="flex flex-row flex-wrap m-1">
              <span className="mx-1 font-bold">Nombre del cliente:</span>
              <input type="text" className="border-none rounded-md shadow-md w-[50%]" />
            </div>
            <div className="flex flex-row m-1">
              <span className="mx-1 font-bold">Direccion:</span>
              <input type="text" className="border-none rounded-md shadow-md w-[50%]" />
            </div>
            <div className="flex flex-row m-1">
              <span className="mx-1 font-bold">Fecha de emisión:</span>
              <input type="date" className="border-none rounded-md shadow-md  w-[50%]" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col p-2 bg-[#2F9B86] rounded-md text-white">
              <span>BOLETA DE VENTA ELECTRONICA</span>
              <span>RUC: 000000000000</span>
            </div>
          </div>
        </div>
        <div className="mx-2 border-t border-gray-300"></div>

        <div className="flex flex-col p-2 m-1">
          <div className="flex flex-row my-1">
            <span className="mx-1 font-bold">Señor(es) :</span>
            <span className="mx-1 font-medium">XXXXXXXXX</span>
          </div>
          <div className="flex flex-row my-1">
            <span className="mx-1 font-bold">RUC :</span>
            <span className="mx-1 font-medium">00000000000</span>
          </div>
          <div className="flex flex-row my-1">
            <span className="mx-1 font-bold">Direccion del Receptor:</span>
            <span className="mx-1 font-medium">XXXXXXXXXXX</span>
          </div>
          <div className="flex flex-row my-1">
            <span className="mx-1 font-bold">Direccion del Cliente</span>
            <span className="mx-1 font-medium">XXXXXXXXXXXXXXXXXXXXXX</span>
          </div>
          <div className="flex flex-row my-1">
            <span className="mx-1 font-bold">Tipo de Moneda</span>
            <span className="mx-1 font-medium">$$$$$$$$$$$$$</span>
          </div>
        </div>
        <div className="flex m-1">
          <table className="w-[100%]">
            <thead className="text-white m-2 rounded-md shadow-md w-[100%] bg-[#2F9B86]">
              <tr>
                <th>#</th>
                <th>Cantidad</th>
                <th>Descripcion</th>
                <th>Valor Unitario</th>
              </tr>
            </thead>
            <tbody className="bg-white rounded-b-lg w-[100%]">
              <tr>
                <td>1</td>
                <td>10</td>
                <td>Cuadernos</td>
                <td>$0.15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-2 m-1">
          <div className="col-span-1 col-start-2">
            <span className="text-[#2F9B86] font-bold">RESUMEN</span>
            <div className=" col-span-4 border-t border-[#2F9B86] mr-2"></div>
            <div className="flex flex-col items-end my-2 text-[#2F9B86] font-medium">
              <div className="flex flex-row">
                <span>SubTotal de ventas :</span>
                <input type="text" className="m-1 mx-2 bg-gray-200 border-none rounded-md" />
              </div>
              <div className="flex flex-row">
                <span> Descuentos :</span>
                <input type="text" className="m-1 mx-2 bg-gray-200 border-none rounded-md" />
              </div>
              <div className="flex flex-row">
                <span> IGV:</span>
                <input type="text" className="m-1 mx-2 bg-gray-200 border-none rounded-md" />
              </div>
              <div className="flex flex-row">
                <span>Otros cargos :</span>
                <input type="text" className="m-1 mx-2 bg-gray-200 border-none rounded-md" />
              </div>
              <div className="flex flex-row">
                <span>Importe Total :</span>
                <input type="text" className="m-1 mx-2 bg-gray-200 border-none rounded-md" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

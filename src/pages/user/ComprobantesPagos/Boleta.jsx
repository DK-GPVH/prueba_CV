import React, { useState } from 'react'
import { Button } from '@material-tailwind/react'
import { CgInsertAfterR } from 'react-icons/cg'

import { FaAd, FaFolderPlus, FaSearch } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'

import TablaFactura from '../../../components/user/factura/TablaFactura'

export default function Boleta() {
  return (
    <div className="pt-4 mx-2 lg:mx-5 ">
      <h1 className="text-xl  font-bold mb-4 text-stone-600 text-center text-[#2F9B86]">EMITIR BOLETA</h1>

      <div className="px-1 text-gray-100 bg-gray-800 rounded-lg lg:px-6">
        <form action="" className="container flex flex-col mx-auto space-y-12">
          <div className="grid grid-cols-8 gap-6 p-6 rounded-md shadow-sm ">
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Serie</label>
              <input
                type="text"
                disabled
                placeholder="F001-00637869"
                className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Fecha de Emisión</label>
              <input
                type="date"
                className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Tipo de Moneda</label>
              <select className="w-full text-gray-900 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700">
                <option>Soles</option>
                <option>Dólares</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Núm. Celular</label>
                <input
                  type="number"
                  placeholder=""
                  className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
            </div>
            <div className="grid grid-cols-8 gap-4 col-span-full lg:col-span-8">
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Tipo de Documento</label>
                <select className="w-full text-gray-900 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700">
                  <option>RUC</option>
                </select>
              </div>

              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Num. Documento</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-white bg-[#2F9B86] rounded-l-md ">
                    {/*boton para buscar el RUC */}
                    <button>
                      <FaSearch />
                    </button>
                  </span>
                  <input
                    type="number"
                    className="w-full text-gray-900 border-gray-700 rounded-r-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                    placeholder="Ingrese RUC"
                  />
                </div>
              </div>

              <div className="col-span-full sm:col-span-4">
                <label className="text-sm">Nombre o Razón Social</label>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 text-sm text-white bg-[#2F9B86] rounded-l-md'>
                    <FaUserAlt/>
                  </span>
                  <input 
                    type="text"
                    className='w-full text-gray-900 border-gray-700 rounded-r-md'
                  />
                </div>
                
              </div>

              <div className="col-span-full sm:col-span-4">
                <label className="text-sm">Dirección</label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Ubigeo</label>
                <input
                  type="number"
                  placeholder=""
                  className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>

              
              <div className="col-span-full lg:col-span-2">
                <label className="text-sm">Productos o servicios</label>
                <span className='w-full'>
                  <button className='flex justify-center w-full bg-[#2F9B86] text-white p-2 rounded-lg flex-wrap'>
                  <FaFolderPlus className='my-auto text-2xl'/>
                  <span className='mx-2'>Agregar productos o servicios</span>  
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="grid gap-4 p-4 mt-2 bg-gray-800 rounded-lg">
        {/*TABLA DE LOS PRODUCTOS O SERVICIOS AÑADIDOS */}
        <div className="col-span-12 rounded-lg sm:col-span-8 ">
          <TablaFactura/>

          <div className="grid grid-cols-12 pt-4">
            <div className="col-span-7 bg-white border rounded-2xl m-2 p-2">
              <div className='flex justify-center flex-col'>
                <h1 className='text-s text-[#2F9B86] font-medium pt-1 mx-auto'>TIPO DE PAGO</h1>
                <div className="border-t border-[#2F9B86]" />
                <div className='flex justify-center flex-row mt-2 flex-wrap'>
                  <div className='flex flex-row border-2 broder-gray-300 py-2 px-6 my-1 mx-4 rounded-md'>
                      <input checked type="radio" className='my-auto' name='tipo_pago'/>
                      <label className='mx-2'>CONTADO</label>
                  </div>
                  <div className='flex flex-row border-2 broder-gray-300 py-2 px-6 my-1 mx-4 rounded-md'>
                      <input type="radio" className='my-auto' name='tipo_pago'/>
                      <label className='mx-2'>CREDITO</label>                    
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-5 bg-white p-2 m-2 rounded-2xl">
              <div className="flex flex-wrap overflow-hidden lg:-mx-px xl:-mx-full">
                <div className="mx-5">
                  <h1 className="text-s text-[#2F9B86] font-mediun pt-1 ">RESUMEN</h1>
                  <div className="border-t border-[#2F9B86]" />
                  <div className="flex flex-wrap overflow-hidden lg:-mx-px">
                    <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                      <h1 className="py-3 pr-4 text-xs font-medium text-[#2F9B86]">SUB TOTAL</h1>
                    </div>
                    <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                      <input
                        type="text"
                        disabled
                        className="mt-2 block w-full h-6 rounded-md border-none bg-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>

                    <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                      <h1 className="py-3 pr-4 text-xs font-medium text-[#2F9B86]">OP. EXONERADAS</h1>
                    </div>

                    <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                      <input
                        type="text"
                        disabled
                        className="mt-2 block w-full h-6 rounded-md border-none bg-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>

                    <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                      <h1 className="py-3 pr-4 text-xs font-medium text-[#2F9B86]">DESCUENTO</h1>
                    </div>

                    <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                      <input
                        type="text"
                        disabled
                        className="mt-2 block w-full h-6 rounded-md border-none bg-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>

                    <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                      <h1 className="py-3 pr-4 text-xs text-[#2F9B86] font-xs">IGV (18%)</h1>
                    </div>

                    <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                      <input
                        type="text"
                        disabled
                        className="mt-2 block w-full h-6 rounded-md border-none bg-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>

                    <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                      <h1 className="py-3 pr-4 text-xs text-gray-700 font-mediun">TOTAL</h1>
                    </div>

                    <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                      <input
                        type="text"
                        disabled
                        className="mt-2 block w-full h-6 rounded-md border-[#2F9B86] bg-gray-100 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 pt-4'>
            <div className='col-span-12 mx-2 p-1 lg:col-span-3 lg:col-start-10'>
              <button className='text-white  bg-red-600 rounded-md py-2 px-6 font-mediun font-bold mx-4'>GUARDAR CAMBIOS</button>
            </div>
          </div>
          
        </div>
      </div>
      <div className="px-1 lg:px-6 mt-4">
        <div className='flex justify-center flex-wrap'>
          <button className='bg-red-600 rounded-md py-4 px-6 my-2 mx-6 text-white font-bold'>Vista preliminar</button>
          <button className='bg-[#2F9B86]  rounded-md py-4 px-6 m-2 mx-6 text-white font-bold'>Emitir Boleta</button>
          <button className='bg-white border-2 border-[#2F9B86] rounded-md py-4 px-6 m-2 mx-6 font-bold'>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Button } from '@material-tailwind/react'
import { CgInsertAfterR } from 'react-icons/cg'

import { FaSearch } from 'react-icons/fa'
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
                <input
                  type="text"
                  placeholder=""
                  className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
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

              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Núm. Celular</label>
                <input
                  type="number"
                  placeholder=""
                  className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/*DATOS DEL CLIENTE */}

        <div className="col-span-12 px-2 pt-2 bg-white border rounded-lg sm:col-span-4">
          <h1 className="mt-1 mb-2 font-sans font-bold text-center">CLIENTE</h1>
          <div className="grid grid-cols-12 gap-2 ">
            <div className="col-span-6 sm:col-span-6">
              <label htmlFor="name" className="text-sm font-medium text-stone-600">
                Serie
              </label>
              <input
                type="text"
                disabled
                className="mt-2 block w-full h-9 rounded-md border-[#2F9B86]  shadow-sm focus:border-[#2F9B86] focus:ring focus:ring-[#2F9B86] focus:ring-opacity-50"
                placeholder="F001-00637869"
              />
            </div>

            <div className="col-span-6 sm:col-span-6">
              <label htmlFor="name" className="text-sm font-medium text-stone-600">
                Fecha de Emisión
              </label>
              <input
                type="date"
                className="mt-2 block w-full h-9 rounded-md border-[#2F9B86]  shadow-sm focus:border-[#2F9B86] focus:ring focus:ring-[#2F9B86] focus:ring-opacity-50"
              />
            </div>

            <div className="col-span-6 sm:col-span-6">
              <label className="text-sm font-medium text-stone-600">Tipo de Documento</label>
              <select className="mt-1 block w-full h-9 rounded-md border-[#2F9B86]  shadow-sm focus:border-[#2F9B86] focus:ring focus:ring-[#2F9B86] focus:ring-opacity-50">
                <option>RUC</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Número de Documento
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-white bg-[#2F9B86] rounded-l-md border border-r-0 border-[#2F9B86] dark:bg-[#2F9B86] dark:text-[#2F9B86] dark:border-[#2F9B86]">
                  {/*boton para buscar el RUC */}
                  <button>
                    <FaSearch />
                  </button>
                </span>
                <input
                  type="number"
                  className="rounded-none h-9 rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-[#2F9B86] focus:border-[#2F9B86] block flex-1 min-w-0 w-full text-sm border-[#2F9B86] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#2F9B86] dark:text-white dark:focus:ring-[#2F9B86] dark:focus:border-[#2F9B86]"
                  placeholder="Ingrese RUC"
                />
              </div>
            </div>

            <div className="col-span-12 sm:col-span-12">
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nombre o Razón social
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-white bg-[#2F9B86] rounded-l-md border border-r-0 border-[#2F9B86] dark:bg-[#2F9B86] dark:text-[#2F9B86] dark:border-[#2F9B86]">
                  <FaUserAlt />
                </span>
                <input
                  type="text"
                  className="rounded-none h-9 rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-[#2F9B86] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="col-span-12 sm:col-span-12">
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Dirección
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="rounded-lg bg-gray-50 border h-9 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-[#2F9B86] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="RUC"
                />
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm font-medium text-stone-600">Ubigeo</label>
              <input
                type="text"
                className="mt-2 block w-full h-9 rounded-md border-[#2F9B86]  shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div className="col-span-6 sm:col-span-6">
              <label className="text-sm font-medium text-stone-600">Tipo de Moneda</label>
              <select
                id="numdoc"
                className="mt-2 block w-full h-9 rounded-md border-[#2F9B86]  shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option>Soles</option>
                <option>Dólares</option>
              </select>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm font-medium text-stone-600">Num. Celular</label>
              <input
                type="text"
                className="mt-2 block w-full h-9 rounded-md border-[#2F9B86]  shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div className="justify-center col-span-12 pt-2 pb-4 text-center sm:col-span-12">
              <label className="text-sm font-medium text-stone-600 ">Agregar Servicios o Productos</label>
              <Button className="mt-2  w-full  bg-[#2F9B86] px-[45%]">
                <CgInsertAfterR className="w-5 h-5 " />{' '}
              </Button>
            </div>
          </div>
        </div>

        {/*TABLA DE LOS PRODUCTOS O SERVICIOS AÑADIDOS */}
        <div className="col-span-12 rounded-lg sm:col-span-8 ">
          <TablaFactura />

          <div className="grid grid-cols-12 pt-4">
            <div className="col-span-7 bg-white border rounded-lg">Aqui sera el forma de pago (credito o contado)</div>

            <div className="col-span-5 ">
              <div className="flex flex-wrap overflow-hidden lg:-mx-px xl:-mx-full">
                <div className="mx-5">
                  <h1 className="text-xs text-gray-700 font-mediun py ">RESUMEN</h1>
                  <div className="border-t border-gray-900" />
                  <div className="flex flex-wrap overflow-hidden lg:-mx-px">
                    <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                      <h1 className="py-3 pr-4 text-xs font-medium text-gray-700">SUB TOTAL</h1>
                    </div>
                    <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                      <input
                        type="text"
                        disabled
                        className="mt-2 block w-full h-6 rounded-md border-[#2F9B86] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>

                    <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                      <h1 className="py-3 pr-4 text-xs font-medium text-gray-700">OP. EXONERADAS</h1>
                    </div>

                    <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                      <input
                        type="text"
                        disabled
                        className="mt-2 block w-full h-6 rounded-md border-[#2F9B86] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>

                    <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                      <h1 className="py-3 pr-4 text-xs font-medium text-gray-700">DESCUENTO</h1>
                    </div>

                    <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                      <input
                        type="text"
                        disabled
                        className="mt-2 block w-full h-6 rounded-md border-[#2F9B86] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>

                    <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                      <h1 className="py-3 pr-4 text-xs text-gray-700 font-xs">IGV (18%)</h1>
                    </div>

                    <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                      <input
                        type="text"
                        disabled
                        className="mt-2 block w-full h-6 rounded-md border-[#2F9B86] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>

                    <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                      <h1 className="py-3 pr-4 text-xs text-gray-700 font-mediun">TOTAL</h1>
                    </div>

                    <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                      <input
                        type="text"
                        disabled
                        className="mt-2 block w-full h-6 rounded-md border-[#2F9B86] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

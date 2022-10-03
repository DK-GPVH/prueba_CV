import React from 'react'
import greenEnvironment from '../../../assets/img/green_environment.png'
export default function HelloClient() {
  return (
    <div className="relative col-span-12 sm:col-span-8 flex justify-between bg-[#111827] text-slate-100 rounded-3xl h-full ">
      <div className="flex items-baseline justify-between w-full pr-4">
        {/*El propósito de este div vacio es para aplicar el justify-between, encontraré otra manera de hacerlo sin el div vacio*/}
        <div></div>
        <img src={greenEnvironment} alt={greenEnvironment} className="pt-12 h-30 md:pt-4 md:p-0 md:h-full" />
      </div>
      <div className="absolute  h-full w-1/1.5 p-5 md:p-5 flex flex-col gap-1 sm:gap-4 md:gap-3 ">
        <h1 className="text-sm font-bold lg:text-4xl text-white">Hola Cliente</h1>
        <p className="text-xs text-[#BDDAFF] lg:text-sm">
          ¡Bienvenido ! La calidad del aire es buena <br/> y fresca, puedes salir hoy
        </p>
        <h3 className="text-lg font-bold text-white">
          +25° C &nbsp; <i className="fa-solid fa-cloud"></i>
        </h3>
        <h3 className="text-sm font-bold text-white">Temperatura exterior</h3>
        <h3 className="text-sm font-light text-white">Tiempo nublado borroso</h3>
      </div>
    </div>
  )
}

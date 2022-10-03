import React from 'react'

export default function Squares() {
  return (
    <div className="grid grid-cols-2 col-span-12 gap-4 lg:grid-cols-2 sm:grid-cols-2 lg:col-span-4 sm:col-span-12 ">
      <div className="rounded-3xl flex items-center justify-center text-center bg-gradient-to-r from-[#FA7D74] to-[#F94E39]">
        <div className="flex flex-col">
          <p className="font-bold text-slate-50">
            Total de reportes: <br></br>29509
          </p>
        </div>
      </div>
      <div className="rounded-3xl flex items-center justify-center text-center bg-[#7A40F2]">
        <div className="flex flex-col">
          <p className="font-bold text-slate-50">
            Total de reportes: <br></br>29509
          </p>
        </div>
      </div>
      <div className="rounded-3xl flex items-center justify-center text-center bg-gradient-to-r from-[#00A4FA] to-[#006BF2]">
        <div className="flex flex-col">
          <p className="font-bold text-slate-50">
            Total de reportes: <br></br>29509
          </p>
        </div>
      </div>
      <div className="rounded-3xl flex items-center justify-center text-center bg-gradient-to-r from-[#33CABA] to-[#33CABA]">
        <div className="flex flex-col">
          <p className="font-bold text-slate-50">
            Total de reportes: <br></br>29509
          </p>
        </div>
      </div>
    </div>
  )
}

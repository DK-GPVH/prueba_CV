import React from 'react'
import fondo from '../assets/img/fondo.jpg'
import logo from '../assets/img/logo.png'

import { Input } from '@material-tailwind/react'
import { Button } from '@material-tailwind/react'

export default function Login() {
  const backgroundImageStyle = {
    backgroundImage: `url("${fondo}")`,
  }

  return (
    <div className="flex justify-center h-screen " style={backgroundImageStyle}>
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="flex backdrop-blur-sm bg-white/30 rounded-2xl	p-4 2xl:w-[900px]  justify-center">
            <div className="p-2 px-8 pt-8 bg-white h-3/4 rounded-2xl">
              <div className="flex justify-center h-16 w-22 ">
                <img src={logo} alt="Logo" />
              </div>

              <h1 className="pt-4 font-sans text-4xl font-extrabold text-center ">LOGIN</h1>
              <form className="grid justify-center">
                <div className="pt-8 w-72">
                  <Input color="teal" label="RUC" type="num" />
                </div>
                <div className="pt-8">
                  <Input color="teal" label="CONTRASEÑA" type="password" />
                </div>
                <span className="text-right text-[#2F9B86]">Recuperar Acceso</span>
                <div className="grid justify-center pt-8 pb-20">
                  <Button className="w-72 bg-[#2F9B86]">
                    <a href="Main">INGRESAR</a>{' '}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

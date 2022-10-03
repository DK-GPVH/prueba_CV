import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
export default function GetDni({ onDNI }) {
  const [Input, setInput] = useState(0)
  //esta funcion asigna el valor de la casilla de texto al estado Input, captura la ultima cadena escrita
  const onInputChange = ({ target }) => {
    setInput(target.value)
  }
  const writeValue = (event) => {
    event.prevenDefault()
    const value = Input.trim()
    onDNI({ numeroDNI: value })
  }
  return (
    <div className="flex">
      <button onClick={writeValue}>
        <FaSearch />
      </button>

      <div>
        <input type="number" placeholder="Ingrese DNI" onChange={onInputChange} value={Input} />
      </div>
    </div>
  )
}

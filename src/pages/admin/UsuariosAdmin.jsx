import { Button, Input } from '@material-tailwind/react'
import React from 'react'
import { HiUserAdd } from 'react-icons/hi'
import { AiFillEdit, AiOutlineMinusCircle } from 'react-icons/ai'
import { FiDelete } from 'react-icons/fi'
import DataTable from 'react-data-table-component'
import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'

export default function Usuarios() {
  const columns = [
    {
      name: 'Código',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Apellidos',
      selector: (row) => row.Apellidos,
      sortable: true,
    },
    {
      name: 'Nombre',
      selector: (row) => row.Nombre,
      sortable: true,
    },
    {
      name: 'Cargo',
      selector: (row) => row.cargo,
      sortable: true,
    },
    {
      name: 'Estado',
      selector: (row) => row.Estado,
      sortable: true,
    },
    {
      name: 'Acciones',
      selector: (row) => row.Acciones,
    },
  ]

  const data = [
    {
      id: 'CLI-1',
      Apellidos: 'Cornejo',
      Nombre: 'Manuel',
      cargo: 'Administrador',
      Estado: 'Activo',
      Acciones: (
        <div className="flex gap-3">
          <AiFillEdit color="#7E56DA" className="cursor-pointer" size="25px" onClick={() => open('CLI-1')} />
          <AiOutlineMinusCircle color="#7E56DA" className="cursor-pointer" size="25px" />
          <FiDelete color="#DA5656" className="cursor-pointer" size="25px" />
        </div>
      ),
    },
    {
      id: 'CLI-2',
      Apellidos: 'Alvarez',
      Nombre: 'Osvaldo',
      cargo: 'Administrador',
      Estado: 'Activo',
      Acciones: (
        <div className="flex gap-3">
          <AiFillEdit color="#7E56DA" className="cursor-pointer" size="25px" onClick={() => open('CLI-2')} />
          <AiOutlineMinusCircle color="#7E56DA" className="cursor-pointer" size="25px" />
          <FiDelete color="#DA5656" className="cursor-pointer" size="25px" />
        </div>
      ),
    },
    {
      id: 'CLI-3',
      Apellidos: 'Alvarez',
      Nombre: 'Enrique',
      cargo: 'Administrador',
      Estado: 'Activo',
      Acciones: (
        <div className="flex gap-3">
          <AiFillEdit color="#7E56DA" className="cursor-pointer" size="25px" onClick={() => open('CLI-3')} />
          <AiOutlineMinusCircle color="#7E56DA" className="cursor-pointer" size="25px" />
          <FiDelete color="#DA5656" className="cursor-pointer" size="25px" />
        </div>
      ),
    },
    {
      id: 'CLI-4',
      Apellidos: 'Alvarez',
      Nombre: 'Julian',
      cargo: 'Administrador',
      Estado: 'Activo',
      Acciones: (
        <div className="flex gap-3">
          <AiFillEdit color="#7E56DA" className="cursor-pointer" size="25px" onClick={() => open('CLI-4')} />
          <AiOutlineMinusCircle color="#7E56DA" className="cursor-pointer" size="25px" />
          <FiDelete color="#DA5656" className="cursor-pointer" size="25px" />
        </div>
      ),
    },
  ]
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  let [isOpenUpdate, setIsOpenUpdate] = useState(false)
  function closeModalUpdate() {
    setIsOpenUpdate(false)
  }
  function openModalUpdate() {
    setIsOpenUpdate(true)
  }
  let [user, setUser] = useState({})
  function open(id) {
    data.map((user) => {
      if (user.id === id) {
        return setUser(user)
      }
      return {}
    })
    openModalUpdate()
  }

  return (
    <div className="p-4">
      <h1>Configuración - Usuario</h1>
      <div className="p-6">
        <div className="flex justify-between">
          <div className="w-2/4">
            <Input size="lg" label="Buscar por nombre de usuario" />
          </div>
          <div>
            <Button className="flex bg-[#2F9B86]" onClick={openModal}>
              <HiUserAdd className="mr-2" /> Nuevo Usuario
            </Button>
          </div>
        </div>
        <div className="mt-6 border-2 border-gray-200 rounded-md">
          <DataTable columns={columns} data={data} pagination highlightOnHover />
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Registra tu Usuario
                  </Dialog.Title>
                  <hr className="h-px w-[100%] bg-gray-200" />
                  <div className="flex flex-col m-6 mt-2 ">
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-col">
                        <span className="my-2">Nombre</span>
                        <input type="text" className="border border-gray-300 rounded-lg" />
                      </div>
                      <div className="flex flex-col">
                        <span className="my-2">Apellidos</span>
                        <input type="text" className="border border-gray-300 rounded-lg" />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-col">
                        <span className="my-2">Correo Electronico</span>
                        <input type="email" className="border border-gray-300 rounded-lg" />
                      </div>
                      <div className="flex flex-col">
                        <span className="my-2">Perfil</span>
                        <input type="text" className="border border-gray-300 rounded-lg" />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-col">
                        <span className="my-2">DNI</span>
                        <input type="number" className="border border-gray-300 rounded-lg" />
                      </div>
                      <div className="flex flex-col">
                        <span className="my-2">Contraseña</span>
                        <input type="text" className="border border-gray-300 rounded-lg" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <div className="flex flex-col p-4 border border-purple-600 rounded-lg">
                        <span className="mt-4 text-lg text-gray-400">Perfil</span>
                        <span className="mx-2 text-xs text-gray-400">Tamaño maximo</span>
                        <span className="mx-2 text-xs text-gray-400">2MB</span>
                        <input type="file" className="m-1 rounded-lg" />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between mt-4">
                      <button onClick={closeModal} className="px-6 py-4 font-bold border border-gray-300 rounded-xl">
                        Cancelar
                      </button>
                      <button className="px-6 py-4 bg-[#2F9B86] text-white rounded-xl">Guardar</button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenUpdate} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalUpdate}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Actualizar Usuario
                  </Dialog.Title>
                  <hr className="h-px w-[100%] bg-gray-200" />
                  <div className="flex flex-col m-6 mt-2 ">
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-col">
                        <span className="my-2">Nombre</span>
                        <input type="text" className="border border-gray-300 rounded-lg " value={user.Nombre} />
                      </div>
                      <div className="flex flex-col">
                        <span className="my-2">Apellidos</span>
                        <input type="text" className="border border-gray-300 rounded-lg" value={user.Apellidos} />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-col">
                        <span className="my-2">Correo Electronico</span>
                        <input type="email" className="border border-gray-300 rounded-lg" value={user.Estado} />
                      </div>
                      <div className="flex flex-col">
                        <span className="my-2">Perfil</span>
                        <input type="text" className="border border-gray-300 rounded-lg" value={user.cargo} />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-col">
                        <span className="my-2">DNI</span>
                        <input type="text" className="border border-gray-300 rounded-lg" value={user.Estado} />
                      </div>
                      <div className="flex flex-col">
                        <span className="my-2">Contraseña</span>
                        <input type="password" className="border border-gray-300 rounded-lg" value={user.cargo} />
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <div className="flex flex-col p-4 border border-purple-600 rounded-lg">
                        <span className="mt-4 text-lg text-gray-400">Perfil</span>
                        <span className="mx-2 text-xs text-gray-400">Tamaño maximo</span>
                        <span className="mx-2 text-xs text-gray-400">2MB</span>
                        <input type="file" className="m-1 rounded-lg" />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between mt-4">
                      <button
                        onClick={closeModalUpdate}
                        className="px-6 py-4 font-bold border border-gray-300 rounded-xl"
                      >
                        Cancelar
                      </button>
                      <button className="px-6 py-4 bg-[#2F9B86] text-white rounded-xl">Guardar</button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

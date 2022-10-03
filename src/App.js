import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'

import Inicio from './pages/Inicio'

/*carpeta admin */
import EmpresaAdmin from './pages/admin/EmpresaAdmin'
import UsuariosAdmin from './pages/admin/UsuariosAdmin'
import ReportesAdmin from './pages/admin/ReportesAdmin'
import ConfiguracionAdmin from './pages/admin/ConfiguracionAdmin'

/*carpeta admin - Empresa */
import RegistrarEmpresa from './pages/admin/Empresa/RegistrarEmpresa'
import ListasEmpresa from './pages/admin/Empresa/ListasEmpresa'
import Factura from './pages/user/ComprobantesPagos/Factura'
import Boleta from './pages/user/ComprobantesPagos/Boleta'

function App() {
  return (
    <div>
      <Sidebar />

      <div>
        <main>
          <div className="bg-white md:ml-64 ">
            <Routes>
              <Route path="/" element={<Inicio />} />

              {/*admin paginas principales */}
              <Route path="/empresa" element={<EmpresaAdmin />} />
              <Route path="/usuario" element={<UsuariosAdmin />} />
              <Route path="/reportes" element={<ReportesAdmin />} />
              <Route path="/configuracion" element={<ConfiguracionAdmin />} />

              {/*admin paginas secundarias*/}
              <Route path="/registrarempresa" element={<RegistrarEmpresa />} />
              <Route path="/listasempresa" element={<ListasEmpresa />} />

              {/*carpeta usuario */}
              <Route path="/factura" element={<Factura />} />
              <Route path="/boleta" element={<Boleta />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

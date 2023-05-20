import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListPage from './pages/ListPage'
import VentaDetalle from './pages/VentaDetalle'
import Error from './pages/Error'
import Options from './pages/Options'
import Clientes from './pages/Clientes'
import Productos from './pages/Productos'
import ClienteEdit from './pages/ClientesEdit'
import ProductosEdit from './pages/ProductosEdit'
import VentaEdit from './pages/VentaEdit'
import ListSelector from './pages/ListSelector'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path='ventadetalle/:id' element={<VentaDetalle />} />
        <Route path='options' element={<Options />} />
        <Route path='options/clientes' element={<Clientes />} />
        <Route path='options/clientes/upsert/:id' element={<ClienteEdit />} />
        <Route path='options/productos' element={<Productos />} />
        <Route
          path='options/productos/upsert/:id'
          element={<ProductosEdit />}
        />
        <Route path='/ventaedit/:id' element={<VentaEdit />} />
        <Route path='/listselector/:type' element={<ListSelector />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListPage from './pages/ListPage'
import VentaDetalle from './pages/VentaDetalle'
import Error from './pages/Error'
import VentaEdit from './pages/VentaEdit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path='ventadetalle/:id' element={<VentaDetalle />} />
        <Route path='ventaedit/:id' element={<VentaEdit />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

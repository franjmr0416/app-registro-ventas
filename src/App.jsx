import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListPage from './pages/ListPage'
import VentaDetalle from './pages/VentaDetalle'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path='ventadetalle' element={<VentaDetalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

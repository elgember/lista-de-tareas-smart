import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Buscador } from './Component/Buscador';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/inicio'} replace /> }/>
        <Route path='/inicio' element={<><Buscador /> </> } />
      </Routes>
    </>
  )
}

export default App

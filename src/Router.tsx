import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { LoginPage } from './pages/(Admin)/Login'
import { PetsPage } from './pages/Pets'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/admin">
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route path="/pets" element={<PetsPage />} />
    </Routes>
  )
}

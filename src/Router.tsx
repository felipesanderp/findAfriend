import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { LoginPage } from './pages/(Admin)/Login'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/admin">
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

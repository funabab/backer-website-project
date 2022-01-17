import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import LoginPage from './LoginPage'
import PasswordResetPage from './PasswordResetPage'
import RegisterPage from './RegisterPage'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
      </Routes>
    </BrowserRouter>
  )
}

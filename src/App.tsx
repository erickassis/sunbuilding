import AppRouter from "./pages/Router"
import { AuthProvider } from "./components/AuthContext"

export default function App() {
  return (
    <>
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
    </>
  )
}


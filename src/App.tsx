import "./App.css";
import LoginPage from "./components/firebase-vite-ui/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/firebase-vite-ui/RequireAuth";
import Dashboard from "./dashboard/Dashboard";
import { AuthContextProvider } from "./components/firebase-vite-ui/AuthContext";

function App() {
  return (
    <div className="min-w-screen min-h-screen">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;

import "./App.css";
import LoginPage from "./components/firebase-vite-ui/Auth/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/firebase-vite-ui/Auth/RequireAuth";
import Dashboard from "./dashboard/Dashboard";
import { AuthContextProvider } from "./components/firebase-vite-ui/Auth/AuthContext";
import AppSkeleton from "./components/skeleton/AppSkeleton";
import { TooltipProvider } from "./components/ui/tooltip";

function App() {
  return (
    <div className="min-w-screen min-h-screen">
      <AuthContextProvider>
        <TooltipProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route element={<RequireAuth />}>
                <Route element={<AppSkeleton />}>
                  <Route path="/" element={<Dashboard />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;

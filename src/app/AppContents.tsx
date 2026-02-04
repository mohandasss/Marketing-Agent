import { Route, Routes } from "react-router-dom";
import SplashPage from "../Global/ui/SplashPage";
import NotFound from "../Global/ui/NotFound";
import EmptyState from "../Global/ui/EmptyState";
import Login from "../pages/modules/Auth/Login";
import AppShell from "./layout/AppShell/AppShell";
function AppContents() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      {/* Public Routes */}
      <Route element={<AppShell />}>
        
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/empty-state" element={<EmptyState />} />

      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppContents;

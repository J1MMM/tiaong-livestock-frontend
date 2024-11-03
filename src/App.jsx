import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import "./styles/global.scss";
import LoginPage from "./pages/LoginPage/";
import Heatmap from "./pages/Heatmap/index.jsx";
import RequireAuth from "./components/auth/RequireAuth.jsx";
import PersistLogin from "./components/auth/PersistLogin.jsx";
import Missing from "./pages/404.jsx";
import Farmers from "./pages/Farmers/index.jsx";
import FarmersLayout from "./pages/Farmers/FarmersLayout.jsx";
import FarmersArchived from "./pages/Farmers/FarmersArchived.jsx";
import FarmersReports from "./pages/Farmers/FarmersReports.jsx";
import Approval from "./pages/Approval/index.jsx";
import Dashboard from "./pages/Dashboard/index.jsx";
import Announcement from "./pages/Announcement/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<RequireAuth />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="heatmap" element={<Heatmap />} />
              <Route path="approval" element={<Approval />} />
              <Route path="farmers" element={<FarmersLayout />}>
                <Route path="" element={<Farmers />} />
                <Route path="archived" element={<FarmersArchived />} />
                <Route path="reports" element={<FarmersReports />} />
              </Route>
              <Route path="announcement" element={<Announcement />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

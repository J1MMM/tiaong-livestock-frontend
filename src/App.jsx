import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AssessmentRoll, Pending, Cancels } from "./pages/Assessor";
import Layout from "./components/layout/Layout.jsx";
import theme from "./styles/theme.jsx";
import "./styles/global.scss";
import LoginPage from "./pages/LoginPage/";
import PersistLogin from "./components/auth/PersistLogin.jsx";
import RequireAuth from "./components/auth/RequireAuth.jsx";
import { LandTaxAR, LandTaxPaidList, LandTaxComputed } from "./pages/LandTax";
import { CashPendingList, CashPaidList } from "./pages/Cash";
import { AssessorLayout } from "./components/layout/AssessorLayout.jsx";
import { Missing } from "./pages/404.jsx";
import { LandTaxLayout } from "./components/layout/LandTaxLayout.jsx";
import { CashLayout } from "./components/layout/CashLayout.jsx";
import MyComponent from "./MyComponent.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PersistLogin />}> */}
        <Route path="/login" element={<LoginPage />} />

        {/* <Route element={<RequireAuth />}> */}
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<Navigate to="/assessor" />} /> */}
          <Route index element={<MyComponent />} />
          <Route path="heatmap" element={<MyComponent />} />
          <Route path="approval" element={<MyComponent />} />
          <Route path="farmers" element={<MyComponent />} />
          <Route path="announcement" element={<MyComponent />} />
          <Route path="archived" element={<MyComponent />} />
        </Route>
        {/* </Route> */}
        {/* </Route> */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

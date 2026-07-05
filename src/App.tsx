import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import ResetPassword from "./pages/AuthPages/ResetPassword";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import FormElements from "./pages/Forms/FormElements";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Publications from "./pages/Publications";
import Adoptions from "./pages/Adoptions";
import Donations from "./pages/Donations";
import Contacts from "./pages/Contacts";
import LocationHours from "./pages/LocationHours";
import Faqs from "./pages/Faqs";
import AdminUsers from "./pages/AdminUsers";
import AdminRolesPermissions from "./pages/AdminRolesPermissions";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/publicaciones" element={<Publications />} />
            <Route path="/adopciones" element={<Adoptions />} />
            <Route path="/donaciones" element={<Donations />} />
            <Route path="/contactos" element={<Contacts />} />
            <Route path="/ubicacion-horarios" element={<LocationHours />} />
            <Route path="/faqs" element={<Faqs />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/admin/usuarios" element={<AdminUsers />} />
            <Route path="/admin/roles-permisos" element={<AdminRolesPermissions />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Ui Elements */}
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login";
import Dashboard from "./pages/user/Dashboard";
import { States } from "./services/States";
import ApplicationstatusDashboard from "./pages/user/ApplicationstatusDashboard";
import Home from "./pages/user/Home";
import Email from "./assets/components/Email";
import About from "./assets/components/home/About";
import Admission from "./assets/components/home/Admission";
import Testimonial from "./assets/components/home/Testimonial";
import Faq from "./assets/components/home/Faq";
import ContactUs from "./assets/components/home/ContactUs";
import UserApplicationPage from "./pages/user/Application";
import AdminLogin from "./pages/admin/AdminLogin";
import TermsAndConditions from "../src/TermsAndConditions";
import Application from "./pages/user/Application";
import Team from "./pages/admin/team/Team";
import Contacts from "./pages/admin/contacts/Contacts";
import Invoices from "./pages/admin/invoices/Invoices";
import Form from "./pages/admin/form/Form";
import Bar from "./pages/admin/bar/Bar";
import Pie from "./pages/admin/pie/pie";
import Line from "./pages/admin/line/line";
import FAQ from "./pages/admin/faq/FAQ";
import Geography from "./pages/admin/geography/Geography";
import { MyProSidebarProvider } from "./pages/admin/global/sidebar/sidebarContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import DashboardAdmin from "./pages/admin/dashboard/DashboardAdmin";
import Topbar from "./pages/admin/global/Topbar";
import DashboardRoutes from "./pages/admin/DashboardRoutes";
import PrivacyPolicy from "./pages/user/Privacy";
import AdmissionHome from "./pages/user/AdmissionHome";
// import AdminView from './pages/admin/AdminHome';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <div>
      <>
        {/* <States> */}
        <Routes>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/home/about" exact element={<About />}></Route>
          <Route path="/home/admission" exact element={<Admission />}></Route>
          <Route path="/home/testimonials" exact element={<Testimonial />}></Route>
          <Route
            path="/home/testimonial"
            exact
            element={<Testimonial />}
          ></Route>
          <Route path="/home/faq" exact element={<Faq />}></Route>
          <Route path="/home/contact" exact element={<ContactUs />}></Route>
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/car" exact element={<Email />}></Route>
          <Route
            path="/appstatussuccess"
            exact
            element={<ApplicationstatusDashboard />}
          />
          <Route path="/application" exact element={<Application />} />
          <Route path="/terms"  element={<TermsAndConditions />} />
          {/* <Route path="/privacy" exact element={<PrivacyPolicy />} /> */}
          <Route path="/admissionhome" exact element={<AdmissionHome />} />
        </Routes>
        {/* </States> */}
      </>
    </div>
  );
}

export default App;

import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login";
import { States } from "./services/States";
import ApplicationstatusDashboard from "./pages/user/ApplicationstatusDashboard";
import Home from "./pages/user/Home";
import About from "./assets/components/home/About";
import Admission from "./assets/components/home/Admission";
import Testimonial from "./assets/components/home/Testimonial";
import Faq from "./assets/components/home/Faq";
import ContactUs from "./assets/components/home/ContactUs";
import TermsAndConditions from "../src/TermsAndConditions";
import Application from "./pages/user/Document/Application";
import AdmissionHome from "./pages/user/AdmissionHome";
import Upload from "./pages/user/Document/Upload";
import ApplicationBoot from "./pages/user/ApplicationBoot";
import FileUploadMultiple from "./pages/user/Uploadboot";
import Dashboard from "./pages/admin/Dashboard";
// import AdminView from './pages/admin/AdminHome';

function App() {
  //const [theme, colorMode] = useMode();
  return (
    <div>
      <>
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
          <Route path="/applicationboot" exact element={<ApplicationBoot />} />
          <Route path="/home/faq" exact element={<Faq />}></Route>
          <Route path="/uploadboot" exact element={<FileUploadMultiple />} />
          <Route path="/home/contact" exact element={<ContactUs />}></Route>
          <Route
            path="/appstatussuccess"
            exact
            element={<ApplicationstatusDashboard />}
          />
          <Route path="/upload" exact element={<Upload />} />
          <Route path="/application" exact element={<Application />} />
          <Route path="/terms"  element={<TermsAndConditions />} />
          {/* <Route path="/privacy" exact element={<PrivacyPolicy />} /> */}
          <Route path="/admissionhome" exact element={<AdmissionHome />} />
          <Route path="/admin/users" exact element={<Dashboard />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

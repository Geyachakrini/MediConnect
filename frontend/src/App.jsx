import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import HospitalList from "./pages/HospitalList";
import DoctorsList from "./pages/DoctorsList";
import BookAppointment from "./pages/BookAppointment";
import SearchHospitals from "./pages/SearchHospitals";

import SearchPharmacies from "./pages/SearchPharmacies";
import PharmacyList from "./pages/PharmacyList";
import BookMedicine from "./pages/BookMedicine";


export default function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hospitals/:city" element={<HospitalList />} />
        <Route path="/hospitals/:city/:hospitalName/doctors" element={<DoctorsList />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/search-hospitals" element={<SearchHospitals />} />
  
        <Route path="/search-pharmacies" element={<SearchPharmacies />} />
        <Route path="/pharmacy-list/:medicine" element={<PharmacyList />} />
        <Route path="/book-medicine" element={<BookMedicine />} />
        

      </Routes>
    </>
  );
} 



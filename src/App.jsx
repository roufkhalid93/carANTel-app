
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPassword from "./pages/ForgotPassword";
import MainPage from "./pages/MainPage";
import PromotionPage from "./pages/PromotionPage";
// import ProfilePage from "./pages/ProfileOld";
import { AuthProvider } from "./components/AuthProvider";
import CreateListing from "./pages/CreateListing";
import AboutUs from "./pages/AboutUs";
import ProfilePage from "./pages/ProfilePage";
// import ProfileNew from "./pages/ProfilePage";
// import ProfileOld from "./pages/ProfileOld";
// import ProfilePage2 from "./pages/ProfileNew";
// import ProfilePage from "./pages/ProfileOld";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";



export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/promotion" element={<PromotionPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            {/* <Route path="/profileOld" element={<ProfileOld />} /> */}
            <Route path="/createlisting" element={<CreateListing />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}
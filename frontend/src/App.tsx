import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Login />} /> {/* Default route */}
      </Routes>
    </>
  );
};

export default App;

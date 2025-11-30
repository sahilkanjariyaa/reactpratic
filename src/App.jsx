import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Services from "./Services";
import ProtectedRoute from "./ProtectedRoute";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm/>}/>
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        <Route path="/services" element={
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        } />
       {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

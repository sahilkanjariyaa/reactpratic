import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  let ok = sessionStorage.getItem("logged");
  return ok ? children : <Navigate to="/" />;
}

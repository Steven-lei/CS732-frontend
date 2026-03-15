import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Logout() {
  const { logOut } = useUserAuth();
  logOut()
    .then(() => {})
    .catch((err) => console.log(err));
  return <Navigate to="/login" />;
}

export default Logout;

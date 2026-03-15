import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Login from "./components/login/Login";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import NyNav from "./components/MyNav";

function App() {
  console.log("render app");
  return (
    <>
      <UserAuthContextProvider>
        <NyNav></NyNav>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </>
  );
}

export default App;

import {
  Container,
  Dropdown,
  Image,
  Nav,
  NavItem,
  Navbar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "bootstrap";

function MyNav() {
  console.log("render Layout");
  const { user } = useUserAuth();
  console.log(user);
  const { googleSignIn, logOut } = useUserAuth();

  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container fluid>
          <Navbar.Brand href="/">Authentication - Firebase </Navbar.Brand>
          <Nav>
            {user ? (
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={Nav.Link} readOnly>
                  {user?.displayName}
                  <Image
                    className="ms-2"
                    src={
                      user?.photoURL ||
                      "https://via.placeholder.com/32x32?text=P"
                    }
                    roundedCircle
                    style={{ width: "24px" }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item disabled>{user?.displayName}</Dropdown.Item>
                  <Dropdown.Item disabled>{user?.email}</Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      logOut();
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={Nav.Link}>Login</Dropdown.Toggle>
                <Dropdown.Menu align={{ lg: "end" }}>
                  <Dropdown.Item
                    onClick={() => {
                      googleSignIn();
                    }}
                  >
                    Login
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;

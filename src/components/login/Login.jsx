import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Alert,
  Container,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import GoogleButton from "react-google-button";
// import ReactFacebookLogin from "react-facebook-login";
import "./login.css";

import { useUserAuth } from "../../context/UserAuthContext";

function Login() {
  const [error, setError] = useState("");
  const { googleSignIn, facebookSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <Container className="dialog-login">
      <Card>
        <Container className="mt-3 d-flex justify-content-between">
          <h3 className="mb-3">Login</h3>
        </Container>
        <Card.Body>
          {error && (
            <Alert variant="danger" dismissible>
              {error}
            </Alert>
          )}

          <Container>
            <GoogleButton
              className="g-btn mt-3"
              type="dark"
              onClick={handleGoogleSignIn}
            />
            {/* <Row>
              <Col>
                <Button
                  className="mt-3"
                  onClick={handleFacebookLogin}
                  style={{ width: "100%" }}
                >
                  <i className="fab fa-facebook facebook-icon me-2"></i>
                  Facebook
                </Button>
              </Col>
            </Row> */}
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;

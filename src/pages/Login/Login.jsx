import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

import { useRef } from "react";
import { verifyUser } from "../../data/users";

import "./Login.css";

function Login({ setToken, setRole }) {
    const userRef = useRef();
    const passRef = useRef();

    return (
        <div className="login-container">
            <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                style={{ width: 100, height: 100, alignItems: "center" }}
            />
            <br />
            <br />
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
                type="text"
                id="username"
                placeholder="user"
                style={{ textAlign: "left" }}
                ref={userRef}
            />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                placeholder="pass"
                style={{ textAlign: "left" }}
                ref={passRef}
            />
            <button
                className="btn btn-success mt-3"
                style={{ textAlign: "center" }}
                onClick={() => {
                    const user = userRef.current.value.trim();
                    const pass = passRef.current.value.trim();
                    const userInfo = verifyUser(user, pass);
                    userRef.current.value = "";
                    passRef.current.value = "";

                    if (userInfo === null) {
                        alert("Wrong Username or password");
                        useRef.current.focus();
                    } else {
                        setToken(userInfo.token);
                        setRole(userInfo.role);
                    }
                }}
            >
                Login
            </button>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
    setRole: PropTypes.func.isRequired,
};

export default Login;

import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { FaRunning } from 'react-icons/fa';
import { signInWithGoogle } from '../Firebase/Firebase';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        let userId = localStorage.getItem("user");
        if (userId !== null) {
            navigate("/Index");
        } else {
            navigate("/Login");
        }
    }, []);

    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate("/Simpleloder");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const loginToDatabase = () => {
        if (Email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, Email, password)
                .then((userCredential) => {
                    const uid = userCredential.user.uid;
                    localStorage.setItem("user", uid);
                    navigate("/Index");
                    setEmail("");
                    setPassword("");
                })
                .catch((error) => {
                    alert(error.message);
                });
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <div style={{
            height: '100vh', // Full height of the viewport
            width: '100vw', // Full width of the viewport
            backgroundColor: '#1F2937',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            margin: 0 // Remove any default margin from the body
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                width: "100%",
                maxWidth: "400px", // Restrict width to a reasonable size
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <FaRunning style={{ fontSize: "3rem", color: "#4caf50" }} />
                </div>

                <h2 style={{
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    textAlign: "center",
                    color: "#333",
                    marginBottom: "1.5rem"
                }}>
                    Log In to Your Sports Account
                </h2>

                <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={loginToDatabase}>
                    <div>
                        <label htmlFor="email" style={{
                            fontSize: "1rem",
                            fontWeight: "600",
                            color: "#333"
                        }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                border: "1px solid #ddd",
                                borderRadius: "0.375rem",
                                outline: "none",
                                marginTop: "0.5rem",
                                fontSize: "1rem"
                            }}
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" style={{
                            fontSize: "1rem",
                            fontWeight: "600",
                            color: "#333"
                        }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                border: "1px solid #ddd",
                                borderRadius: "0.375rem",
                                outline: "none",
                                marginTop: "0.5rem",
                                fontSize: "1rem"
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "0.75rem",
                            backgroundColor: "#4caf50",
                            color: "white",
                            borderRadius: "0.375rem",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                            fontSize: "1.2rem",
                            fontWeight: "600",
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#388e3c"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#4caf50"}
                    >
                        Log In
                    </button>
                </form>

                <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                    <p style={{ color: "#555" }}>
                        Don't have an account?{' '}
                        <Link to="/signup" style={{
                            color: "#4caf50",
                            textDecoration: "underline"
                        }}>
                            Sign Up
                        </Link>
                    </p>
                </div>

                <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
                    <img
                        src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
                        alt="Google Sign In"
                        style={{
                            width: "160px",
                            cursor: "pointer"
                        }}
                        onClick={handleGoogleSignIn}
                    />
                </div>
            </div>
        </div>
    );
}

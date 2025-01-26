import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaRunning } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore"; // Import Firestore methods

export default function Login() {
    const navigate = useNavigate();
    
    const [cnic, setCnic] = useState(""); // State for CNIC
    const [email, setEmail] = useState(""); // State for Email
    const [password, setPassword] = useState(""); // State for Password

    const loginToDatabase = async (e) => {
        e.preventDefault(); // Prevent default form submission
        if (email !== "" && password !== "" && cnic !== "") {
            try {
                // Sign in with email and password
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const uid = userCredential.user.uid;

                // After successful sign-in, check CNIC in Firestore
                const docRef = doc(db, "users", cnic); // Assuming 'users' is the collection name and CNIC is the document ID
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    // If CNIC matches, get user data
                    const userData = docSnap.data();
                    // Save user data under local storage
                    localStorage.setItem("user", JSON.stringify(userData));
                    navigate("/");
                    setEmail("");
                    setPassword("");
                    setCnic("");
                } else {
                    alert("No user found with this CNIC.");
                }
            } catch (error) {
                alert(error.message);
            }
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#1F2937',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            margin: 0
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                width: "100%",
                maxWidth: "400px",
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
                    Log In to your microfinance account 
                </h2>

                <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={loginToDatabase}>
                    <div>
                        <label htmlFor="cnic" style={{
                            fontSize: "1rem",
                            fontWeight: "600",
                            color: "#333"
                        }}>CNIC</label>
                        <input
                            type="text"
                            id="cnic"
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                border: "1px solid #ddd",
                                borderRadius: "0.375rem",
                                outline: "none",
                                marginTop: "0.5rem",
                                fontSize: "1rem"
                            }}
                            value={cnic}
                            onChange={(e) => setCnic(e.target.value)}
                            placeholder="Enter your CNIC"
                        />
                    </div>

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
                            value={email}
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
            </div>
        </div>
    );
}

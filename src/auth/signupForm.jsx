import React, { useState } from 'react';
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { FaRunning } from 'react-icons/fa';
import { signInWithGoogle } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate("/index");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const signUpData = () => {
        if (Email !== "" && password !== "") {
            setIsLoading(true);
            createUserWithEmailAndPassword(auth, Email, password)
                .then(async (res) => {
                    const uid = res.user.uid;
                    localStorage.setItem("user", uid);
                    setEmail("");
                    setPassword("");
                    const userData = { Email, uid, name };
                    await setDoc(doc(db, "users", name), userData);
                    setIsLoading(false);
                    navigate("/index");
                })
                .catch((error) => {
                    alert(error.message);
                    setIsLoading(false);
                });
        } else {
            alert("Enter values");
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
                backgroundColor: '#F9FAFB',
                padding: '2rem 3rem',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '500px', // Maximum width for the form to keep it neat
                textAlign: 'center',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#2563EB',
                    borderRadius: '50%',
                    padding: '1rem',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                }}>
                    <FaRunning style={{ fontSize: '2.5rem', color: '#fff' }} />
                </div>

                <h2 style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    color: '#1F2937'
                }}>
                    Create Your Sports Account
                </h2>

                <form onSubmit={(e) => { e.preventDefault(); signUpData(); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label htmlFor='name' style={{
                            fontSize: '1rem',
                            fontWeight: '500',
                            color: '#4B5563'
                        }}>Name</label>
                        <input
                            id='name'
                            type="text"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid #D1D5DB',
                                borderRadius: '8px',
                                outline: 'none',
                                fontSize: '1rem',
                                marginTop: '0.5rem',
                            }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label htmlFor='email' style={{
                            fontSize: '1rem',
                            fontWeight: '500',
                            color: '#4B5563'
                        }}>Email</label>
                        <input
                            id='email'
                            type="email"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid #D1D5DB',
                                borderRadius: '8px',
                                outline: 'none',
                                fontSize: '1rem',
                                marginTop: '0.5rem',
                            }}
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor='password' style={{
                            fontSize: '1rem',
                            fontWeight: '500',
                            color: '#4B5563'
                        }}>Password</label>
                        <input
                            id='password'
                            type="password"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid #D1D5DB',
                                borderRadius: '8px',
                                outline: 'none',
                                fontSize: '1rem',
                                marginTop: '0.5rem',
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            backgroundColor: '#DC2626',
                            color: 'white',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                            marginTop: '1rem'
                        }}
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>

                <div style={{ marginTop: '1.5rem' }}>
                    <p style={{
                        color: '#4B5563',
                        fontSize: '0.875rem'
                    }}>
                        Already have an account?{' '}
                        <Link to="/login" style={{
                            color: '#DC2626',
                            textDecoration: 'underline'
                        }}>
                            Log In
                        </Link>
                    </p>
                </div>

                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <img
                        src="https://i.imgur.com/yczPzHD.png"
                        alt="Google Sign In"
                        style={{
                            width: '160px',
                            cursor: 'pointer'
                        }}
                        onClick={handleGoogleSignIn}
                    />
                </div>
            </div>

            <footer style={{
                position: 'absolute',
                bottom: '1rem',
                color: '#D1D5DB',
                fontSize: '0.875rem'
            }}>
                <p>© 2025 Sports Hub. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

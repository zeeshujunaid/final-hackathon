import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Loading() {
    useEffect(() => {
        checkUser();
    }, []);
    
    const navigate = useNavigate();

    const checkUser = async () => {
        const userId = await localStorage.getItem('user');
        if (userId !== null) {
            navigate("/Index");
        } else {
            navigate("/Login");
        }
    };

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            background: "linear-gradient(to bottom, black, #374151)"
        }}>
            <div style={{ textAlign: "center" }}>
                {/* Sports-themed GIF */}
                <img
                    src="https://media.giphy.com/media/26xBMuFqU8fqBsAN2/giphy.gif"
                    alt="Loading..."
                    style={{
                        width: "16rem",
                        height: "16rem",
                        margin: "auto",
                        borderRadius: "50%",
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                        animation: "bounce 1.5s infinite"
                    }}
                />

                {/* Animated text with gradient effect */}
                <h1 style={{
                    marginTop: "2rem",
                    fontSize: "2.25rem",
                    fontWeight: "800",
                    color: "transparent",
                    background: "linear-gradient(to right, #F59E0B, #F87171)",
                    backgroundClip: "text",
                    animation: "pulse 2s infinite"
                }}>
                    Your Sports Experience Awaits
                </h1>

                {/* Subtext for a welcoming message */}
                <p style={{
                    color: "#D1D5DB",
                    marginTop: "1rem",
                    fontSize: "1.125rem"
                }}>
                    We're gearing up for your ultimate sports journey. Hang tight!
                </p>

                {/* Stylish loading spinner animation */}
                <div style={{
                    marginTop: "2rem",
                    width: "4rem",
                    height: "4rem",
                    borderTop: "4px solid #F59E0B",
                    borderRight: "4px solid transparent",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                    margin: "auto"
                }}></div>
            </div>
        </div>
    );
}

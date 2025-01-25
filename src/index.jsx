import React from "react";
import Navbar from "./components/navbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Index() {
    const styles = {
        container: {
            fontFamily: "'Arial', sans-serif",
            margin: 0,
            padding: 0,
            width: "100vw",
            height: "100vh", // Full viewport height
            overflowX: "hidden",
        },
        heroSection: {
            position: "relative",
            width: "100%",
            height: "60%", // Adjust the height to 50% of the container
            overflow: "hidden", // Prevent any overflow
        },
        heroImage: {
            width: "100%",
            height: "100%", // Make the image fill the container
            objectFit: "cover", // Ensure the image covers the space
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1, // Keeps the image in the background
        },
        heroText: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the text
            textAlign: "center",
            color: "#fff",
            zIndex: 1, // Ensures text is above the image
            width: "100%",
        },
        section: {
            padding: "50px 20px",
            textAlign: "center",
            width: "100%",
        },
        sectionTitle: {
            fontSize: "2rem",
            marginBottom: "20px",
        },
        cardContainer: {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
        },
        card: {
            width: "22%",
            padding: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "#fff",
            textAlign: "center",
            cursor: "pointer", // Add a pointer cursor to show it's clickable
        },
        cardImage: {
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "15px",
        },
        cardTitle: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "10px",
        },
        footer: {
            backgroundColor: "#1A1714",
            color: "#fff",
            padding: "20px",
            width: "100%",
        },
        footerText: {
            fontSize: "0.9rem",
        },
    };

    const navigate = useNavigate(); // Initialize the navigate function

    return (
        <div style={styles.container}>
            <Navbar />
            {/* Full-Size Hero Section */}
            <div style={styles.heroSection}>
                {/* Hero Image */}
                <img
                    src="https://i.brecorder.com/medium/2024/08/66be92cb847e0.jpg" // Replace with your desired image URL
                    alt="Hero Image"
                    style={styles.heroImage}
                />

                {/* Text on top of the image */}
                <div style={styles.heroText}>
                    <h1 style={{ fontSize: "4rem", fontWeight: "bold", color: "black", paddingBottom: "5%" }}>
                        WELCOME TO THE SAYLANI WELFARE TRUST
                    </h1>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "black", paddingBottom: "5%" }}>
                        WANT LOAN ON EASY INSTALLMENT
                    </h2>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "black", paddingBottom: "5%" }}>
                        GET IT BY SAYLANI
                    </h2>
                </div>
            </div>

            {/* Services Section with 4 Divs in a Row */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Want loan? Choose a service</h2>
                <div style={styles.cardContainer}>
                    <div 
                        style={styles.card} 
                        onClick={() => navigate("/Shadi")} // Navigate to the Shadi loan page
                    >
                        <img
                            style={styles.cardImage}
                            src="https://i.tribune.com.pk/media/images/Express-Tribune-(7)1733481952-0/Express-Tribune-(7)1733481952-0.jpg" // Replace with your desired image URL
                            alt="SHADI"
                        />
                        <h3 style={styles.cardTitle}>SHADI LOAN</h3>
                        <p>Get your Shadi loan after filling out your information</p>
                    </div>
                    <div 
                        style={styles.card} 
                        onClick={() => navigate("/home")} // Navigate to the Home Construction loan page
                    >
                        <img
                            style={styles.cardImage}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOlRI7T8G6QWbuTX_v0jMnRwTt9KQJ_a8Xg&s" // Replace with your desired image URL
                            alt="HOME CONSTRUCTION"
                        />
                        <h3 style={styles.cardTitle}>HOME CONSTRUCTION LOAN</h3>
                        <p>Get your Home Construction loan after filling out your information</p>
                    </div>
                    <div 
                        style={styles.card} 
                        onClick={() => navigate("/buisnees")} // Navigate to the Business Startup loan page
                    >
                        <img
                            style={styles.cardImage}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmWNsO-L9uHAvOJgTDm3WxQwAarpjQeRj9g&s" // Replace with your desired image URL
                            alt="BUSINESS STARTUP"
                        />
                        <h3 style={styles.cardTitle}>BUSINESS STARTUP LOAN</h3>
                        <p>Get your Business Startup loan after filling out your information</p>
                    </div>
                    <div 
                        style={styles.card} 
                        onClick={() => navigate("/education")} // Navigate to the Education loan page
                    >
                        <img
                            style={styles.cardImage}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCngzTOokEoH2-JxiEM48ZZ1bV4H185nKsvw&s" // Replace with your desired image URL
                            alt="EDUCATION LOAN"
                        />
                        <h3 style={styles.cardTitle}>EDUCATION LOAN</h3>
                        <p>Get your Education loan after filling out your information</p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer style={styles.footer}>
                <p style={styles.footerText}>
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default Index;

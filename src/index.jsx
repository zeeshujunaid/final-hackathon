import React from "react";
import Navbar from "./components/navbar";
import { useNavigate } from "react-router-dom";

function Index() {
    const styles = {
        container: {
            fontFamily: "'Poppins', sans-serif",
            margin: 0,
            padding: 0,
            width: "100vw",
            height: "100vh",
            overflowX: "hidden",
            color: "#333",
            backgroundColor: "#f9f9f9",
        },
        heroSection: {
            position: "relative",
            width: "100%",
            height: "70vh",
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('https://i.brecorder.com/medium/2024/08/66be92cb847e0.jpg') no-repeat center center / cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
        },
        heroText: {
            maxWidth: "600px",
            fontSize: "1.5rem",
            lineHeight: "2.5rem",
        },
        heroTitle: {
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "1rem",
            letterSpacing: "1px",
            textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
        },
        section: {
            padding: "60px 20px",
            textAlign: "center",
            width: "100%",
            background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
            borderTop: "2px solid #ddd",
        },
        sectionTitle: {
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "40px",
            color: "#333",
        },
        cardContainer: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
        },
        card: {
            width: "280px",
            padding: "20px",
            boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
            backgroundColor: "#fff",
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s, box-shadow 0.3s",
            border: "1px solid #ddd",
        },
        cardHover: {
            transform: "scale(1.05)",
            boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.2)",
        },
        cardImage: {
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "15px",
        },
        cardTitle: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
        },
        footer: {
            backgroundColor: "#1a1714",
            color: "#fff",
            padding: "30px 20px",
            textAlign: "center",
            marginTop: "40px",
            borderTop: "2px solid #444",
        },
        footerText: {
            fontSize: "0.9rem",
        },
    };

    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <Navbar />
            <div style={styles.heroSection}>
                <div style={styles.heroText}>
                    <h1 style={styles.heroTitle}>
                        Welcome to Saylani Welfare Trust
                    </h1>
                    <p>
                        Helping you achieve your dreams with easy installment loans.
                        Whether it's for marriage, education, or starting a business, we've got you covered.
                    </p>
                </div>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Choose a Service</h2>
                <div style={styles.cardContainer}>
                    <div
                        style={styles.card}
                        onClick={() => navigate("/Shadi")}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = styles.cardHover.transform;
                            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0px 10px 15px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        <img
                            style={styles.cardImage}
                            src="https://i.tribune.com.pk/media/images/Express-Tribune-(7)1733481952-0/Express-Tribune-(7)1733481952-0.jpg"
                            alt="Shadi Loan"
                        />
                        <h3 style={styles.cardTitle}>Shadi Loan</h3>
                        <p>Get your Shadi loan after filling out your information</p>
                    </div>
                    <div
                        style={styles.card}
                        onClick={() => navigate("/home")}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = styles.cardHover.transform;
                            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0px 10px 15px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        <img
                            style={styles.cardImage}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOlRI7T8G6QWbuTX_v0jMnRwTt9KQJ_a8Xg&s"
                            alt="Home Construction Loan"
                        />
                        <h3 style={styles.cardTitle}>Home Construction Loan</h3>
                        <p>Build your dream home with our assistance</p>
                    </div>
                    <div
                        style={styles.card}
                        onClick={() => navigate("/buisnees")}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = styles.cardHover.transform;
                            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0px 10px 15px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        <img
                            style={styles.cardImage}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmWNsO-L9uHAvOJgTDm3WxQwAarpjQeRj9g&s"
                            alt="Business Startup Loan"
                        />
                        <h3 style={styles.cardTitle}>Business Startup Loan</h3>
                        <p>Kickstart your business with a secure loan</p>
                    </div>
                    <div
                        style={styles.card}
                        onClick={() => navigate("/education")}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = styles.cardHover.transform;
                            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0px 10px 15px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        <img
                            style={styles.cardImage}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCngzTOokEoH2-JxiEM48ZZ1bV4H185nKsvw&s"
                            alt="Education Loan"
                        />
                        <h3 style={styles.cardTitle}>Education Loan</h3>
                        <p>Invest in your future with an education loan</p>
                    </div>
                </div>
            </div>

            <footer style={styles.footer}>
                <p style={styles.footerText}>
                    &copy; {new Date().getFullYear()} Saylani Welfare Trust. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default Index;

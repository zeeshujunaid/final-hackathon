import { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { FaHome, FaServicestack, FaHandshake } from "react-icons/fa";

function Navbar() {
  const styles = {
    navbar: {
      height: "100px", // Increased height
      width: "100%",
      display: "flex",
      justifyContent: "space-between", // Space items evenly
      alignItems: "center",
      backgroundColor: "#28A745", // Green background
      padding: "0 20px",
      color: "white",
      fontFamily: "'Poppins', sans-serif",
    },
    menuList: {
      listStyleType: "none",
      padding: "0",
      display: "flex",
      gap: "30px", // Space between menu items
    },
    menuItem: {
      fontSize: "1.2rem",
      color: "white",
      display: "flex",
      alignItems: "center",
    },
    loginButton: {
      height: "40px",
      width: "120px",
      backgroundColor: "#EB7F25", // Button color
      color: "white",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "14px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.navbar}>
      {/* Desktop Menu */}
      <ul style={styles.menuList}>
        <li style={styles.menuItem}>
          <FaHome />
          Home
        </li>
        <li style={styles.menuItem}>
          <IoMdContact />
          About Us
        </li>
        <li style={styles.menuItem}>
          <FaServicestack />
          Services
        </li>
        <li style={styles.menuItem}>
          <FaHandshake />
          Portfolio
        </li>
        <li style={styles.menuItem}>Contact</li>
      </ul>

      {/* Login Button */}
      <div>
        <button style={styles.loginButton}>Login</button>
      </div>
    </div>
  );
}

export default Navbar;

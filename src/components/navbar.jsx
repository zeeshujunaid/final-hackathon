import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaHome, FaServicestack, FaHandshake } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdContacts } from "react-icons/md";

function Navbar() {
  const [isShow, setShow] = useState(false);

  const styles = {
    navbar: {
      height: "69px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#1A1714",
      overflowX: "hidden",
    },
    mobileMenu: {
      display: isShow ? "block" : "none",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundColor: "#1A1714",
      zIndex: 10,
      color: "white",
    },
    closeBtn: {
      fontSize: "1.5rem",
      textAlign: "right",
      margin: "10px 15px 0 0",
    },
    menuList: {
      listStyleType: "none",
      padding: "0 20px",
      marginTop: "20px",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "1.2rem",
      marginBottom: "15px",
      color: "white",
    },
    logo: {
      width: "100px",
    },
    desktopMenu: {
      display: "flex",
      gap: "30px",
      fontSize: "1rem",
      color: "white",
    },
    menuButton: {
      fontSize: "1.5rem",
      color: "white",
      cursor: "pointer",
    },
    actionButton: {
      height: "35px",
      width: "150px",
      backgroundColor: "#EB7F25",
      color: "white",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.navbar}>
      {/* Mobile Menu */}
      {isShow && (
        <div style={styles.mobileMenu}>
          <button
            onClick={() => setShow(false)}
            style={styles.closeBtn}
          >
            <ImCross />
          </button>
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
            <li style={styles.menuItem}>
              <MdContacts />
              Contact
            </li>
          </ul>
        </div>
      )}

      {/* Logo */}

      {/* Desktop Menu */}
      <div style={{ display: "none", "@media(minWidth: 768px)": { display: "flex" } }}>
        <ul style={styles.desktopMenu}>
          <li>Pricing</li>
          <li>About</li>
          <li>Tools</li>
          <li>How it works</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <div>
        <span
          style={styles.menuButton}
          onClick={() => setShow(!isShow)}
        >
          {isShow ? <ImCross /> : <FaBars />}
        </span>
      </div>

      {/* Action Button */}
      <div style={{ display: "none", "@media(minWidth: 768px)": { display: "flex" } }}>
        <div style={styles.actionButton}>
          <h3>Calculate Solar</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

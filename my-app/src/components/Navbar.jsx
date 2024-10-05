import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import avatar from "../assets/avatar.avif";
import { PhantomConnect } from "./PhantomConnect";
const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#000",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow for depth
    position: "fixed", // Fixes the navbar at the top
    width: "95%",
    top: 0,
    zIndex: 1,
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    letterSpacing: "2px",
    color: "#f8f8f8",
    cursor: "pointer",
  };

  const linksStyle = {
    listStyleType: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#f8f8f8",
    fontSize: "1.3rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const linkHoverStyle = {
    backgroundColor: "#f8f8f8",
    color: "#000",
  };

  const profileImageStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
    border: "2px solid #f8f8f8", // Adds a border around the profile picture
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, linkHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, linkStyle);
  };

  const handleProfileClick = () => {
    window.location.href = "/profile"; // Redirects to profile page, can be changed to open a modal
  };

  return (
    <div>
      <nav style={navbarStyle}>
     <img src={logo} alt="" width="100" height="50" />
      <ul style={linksStyle}>
      <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/apply" style={linkStyle}>Apply</Link>
        </li>
        <li>
          <Link to="/services" style={linkStyle}>Services</Link>
        </li>
        <li>
          <Link to="/createPost" style={linkStyle}>Post</Link>
        </li>
        <li>
          <Link to="/signin" style={linkStyle}>Sign-in</Link>
        </li>
      </ul>
      {/* Profile Image */}
      <img
        src={avatar} // Replace this with your actual profile image URL
        alt="Profile"
        style={profileImageStyle}
        onClick={handleProfileClick}
      />

    </nav>
          
    </div>
    
  );
};

export default Navbar;

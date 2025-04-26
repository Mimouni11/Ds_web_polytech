import React from "react";
import {
  FaUser,
  FaShoppingCart,
  FaPhoneAlt,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { BiSearch } from "react-icons/bi"; // For the magnifying glass inside the search bar

const Header = () => {
  return (
    <header
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}
    >
      {/* Wrapper for the entire header to control width and padding */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
        {/* Top Header (Logo, Search Bar, Icons) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 0",
            justifyContent: "space-between",
            borderBottom: "1px solid #ddd",
          }}
        >
          {/* Left: Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo.jpg" // Replace with the actual path to your logo image (should include "2B TRADING" text)
              style={{ height: "40px" }}
              alt="2B Trading Logo"
            />
          </div>

          {/* Center: Search Bar */}
          <div
            style={{
              flex: 1,
              margin: "0 40px",
              position: "relative",
              maxWidth: "600px",
            }}
          >
            <input
              type="text"
              placeholder="ex : arduino, raspberry, diode, ..."
              style={{
                width: "100%",
                padding: "8px 40px 8px 10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "14px",
                color: "#666",
              }}
            />
            <BiSearch
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#666",
                fontSize: "18px",
              }}
            />
          </div>

          {/* Right: Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <FaUser size={18} style={{ color: "#333" }} />
            <div style={{ position: "relative" }}>
              <FaShoppingCart size={18} style={{ color: "#333" }} />
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "black",
                  color: "white",
                  borderRadius: "50%",
                  padding: "1px 4px",
                  fontSize: "10px",
                }}
              >
                0
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Bar (Up Arrow, Menu Items, Phone Numbers) */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 0",
            justifyContent: "space-between",
            borderBottom: "1px solid #ddd",
          }}
        >
          {/* Left: Up Arrow + Menu Items */}
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <FaAngleUp size={14} style={{ color: "#333" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "35px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span
                  style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
                >
                  ELECTRONIQUE
                </span>
                <FaAngleDown size={14} style={{ color: "#333" }} />
                <span
                  style={{
                    fontSize: "10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "1px 4px",
                    borderRadius: "3px",
                    marginLeft: "5px",
                  }}
                >
                  NEW
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span
                  style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
                >
                  CNC-3D-GRAVURE
                </span>
                <FaAngleDown size={14} style={{ color: "#333" }} />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span
                  style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
                >
                  COMPOSANTS
                </span>
                <FaAngleDown size={14} style={{ color: "#333" }} />
                <span
                  style={{
                    fontSize: "10px",
                    backgroundColor: "red",
                    color: "white",
                    padding: "1px 4px",
                    borderRadius: "3px",
                    marginLeft: "5px",
                  }}
                >
                  HOT
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span
                  style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
                >
                  SCIENCES
                </span>
                <FaAngleDown size={14} style={{ color: "#333" }} />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span
                  style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
                >
                  TEST-MESURE-REPARATION
                </span>
                <FaAngleDown size={14} style={{ color: "#333" }} />
              </div>
            </div>
          </div>

          {/* Right: Phone Numbers */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "13px",
              color: "#333",
            }}
          >
            <FaPhoneAlt style={{ marginRight: "5px", color: "#333" }} />
            <span>
              73367243 - 58384693 - 58384691 - 58384692 - 57039970 - 57039971 -
              51254142
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

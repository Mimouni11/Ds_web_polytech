import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import products from "./products.json"; // Adjust the path based on your project structure

const TrendingProducts = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("Produits Phares");

  // Determine which articles to display based on the active tab
  const displayedArticles =
    activeTab === "Produits Phares"
      ? products.produitsPhares
      : activeTab === "Nouveaux Produits"
      ? products.nouveauxProduits
      : activeTab === "Produits Les Plus Vendus"
      ? products.produitsLesPlusVendus
      : products.produitsPhares; // Default to Produits Phares

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "20px 20px",
        marginTop: "40px", // Spacing between PromoSection and TrendingProducts
      }}
    >
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Produit Tendance
        </h2>
        {/* Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: activeTab === "Top Marques" ? "#000" : "#666",
              fontWeight: activeTab === "Top Marques" ? "bold" : "normal",
              borderBottom:
                activeTab === "Top Marques" ? "2px solid #000" : "none",
              cursor: "pointer",
            }}
            onClick={() => setActiveTab("Top Marques")}
          >
            Top Marques
          </span>
          <span
            style={{
              fontSize: "14px",
              color: activeTab === "Produits Phares" ? "#000" : "#666",
              fontWeight: activeTab === "Produits Phares" ? "bold" : "normal",
              borderBottom:
                activeTab === "Produits Phares" ? "2px solid #000" : "none",
              cursor: "pointer",
            }}
            onClick={() => setActiveTab("Produits Phares")}
          >
            Produits Phares
          </span>
          <span
            style={{
              fontSize: "14px",
              color: activeTab === "Nouveaux Produits" ? "#000" : "#666",
              fontWeight: activeTab === "Nouveaux Produits" ? "bold" : "normal",
              borderBottom:
                activeTab === "Nouveaux Produits" ? "2px solid #000" : "none",
              cursor: "pointer",
            }}
            onClick={() => setActiveTab("Nouveaux Produits")}
          >
            Nouveaux Produits
          </span>
          <span
            style={{
              fontSize: "14px",
              color: activeTab === "Produits Les Plus Vendus" ? "#000" : "#666",
              fontWeight:
                activeTab === "Produits Les Plus Vendus" ? "bold" : "normal",
              borderBottom:
                activeTab === "Produits Les Plus Vendus"
                  ? "2px solid #000"
                  : "none",
              cursor: "pointer",
            }}
            onClick={() => setActiveTab("Produits Les Plus Vendus")}
          >
            Produits Les Plus Vendus
          </span>
          {/* Navigation Arrows */}
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FaArrowLeft size={20} style={{ color: "#666" }} />
            </button>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FaArrowRight size={20} style={{ color: "#666" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
          gridTemplateRows: "repeat(2, auto)", // 2 rows
          gap: "20px", // Gap between articles
        }}
      >
        {displayedArticles.map((article, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)", // Matching shadow
              border: "1px solid #ddd", // Matching border
              padding: "15px",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* "NOUVEAU" Badge for Nouveaux Produits */}
            {activeTab === "Nouveaux Produits" && (
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  fontSize: "12px",
                  padding: "2px 8px",
                  borderRadius: "3px",
                  textTransform: "uppercase",
                }}
              >
                NOUVEAU
              </span>
            )}
            {/* Image */}
            <img
              src={article.image}
              alt={article.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            {/* Title */}
            <h3
              style={{
                fontSize: "14px",
                color: "#333",
                marginBottom: "10px",
                height: "40px", // Fixed height to ensure alignment
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {article.title}
            </h3>
            {/* Price */}
            <div style={{ fontSize: "14px", color: "#333" }}>
              {activeTab === "Produits Phares" && article.originalPrice && (
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#999",
                    marginRight: "5px",
                  }}
                >
                  {article.originalPrice}
                </span>
              )}
              <span style={{ fontWeight: "bold" }}>{article.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

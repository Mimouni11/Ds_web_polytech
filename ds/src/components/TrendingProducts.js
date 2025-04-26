import React from "react";
import { FaEye, FaShoppingCart, FaHeart } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TrendingProducts = () => {
  // Sample articles data (8 articles for a 2x4 grid)
  const articles = [
    {
      title: "Chargeur Lipo solaire (3.7V) DFR0284",
      image: "/images/chargeur-lipo.jpg", // Replace with actual image path
      price: "20,800 TND",
      originalPrice: "25,000 TND",
    },
    {
      title: "Serrure Electrique DC 24V 300mA",
      image: "/images/serrure-electrique.jpg", // Replace with actual image path
      price: "18,250 TND",
      originalPrice: "",
    },
    {
      title: "Kit de démarrage d'une ferme intelligente STEM ESP32 (AECBOTT)",
      image: "/images/kit-demarrage.png", // Replace with actual image path
      price: "470,000 TND",
      originalPrice: "",
    },
    {
      title: "Contrôleur LCD numérique de température PID MT-S",
      image: "/images/controleur-lcd.png", // Replace with actual image path
      price: "70,000 TND",
      originalPrice: "",
    },
    {
      title: "SUPPORT CAPTEUR ULTRASON HC-SR04",
      image: "/images/capteur.jpg", // Replace with actual image path
      price: "20,800 TND",
      originalPrice: "25,000 TND",
    },
    {
      title: "Arduino Compatible UART/SPI JPEG Camera Shield",
      image: "/images/arduino.jpg", // Replace with actual image path
      price: "18,250 TND",
      originalPrice: "",
    },
    {
      title: "4.3 TFT color display 480x272 with touch screen Mikroe",
      image: "/images/kit-demarrage.png", // Replace with actual image path
      price: "470,000 TND",
      originalPrice: "",
    },
    {
      title: "GOBLIN 2 IoT development board",
      image: "/images/controleur-lcd.png", // Replace with actual image path
      price: "70,000 TND",
      originalPrice: "",
    },
  ];

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
          <span style={{ fontSize: "14px", color: "#666" }}>Top Marques</span>
          <span
            style={{
              fontSize: "14px",
              color: "#000",
              fontWeight: "bold",
              borderBottom: "2px solid #000",
            }}
          >
            Produits Phares
          </span>
          <span style={{ fontSize: "14px", color: "#666" }}>
            Nouveaux Produits
          </span>
          <span style={{ fontSize: "14px", color: "#666" }}>
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
        {articles.map((article, index) => (
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
            {/* Icons */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <FaEye size={18} style={{ color: "#666" }} />
              <FaShoppingCart size={18} style={{ color: "#666" }} />
              <FaHeart size={18} style={{ color: "#666" }} />
            </div>
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
              {article.originalPrice && (
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

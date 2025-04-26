import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  // Sample articles data (you can expand this)
  const articles = [
    {
      title: "PRODUITS RASPBERRY ORIGINAL",
      image: "/images/raspberry-pi.jpg", // Replace with actual image path
      brandLogo: "/images/raspberry-pi-logo.png", // Replace with actual logo path
      brandText: "Raspberry Pi Approved Reseller",
    },
    {
      title: "Imprimante 3D Résine Jupiter SE 6K",
      image: "/images/elegoo-jupiter.jpg", // Replace with actual image path
      brandLogo: "/images/elegoo-logo.png", // Replace with actual logo path
      brandText: "ELEGOO",
    },
    {
      title: "Imprimante 3D Creality K1C",
      image: "/images/creality-k1c.jpg", // Replace with actual image path
      brandLogo: "/images/creality-logo.png", // Replace with actual logo path
      brandText: "CREALITY",
    },
    {
      title: "Machine De Gravure Et Découpe Laser 300X200mm 50W 3020",
      image: "/images/machine.jpg", // Replace with actual image path
      brandLogo: "/images/creality-logo.png", // Replace with actual logo path
      brandText: "CREALITY",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === articles.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [articles.length]);

  // Manual navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate the articles to display (3 at a time)
  const displayedArticles = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % articles.length;
    displayedArticles.push(articles[index]);
  }

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "20px 20px",
        marginTop: "40px", // Spacing between header and carousel
      }}
    >
      {/* Carousel Container */}
      <div style={{ position: "relative" }}>
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 5,
          }}
        >
          <FaArrowLeft size={20} style={{ color: "#666" }} />
        </button>

        {/* Articles */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            transition: "transform 0.5s ease",
          }}
        >
          {displayedArticles.map((article, index) => (
            <div
              key={index}
              style={{
                flex: "1",
                maxWidth: "400px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)", // Increased shadow intensity
                border: "1px solid #ddd", // Added subtle border
                padding: "15px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                {article.title}
              </h3>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              >
                Commander
              </button>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={article.brandLogo}
                  alt={article.brandText}
                  style={{ height: "30px", marginRight: "5px" }}
                />
                {article.brandText.includes("Raspberry") && (
                  <span
                    style={{
                      backgroundColor: "#c51a4a",
                      color: "white",
                      fontSize: "12px",
                      padding: "2px 5px",
                      borderRadius: "3px",
                    }}
                  >
                    {article.brandText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 5,
          }}
        >
          <FaArrowRight size={20} style={{ color: "#666" }} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

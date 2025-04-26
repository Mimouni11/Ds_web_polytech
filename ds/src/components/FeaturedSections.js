import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import products from "./products.json"; // Adjust the path based on your project structure

const FeaturedSections = () => {
  // State to manage the current index for each carousel
  const [indexALaUne, setIndexALaUne] = useState(0);
  const [indexNouveaux, setIndexNouveaux] = useState(0);
  const [indexMeilleurs, setIndexMeilleurs] = useState(0);

  // Articles from JSON
  const articlesALaUne = products.articlesALaUne;
  const nouveauxArticles = products.nouveauxProduits;
  const meilleursArticles = products.meilleursArticles;

  // Function to calculate displayed articles (2 at a time)
  const getDisplayedArticles = (articles, currentIndex) => {
    const displayed = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % articles.length;
      displayed.push(articles[index]);
    }
    return displayed;
  };

  // Navigation handlers for each carousel
  const handlePrevALaUne = () => {
    setIndexALaUne((prev) =>
      prev === 0 ? articlesALaUne.length - 1 : prev - 1
    );
  };
  const handleNextALaUne = () => {
    setIndexALaUne((prev) =>
      prev === articlesALaUne.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevNouveaux = () => {
    setIndexNouveaux((prev) =>
      prev === 0 ? nouveauxArticles.length - 1 : prev - 1
    );
  };
  const handleNextNouveaux = () => {
    setIndexNouveaux((prev) =>
      prev === nouveauxArticles.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevMeilleurs = () => {
    setIndexMeilleurs((prev) =>
      prev === 0 ? meilleursArticles.length - 1 : prev - 1
    );
  };
  const handleNextMeilleurs = () => {
    setIndexMeilleurs((prev) =>
      prev === meilleursArticles.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "20px 20px",
        marginTop: "40px", // Spacing between TrendingProducts and FeaturedSections
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        {/* Articles à la Une */}
        <div style={{ flex: "1" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            Articles à la Une
          </h2>
          <div style={{ position: "relative" }}>
            <button
              onClick={handlePrevALaUne}
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
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                transition: "transform 0.5s ease",
              }}
            >
              {getDisplayedArticles(articlesALaUne, indexALaUne).map(
                (article, index) => (
                  <div
                    key={index}
                    style={{
                      flex: "1",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
                      border: "1px solid #ddd",
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
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
                    <h3
                      style={{
                        fontSize: "14px",
                        color: "#333",
                        marginBottom: "10px",
                        height: "40px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {article.title}
                    </h3>
                    <div style={{ fontSize: "14px", color: "#333" }}>
                      <span style={{ fontWeight: "bold" }}>
                        {article.price}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              onClick={handleNextALaUne}
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

        {/* Nouveaux Articles */}
        <div style={{ flex: "1" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            Nouveaux Articles
          </h2>
          <div style={{ position: "relative" }}>
            <button
              onClick={handlePrevNouveaux}
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
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                transition: "transform 0.5s ease",
              }}
            >
              {getDisplayedArticles(nouveauxArticles, indexNouveaux).map(
                (article, index) => (
                  <div
                    key={index}
                    style={{
                      flex: "1",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
                      border: "1px solid #ddd",
                      padding: "15px",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
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
                    <h3
                      style={{
                        fontSize: "14px",
                        color: "#333",
                        marginBottom: "10px",
                        height: "40px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {article.title}
                    </h3>
                    <div style={{ fontSize: "14px", color: "#333" }}>
                      <span style={{ fontWeight: "bold" }}>
                        {article.price}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              onClick={handleNextNouveaux}
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

        {/* Meilleurs Articles */}
        <div style={{ flex: "1" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            Meilleurs Articles
          </h2>
          <div style={{ position: "relative" }}>
            <button
              onClick={handlePrevMeilleurs}
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
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                transition: "transform 0.5s ease",
              }}
            >
              {getDisplayedArticles(meilleursArticles, indexMeilleurs).map(
                (article, index) => (
                  <div
                    key={index}
                    style={{
                      flex: "1",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
                      border: "1px solid #ddd",
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
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
                    <h3
                      style={{
                        fontSize: "14px",
                        color: "#333",
                        marginBottom: "10px",
                        height: "40px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {article.title}
                    </h3>
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
                      <span style={{ fontWeight: "bold" }}>
                        {article.price}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              onClick={handleNextMeilleurs}
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
      </div>
    </div>
  );
};

export default FeaturedSections;

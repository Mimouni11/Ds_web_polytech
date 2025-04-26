import React from "react";

const PromoSection = () => {
  // Data for the two sections
  const sections = [
    {
      image: "/images/new-products.png", // Replace with actual image path (should include "NOUVEAUX PRODUITS" text)
    },
    {
      image: "/images/promotions.png", // Replace with actual image path (should include "NOS PROMOTIONS" text)
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "20px 20px",
        marginTop: "40px", // Spacing between CategoryGrid and PromoSection
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px", // Gap between the two sections
          justifyContent: "center",
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              flex: "1",
              textAlign: "center",
            }}
          >
            <img
              src={section.image}
              alt="Promo Section"
              style={{
                width: "100%",
                height: "300px", // Adjust height as needed
                objectFit: "cover", // Use "cover" to fill the space, adjust if needed
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSection;

import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div>
      {/* Facebook Icon on the Left */}
      <div
        style={{
          position: "fixed",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <FaFacebook size={30} style={{ color: "#3b5998" }} />
      </div>

      {/* WhatsApp Icon on the Right */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <FaWhatsapp size={30} style={{ color: "#25D366" }} />
      </div>
    </div>
  );
};

export default SocialIcons;

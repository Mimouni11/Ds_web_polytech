import React from "react";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaBalanceScale,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* Newsletter Section */}
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Notre Newsletter
        </h2>
        <p
          style={{
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Recevez les dernières nouvelles et offres
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            style={{
              padding: "10px",
              fontSize: "14px",
              borderRadius: "50px",
              border: "none",
              width: "300px",
            }}
          />
          <button
            style={{
              backgroundColor: "#00aaff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "50px",
              fontSize: "14px",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            S’abonner
          </button>
        </div>
      </div>

      {/* Voir Carte Button */}
      <div
        style={{
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        <button
          style={{
            backgroundColor: "#00aaff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            margin: "0 auto",
            cursor: "pointer",
          }}
        >
          <FaMapMarkerAlt />
          Voir carte
        </button>
      </div>

      {/* Main Footer Section */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Column 1: 2B Trading */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <img
            src="/logo.jpg" // Replace with actual logo path
            alt="2B Trading Logo"
            style={{
              width: "150px",
              marginBottom: "10px",
            }}
          />
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              direction: "rtl", // For Arabic text
            }}
          >
            You can trust us تنجم تاثق فينا
          </p>
        </div>

        {/* Column 2: Notre Société */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Notre Société
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              fontSize: "14px",
              color: "#666",
            }}
          >
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Horaires de Travail
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Mentions Légales
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Service Clients
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Conditions
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Contactez-nous
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                sitemap
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Magasins
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Votre Compte */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Votre Compte
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              fontSize: "14px",
              color: "#666",
            }}
          >
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Informations personnelles
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Commandes
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Avoirs
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Adresses
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Bons de réduction
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Mes listes de souhaits
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#666", textDecoration: "none" }}>
                Mes alertes
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Informations */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Informations
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "10px",
            }}
          >
            <FaMapMarkerAlt style={{ marginRight: "5px" }} />
            2B TRADING
            <br />
            IMM ELMOEZ B4 SAHLOUL
            <br />
            4054 SOUSSE
            <br />
            Tunis
            <br />
            Tunisie
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "10px",
            }}
          >
            <strong>📧 info@2btrading.tn</strong>
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "10px",
            }}
          >
            📞 73367243 - 58384693 - 58384691 - 58384692 - 57030970 - 57030971 -
            5125142
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
            }}
          >
            🏢 73367243
          </p>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <FaShoppingCart />
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Ajouter au panier
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <FaUser />
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Mon compte
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <FaHeart />
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Liste de souhaits
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <FaBalanceScale />
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Comparer
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <FaArrowUp />
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Faites défiler vers le haut
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

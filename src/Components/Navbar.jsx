import React from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navMain}>
        <div style={{ width: "70%" }} className={styles.left}>
          <div>
            <Link to="/">
              <img
                style={{
                  width: "60px",
                  height: "50px",
                  // alignContent: "center",
                }}
                src="data:image/png;base64,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"
              />
            </Link>
          </div>
          <div>
            <p style={{ fontSize: "30px", fontWeight: "800" }}>Acmefresh</p>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "white" }}
            >
              Products
            </Link>
          </div>
          <div>
            <Link
              to="/joinus"
              style={{ textDecoration: "none", color: "white" }}
            >
              Join us
            </Link>
          </div>

          <div>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About us
            </Link>
          </div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

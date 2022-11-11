import React from "react";
import Navbar from "../Components/Navbar";
import hydrophonic from "../Video/hydrophonic.mp4";
import styles from "../CSS/Homepage.module.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "auto",

          margin: "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "85vh",

            margin: "auto",
          }}
        >
          <video
            style={{
              width: "100%",
              height: "100%",

              objectFit: "cover",
              zIndex: "-1",
            }}
            autoPlay
            loop
            muted
          >
            <source src={hydrophonic} type="video/mp4" />
          </video>
        </div>
        <h1 className={styles.heading} style={{ marginTop: "-50px" }}>
          Hydrophonic farms
        </h1>

        <div>
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-evenly",
              margin: "auto",
              marginRight: "10%",
              gap: "200px",
            }}
          >
            <div
              style={{
                width: "30%",
                //   border: "1px solid yellow",
                fontFamily: "sans-serif",
                marginTop: "100px",
              }}
            >
              <p
                style={{
                  fontSize: "50px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                WHY HYDROPHONIC FARMING ?
              </p>
            </div>
            <div style={{ width: "50%", marginTop: "100px" }}>
              <p
                className={styles.subHead}
                style={{ color: "black", textAlign: "justify" }}
              >
                Plants grown in soil need a more space to spread out as the
                roots reach out as far as possible into the soil to capture as
                much water and nutrients as possible. Soil holds water and
                nutrients for only few minutes before it is filtered down the
                water table, or gets soaked up by other plants nearby. That
                makes it nearly impossible to control exactly how much water
                each of your plants receive, or which nutrients they benefit
                from in the process.
              </p>
            </div>
          </div>
          {/* our services */}
          <div style={{ marginTop: "110px" }}>
            <p className={styles.heading}>OUR SERVICES</p>
            <p
              className={styles.subText}
              style={{
                color: "black",
                fontSize: "20px",
                textAlign: "center",
                width: "60%",
                margin: "auto",
                textAlign: "center",
              }}
            >
              Hydrophonic farming : Rise Hydroponics serves the widest range of
              solutions for Hydroponics farm setups. With a brilliant and
              exceptional team of Agronomists, Engineers and Agritech experts,
              We always deliver outstanding results for Corporates, Individuals,
              HoReCa, Government Institutions and more.
            </p>
            <div
              className={styles.servMain}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Link
                to="/joinus"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className={styles.serIn}>
                  <img src="https://risehydroponics.in/wp-content/uploads/2021/04/Outdoor-Hydroponics-Farm-Setup-1.png" />
                  <p className={styles.subHead}>
                    Outdoor Hydroponics Farm Setup
                  </p>
                  <p className={styles.subText}>
                    A 360 degree solution for setting up commercially profitable
                    outdoor hydroponics farms that deliver maximum crop yield.
                  </p>
                </div>
              </Link>
              <div className={styles.serIn}>
                <img src="https://risehydroponics.in/wp-content/uploads/2021/04/Indoor-Hydroponics-Farm-Setup.png" />
                <p className={styles.subHead}>
                  Subsidy Based Soilless Agriculture Farm
                </p>
                <p className={styles.subText}>
                  Avail handsome subsidies by Central & State Governments By
                  installing special soil-less farming systems in your space.
                </p>
              </div>
              <div className={styles.serIn}>
                <img src="https://risehydroponics.in/wp-content/uploads/2021/04/Hydroponics-System-Installations.png" />
                <p className={styles.subHead}>Project Development</p>
                <p className={styles.subText}>
                  Choose from widest range of Hydroponics Systems and Rise
                  Hydroponics will implement turnkey solutions for all projects.
                </p>
              </div>
              <div className={styles.serIn}>
                <img src="	https://risehydroponics.in/wp-content/uploads/2021/04/Indoor-Hydroponics-Farm-Setup.png" />
                <p className={styles.subHead}>Indoor Hydroponics Farm Setup</p>
                <p className={styles.subText}>
                  Indoor Farms by Rise Hydroponics, raises crops In an all-round
                  controlled environment monitored by latest technologies.
                </p>
              </div>
              <div className={styles.serIn}>
                <img src="https://risehydroponics.in/wp-content/uploads/2021/04/Polyhouse-Structure-Development.png" />
                <p className={styles.subHead}>
                  Polyhouse Structure Development
                </p>
                <p className={styles.subText}>
                  We build and Install Hydroponics based Poly house- Farming
                  Setups for growing various seasonal and non-seasonal crops.
                </p>
              </div>
              <div className={styles.serIn}>
                <img src="https://risehydroponics.in/wp-content/uploads/2021/04/Live-Hydroponics-Training-Workshops.png" />
                <p className={styles.subHead}>
                  Live Hydroponic Farming Training & Workshops
                </p>
                <p className={styles.subText}>
                  Learn Hydroponic Farming on multiple operational farms and
                  gain rich insights on crops, setups and scope.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.gridMain}>
            <div>
              <p className={styles.heading}>RECENT PROJECTS</p>
              <p className={styles.subHead} style={{ textAlign: "justify" }}>
                we have a lot of projects going on and more and more people are
                becoming a part of our community, these are some of the recents
                projects which we have finalised in last 2 months
              </p>
            </div>
            <div className={styles.gridIn}>
              <img
                className={styles.imageGrid}
                src="https://nowafarms.in/assets/img/gallery/01.jpg"
                //   style={{ width: "400px", height: "400px" }}
              />
              <p>Bengalure,Kanataka</p>
            </div>
            <div className={styles.gridIn}>
              <img
                className={styles.imageGrid}
                src="https://nowafarms.in/assets/img/gallery/aa3.jpg"
                //   style={{ width: "400px", height: "400px" }}
              />
              <p>Pune,Maharshtra</p>
            </div>
            <div className={styles.gridIn}>
              <img
                className={styles.imageGrid}
                src="	https://nowafarms.in/assets/img/about/nowafarm.jpg"
                //   style={{ width: "400px", height: "400px" }}
              />
              <p>Indore,Madhyapradesh</p>
            </div>
            <div className={styles.gridIn}>
              <img
                className={styles.imageGrid}
                src="https://nowafarms.in/assets/img/gallery/aa1.jpg"
                //   style={{ width: "400px", height: "400px" }}
              />
              <p>Hyderbad,Telagana</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}></div>
    </div>
  );
};

export default Homepage;

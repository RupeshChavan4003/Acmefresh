import React from "react";
import styles from "../CSS/Joinus.module.css";

const Joinus = () => {
  return (
    <div>
      <div className={styles.whyHydMain}>
        <div className={styles.whyHydIn}>
          <p className={styles.heading}>WHY HYDROPHONIC FARMING ?</p>
        </div>
        <div className={styles.whyHydIn}>
          <p className={styles.subHead} style={{ textAlign: "justify" }}>
            Hydroponic farms offer a pathway towards a more sustainable food
            ethic that prioritizes the health of our food, bodies and
            environment without the heavy use of chemicals. Far from being a
            pipe-dream, hydroponic farming is already being rapidly integrated
            into current food networks. Ocado, a leading British online
            supermarket, recently announced its partnership with Priva and
            80-Acres, both leading participants in the vertical farm industry.
            This joint venture will allow Ocado to supply fresh, local and
            hydroponically-grown ingredients to its customers. Furthermore, as
            the industry becomes more competitive, more partnerships like this
            will help drive down the prices of hydroponically-grown produce and
            make hydroponic farms more competitive with conventional farms.
            While our global climate issue is multi-dimensional and a result of
            many different practices, reducing the impact from the agricultural
            industry will be a huge step forward. At the beginning of the 21st
            century, hydroponic farming had not yet been invented. Now, only 20
            years later, the industry has gained solid ground and is already
            dramatically shifting our agricultural practices and the future of
            our food system.
          </p>
        </div>
      </div>
      <div className={styles.chooseMain}>
        <div className={styles.chooseIn}>
          <p className={styles.heading}>WHY TO CHOOSE US ?</p>
        </div>
        <div className={styles.chooseIn}>
          <p className={styles.subHead} style={{ textAlign: "justify" }}>
            Acmefresh Hydroponics is the Largest CEA (Controlled Environment
            Agriculture) and EPC (Engineering, Procurement & Construction)
            Project Developers in Hydroponic Farming and Soil less Farming. Its’
            out-of-the-box technology solutions and unique methods are
            Successfully operating all across India. Acmefresh Hydroponics feels
            it has an important responsibility, to combat the issues of water
            shortage and unhealthy food. Well, it makes us proud to say that we
            are committed to spread the benefits of Hydroponic Farming far and
            wide across our whole nation. Every day we dedicate our growth to
            the positive change brought by our work We believe that with Hard
            Work, Sheer dedication and strict commitment To serving healthy food
            quality, we will always strive to be
          </p>
        </div>
      </div>

      <div>
        <p className={styles.heading}>
          Fill the form an we will visit your location
        </p>

        <div>
          <div className={styles.containeruser}>
            <form id="form">
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="enter your name"
                  name="name"
                  required
                />
              </div>
              <div>
                <label>Age:</label>
                <input
                  type="number"
                  placeholder="enter your age"
                  name="age"
                  required
                />
              </div>
              <div>
                <label>City:</label>
                <input
                  type="text"
                  placeholder="enter your City"
                  name="place"
                  required
                />
              </div>
              <div>
                <label>Address:</label>
                <input
                  type="text"
                  placeholder="enter your Address"
                  name="place"
                  required
                />
              </div>
              <div>
                <label>PIN code:</label>
                <input
                  type="text"
                  placeholder="enter your PIN code"
                  name="pin"
                  required
                />
              </div>

              <div>
                <label>Mobile Number</label>
                <input
                  type="number"
                  placeholder="enter your mobile number"
                  name="mobile"
                  required
                />
              </div>
              <div className={styles.submitbtn}>
                <button
                  type="submit"
                  onClick={() =>
                    alert("your visit will be scheduled within 2 days")
                  }
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;

import React from "react";
import styles from "../CSS/SingleProduct.module.css";

const SingleProduct = (el) => {
  return (
    <div className={styles.singleMain}>
      <img className={styles.singleImg} src={el.image} />
      <p>{el.name}</p>
      <p>{el.price}</p>
      <button className={styles.addCart} role="button">
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;

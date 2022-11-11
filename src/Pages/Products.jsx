import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../Components/SingleProduct";
import { getData } from "../Redux/action";
import styles from "../CSS/Products.module.css";

const Products = () => {
  let data = useSelector((state) => state.data);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log(data);
  return (
    <div>
      <p className={styles.heading}>OUR PRODUCTS</p>
      <div className={styles.gridMain}>
        {data.map((el) => {
          return (
            <div key={el.id}>
              <SingleProduct {...el} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

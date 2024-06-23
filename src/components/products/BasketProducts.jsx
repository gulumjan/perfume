import React, { useState } from "react";
import { useCard } from "../../context/CardContext";
import scss from "./Products.module.scss";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const BasketProducts = () => {
  const { getCartProducts, changeProduct, deleteProductInCard } = useCard();
  const basketProducts = getCartProducts();
  // const [plus, setPlus] = useState(1);

  // function handlePlus() {
  //   setPlus(plus + 1);
  // }
  // function handleMinus() {
  //   if (plus > 1) {
  //     setPlus(plus - 1);
  //   }
  // }

  const handleQuantityChange = (id, quantityChange) => {
    changeProduct(id, quantityChange);
  };

  return (
    <div className={scss.basket}>
      <div className={scss.block}>
        <div className={scss.blockText}>
          <h2>PRODUCT</h2>
          <h2>QUANTIFY</h2>
          <h2>PRICE</h2>
        </div>
        <div className={scss.cards}>
          {basketProducts.map((item, index) => (
            <div className={scss.inform} key={index}>
              <div>
                <img src={item.item.image} alt={item.item.name} />
                <h4>{item.item.name}</h4>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div className={scss.quantify}>
                  <button
                    className={scss.symbol}
                    onClick={() => handleQuantityChange(item.item.id, -1)}
                    // onClick={() => handleMinus()}
                  >
                    -
                  </button>
                  <button className={scss.number}>{item.count}</button>{" "}
                  <button
                    className={scss.symbol}
                    onClick={() => handleQuantityChange(item.item.id, +1)}
                    // onClick={() => handlePlus()}
                  >
                    +
                  </button>
                </div>
                <button onClick={() => deleteProductInCard(item.item.id)}>
                  <RemoveShoppingCartIcon
                    sx={{ width: "96px", height: "35px" }}
                  />
                </button>
              </div>

              <h1 className={scss.price}>{item.subPrice} сом.</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasketProducts;

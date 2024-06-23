import React, { createContext, useContext, useEffect, useReducer } from "react";

const cardContext = createContext();
export const useCard = () => useContext(cardContext);

const initState = {
  card: JSON.parse(localStorage.getItem("card")) || { products: [] },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, card: action.payload };
    case "UPDATE":
      return { ...state, card: action.payload };
    default:
      return state;
  }
};

const CardContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  function addProductToCard(product) {
    let card = JSON.parse(localStorage.getItem("card"));
    if (!card) {
      card = {
        products: [],
        totalCount: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    card.products.push(newProduct);
    localStorage.setItem("card", JSON.stringify(card));
    dispatch({
      type: "UPDATE",
      payload: card,
    });
    checkProductInCard(product.id);
  }

  function getProductFromCard() {
    let card = JSON.parse(localStorage.getItem("card"));
    if (!card) {
      card = {
        products: [],
        totalCount: 0,
      };
    }

    dispatch({
      type: "GET",
      payload: card,
    });
  }

  useEffect(() => {
    getProductFromCard();
  }, []);

  function checkProductInCard(id) {
    if (state.card && state.card.products) {
      let obj = state.card.products.some((product) => product.item.id === id);
      return obj ? true : false;
    }
    return false;
  }

  function getCartProducts() {
    return state.card && state.card.products ? state.card.products : [];
  }

  function changeProduct(id, quantityChange) {
    let card = JSON.parse(localStorage.getItem("card"));
    if (card) {
      const productIndex = card.products.findIndex(
        (product) => product.item.id === id
      );
      if (productIndex !== -1) {
        const newQuantity = card.products[productIndex].count + quantityChange;

        if (newQuantity > 0) {
          card.products[productIndex].count = newQuantity;
          card.products[productIndex].subPrice =
            newQuantity * card.products[productIndex].item.price;
          localStorage.setItem("card", JSON.stringify(card));
          dispatch({
            type: "UPDATE",
            payload: card,
          });
        }
      }
    }
  }

  function deleteProductInCard(id) {
    let card = JSON.parse(localStorage.getItem("card"));
    card.products = card.products.filter((el) => el.item.id !== id);
    localStorage.setItem("card", JSON.stringify(card));
    getProductFromCard();
  }

  const values = {
    addProductToCard,
    getProductFromCard,
    checkProductInCard,
    getCartProducts,
    deleteProductInCard,
    changeProduct,
  };
  return <cardContext.Provider value={values}>{children}</cardContext.Provider>;
};

export default CardContext;

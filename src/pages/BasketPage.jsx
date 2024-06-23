import React, { useEffect } from "react";
import BasketProducts from "../components/products/BasketProducts";
import { useCard } from "../context/CardContext";
import { useParams } from "react-router-dom";

const BasketPage = () => {
  const { checkProductInCard } = useCard();
  const { id } = useParams();
  useEffect(() => {
    checkProductInCard(id);
  }, []);
  return <BasketProducts />;
};

export default BasketPage;

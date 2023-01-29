import React from "react";
import styles from "./MainPage.module.scss";
import CardItem from "../CardItem/CardItem";
import { useState } from "react";
import { useEffect } from "react";

const MainPage = () => {
  const initialState = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
    { id: 31 },
    { id: 32 },
    { id: 33 },
    { id: 34 },
    { id: 35 },
    { id: 36 },
    { id: 37 },
    { id: 38 },
    { id: 39 },
    { id: 40 },
  ];
  const [items, setItems] = useState(initialState);
  const [offset, setOffset] = useState(3);
  const [visibleItems, setVisibleItems] = useState(
    initialState.slice(0, offset)
  );
  const [newItemsLoading, setNewItemsLoading] = useState(false);

  useEffect(() => {
    renderItemsList(visibleItems);
    setOffset((offset) => offset + 3);
    setVisibleItems(initialState.slice(0, offset));
    setNewItemsLoading(false);
  }, [newItemsLoading]);
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setNewItemsLoading(true);
    }
  };

  const renderItemsList = (arr) => {
    let counter = 0;
    if (arr.length === 0) {
      return <h5 className={styles.arrIsEmpty}>Блоков пока нет</h5>;
    }

    return arr.map(() => {
      return <CardItem />;
    });
  };
  const elements = renderItemsList(visibleItems);
  return <div className={styles.root}>{elements}</div>;
};

export default MainPage;

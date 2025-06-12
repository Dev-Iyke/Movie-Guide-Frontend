import React, { useEffect } from "react";
import { toast } from 'react-toastify';
import { WatchListContext } from "./features";
// export const WatchListContext = createContext();

const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = React.useState(() => {
    const storedWatchList = localStorage.getItem("watchList");
    return storedWatchList ? JSON.parse(storedWatchList) : [];
  });
  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  const addToWatchList = (product) => {
    if (watchList.some((item) => item.id === product.id)) {
      toast.error("Product already in watchList!");
      return;
    }
    setWatchList([...watchList, product]);
    toast.success("Item added to watchList!");
    return true;
  };

  const removeFromWatchList = (productId) => {
    const updatedWatchList = watchList.filter((product) => product.id !== productId);
    setWatchList(updatedWatchList);
    toast.success("Product removed from watchList!");
  };

  const increaseQty = (product) => {
    setWatchList((prevWatchList) =>
      prevWatchList.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };
  
  const decreaseQty = (product) => {
    setWatchList((prevWatchList) =>
      prevWatchList.map((item) =>
        item.id === product.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const clearWatchList = () => {
    setWatchList([]);
  };
  return (
    <WatchListContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList, clearWatchList, increaseQty, decreaseQty }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListProvider;

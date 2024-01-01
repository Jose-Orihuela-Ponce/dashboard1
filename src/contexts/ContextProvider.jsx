import React from "react";
import { ordersData, customersData } from "../data/dummy";
export const StateContext = React.createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export default function ContextProvider({ children }) {
  const [totalRefund, setTotalRefunds] = React.useState(0);
  const [totalSalesCompleted, setTotalSalesCompleted] = React.useState(0);
  const [totalCoustomers, setTotalCoustomers] = React.useState(0);
  const [totalProducts, setTotalProducts] = React.useState(0);
  const [totalEarnings, setTotalEarnings] = React.useState(0);
  const [activeMenu, setActiveMenu] = React.useState(true);
  const [isClicked, setIsClicked] = React.useState(initialState);
  const [screenSize, setScreenSize] = React.useState(undefined);
  const [currentMode, setCurrentMode] = React.useState("Dark");
  const [currentColor, setCurrentColor] = React.useState("#03C9D7");
  const [themeSetting, setThemeSetting] = React.useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
    setThemeSetting(false);
  };
  const setColor = (value) => {
    setCurrentColor(value);

    localStorage.setItem("colorMode", value);
    setThemeSetting(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const updateTotal = () => {
    const total = ordersData.reduce((acc, curr) => {
      return curr.TotalAmount + acc;
    }, 0);
    const totalProductsSales = ordersData.reduce((acc, curr) => {
      return curr.Quantity + acc;
    }, 0);
    const totalCoustomers = customersData.length;

    const totalSalesComplete = ordersData.reduce((acc, curr) => {
      if (curr.Status == "complete") {
        return acc + curr.TotalAmount;
      } else {
        return acc;
      }
    }, 0);
    const totalRefunds = ordersData.reduce((acc, curr) => {
      if (curr.Status == "canceled") {
        return acc + curr.TotalAmount;
      } else {
        return acc;
      }
    }, 0);

    setTotalRefunds(totalRefunds.toFixed(2));
    setTotalSalesCompleted(totalSalesComplete.toFixed(2));
    setTotalCoustomers(totalCoustomers);
    setTotalProducts(totalProductsSales);
    setTotalEarnings(total.toFixed(2));
  };
  const getPhotoUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    return await data.results[0].picture.medium;
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentMode,
        setCurrentMode,
        currentColor,
        setCurrentColor,
        themeSetting,
        setThemeSetting,
        setMode,
        setColor,
        totalEarnings,
        updateTotal,
        totalProducts,
        totalCoustomers,
        totalSalesCompleted,
        totalRefund,
        getPhotoUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

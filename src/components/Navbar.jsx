import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "./";
import { StateContext } from "../contexts/ContextProvider";

const Navbutton = ({ title, customFunc, icon, color, dotColor }) => (
  <div>
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      ></span>
      {icon}
    </button>
  </div>
);

export default function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    // setIsClicked,
    screenSize,
    setScreenSize,
    currentColor,
  } = React.useContext(StateContext);

  React.useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleSize);

    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  React.useEffect(() => {
    screenSize <= 1200 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <Navbutton
        title="Menu"
        customFunc={() => setActiveMenu(!activeMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <Navbutton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <Navbutton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <Navbutton
          title="Notification"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <div>
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hober:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src="https://www.connuestroperu.com/images/stories/personajes/politica/PeruLIbre/Pedro-Castillo.jpg"
              alt="avatar"
              className="rounded-full w-8 h-8"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </div>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userPorfile && <UserProfile />}
      </div>
    </div>
  );
}

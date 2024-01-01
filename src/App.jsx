import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import "./App.css";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Kanban,
  Line,
  Pie,
  ColorMapping,
  Editor,
} from "./pages";

import { StateContext } from "./contexts/ContextProvider";

export default function App() {
  const {
    activeMenu,
    themeSetting,
    setThemeSetting,
    currentColor,
    currentMode,
  } = React.useContext(StateContext);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <div>
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:hover:bg-light-gray
             text-white
            "
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSetting(true)}
              >
                <FiSettings />
              </button>
            </div>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-1"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSetting && <ThemeSettings />}
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/Instituto" element={<Ecommerce />} />

                <Route path="/Boletas" element={<Orders />} />
                <Route path="/Alumnos" element={<Employees />} />
                <Route path="/Carreras" element={<Customers />} />

                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendario" element={<Calendar />} />

                <Route path="/linea" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

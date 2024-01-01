import React from "react";
import { Header } from "../components";
import { customersData, customersGrid } from "../data/dummy";
import { AiFillDelete } from "react-icons/ai";

import { StateContext } from "../contexts/ContextProvider";

export default function Customers() {
  const newCustomerData = [];
  const { currentColor, getPhotoUser } = React.useContext(StateContext);
  const stateImput = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
  };
  function seteandoInputs(e, inputValue) {
    setInitialState({ ...initialState, [inputValue]: e.target.value });
  }

  const [coustomerDataRender, setCoustomerDataRender] =
    React.useState(customersData);

  const deleteElement = (index) => {
    const updatedData = [...coustomerDataRender];
    updatedData.splice(index, 1);
    setCoustomerDataRender(updatedData);
  };

  const [initialState, setInitialState] = React.useState(stateImput);
  const [confirm, setConfirm] = React.useState(false);

  React.useEffect(() => {}, [initialState, confirm, coustomerDataRender]);
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <div className="flex">
        {customersGrid.map((item, index) => {
          if (index === 0) {
            return (
              <div
                key={index}
                className="w-24 h-10 text-center pt-2 border-4 border-color"
              >
                Eliminar
              </div>
            );
          }
          return (
            <div
              className={`${
                item.headerText === "Name" || item.headerText === "Project Name"
                  ? "w-52"
                  : "w-32"
              } h-10 text-center pt-2 pr-2 pl-2 border-4 border-color`}
              key={index}
            >
              {item.headerText}
            </div>
          );
        })}
      </div>
      <div className="relative">
        <div className="ml-28 flex w-800 gap-4">
          <input
            value={initialState.input1}
            onChange={(e) => seteandoInputs(e, "input1")}
            type="text"
            placeholder="nombre"
            className="w-48 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input2}
            onChange={(e) => seteandoInputs(e, "input2")}
            type="text"
            placeholder="proyecto"
            className="w-48 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input3}
            onChange={(e) => seteandoInputs(e, "input3")}
            type="text"
            placeholder="estado"
            className="w-28 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input4}
            onChange={(e) => seteandoInputs(e, "input4")}
            type="number"
            placeholder="semanas"
            className="w-28 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input5}
            onChange={(e) => seteandoInputs(e, "input5")}
            type="number"
            placeholder="presupuesto"
            className="w-28 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input6}
            onChange={(e) => seteandoInputs(e, "input6")}
            type="text"
            placeholder="ubicación"
            className="w-28 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input7}
            onChange={(e) => seteandoInputs(e, "input7")}
            type="number"
            placeholder="id"
            className="w-28 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
        </div>
        <button
          type="button"
          style={{ backgroundColor: currentColor, borderRadius: "10px" }}
          className="text-sm w-24  m-4 ml-28 p-2 hover:drop-shadow-xl text-white font-semibold relative"
          onClick={() => {
            (async () => {
              try {
                const urlPhoto = await getPhotoUser();
                newCustomerData.push({
                  CustomerName: initialState.input1,
                  ProjectName: initialState.input2,
                  Status: initialState.input3,
                  Weeks: initialState.input4,
                  Budget: initialState.input5,
                  Location: initialState.input6,
                  CustomerID: initialState.input7,
                  CustomerImage: urlPhoto,
                });
                setConfirm(true);
                setInitialState(stateImput);
                setCoustomerDataRender((prev) => prev.concat(newCustomerData));
                setTimeout(() => {
                  setConfirm(false);
                }, 2000);
              } catch (error) {
                console.log(error);
              }
            })();
          }}
        >
          Agregar
          {confirm && (
            <div className="bg-white w-44 text-gray-950 absolute bottom-2 left-32">
              Se agrego correctamente
            </div>
          )}
        </button>
      </div>
      <div className="mt-10">
        {coustomerDataRender.map((item, index) => (
          <div className="flex" key={index}>
            <div className="flex justify-center w-16  h-20 text-center pr-4 pl-4">
              <input
                id={index}
                type="checkbox"
                className="w-4 hidden"
                onChange={(e) => {
                  deleteElement(e.target.id);
                }}
              />
              <label htmlFor={index}>
                <AiFillDelete className="w-6 h-8 text-red-600 cursor-pointer" />
              </label>
            </div>
            <div className="flex w-52 h-14 pl-4 items-center">
              <img
                className="w-16 h-16 object-cover rounded-xl"
                src={item.CustomerImage}
                alt={item.CustomerName}
              />
              <p className="w-16  h-20 text-center p-4">{item.CustomerName}</p>
            </div>
            <p className="w-52 h-20 text-center p-4">{item.ProjectName}</p>
            <p className="w-32 h-20 text-center p-4">{item.Status}</p>
            <p className="w-32 h-20 text-center p-4">{item.Weeks}</p>
            <p className="w-32 h-20 text-center p-4">${item.Budget}k</p>
            <p className="w-32 h-20 text-center p-4">{item.Location}</p>
            <p className="w-32 h-20 text-center p-4">{item.CustomerID}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

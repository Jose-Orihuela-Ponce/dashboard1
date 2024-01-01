import React from "react";
import { Header } from "../components";
import { employeesData, employeesGrid } from "../data/dummy";
import { AiFillDelete } from "react-icons/ai";

import { StateContext } from "../contexts/ContextProvider";

export default function Employees() {
  const newEmployeesData = [];
  const { currentColor, getPhotoUser } = React.useContext(StateContext);
  const stateImput = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  };
  function seteandoInputs(e, inputValue) {
    setInitialState({ ...initialState, [inputValue]: e.target.value });
  }

  const [employeesDataRender, setEmployeesDataRender] =
    React.useState(employeesData);

  const deleteElement = (index) => {
    const updatedData = [...employeesDataRender];
    updatedData.splice(index, 1);
    setEmployeesDataRender(updatedData);
  };

  const [initialState, setInitialState] = React.useState(stateImput);
  const [confirm, setConfirm] = React.useState(false);
  React.useEffect(() => {}, [initialState, confirm]);

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <div className="flex ml-20">
        {employeesGrid.map((item, index) => (
          <div
            className={`${
              item.headerText === "Country" ? "w-32" : "w-48"
            } h-10 text-center pt-2 pr-2 pl-2 border-4 border-color`}
            key={index}
          >
            {item.headerText}
          </div>
        ))}
      </div>
      <div>
        <div className="ml-20 flex gap-4">
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
            placeholder="titulo"
            className="w-42  h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input3}
            onChange={(e) => seteandoInputs(e, "input3")}
            type="text"
            placeholder="pais"
            className="w-28 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input4}
            onChange={(e) => seteandoInputs(e, "input4")}
            type="date"
            placeholder="fecha contratación"
            className="w-42 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input5}
            onChange={(e) => seteandoInputs(e, "input5")}
            type="text"
            placeholder="subordinado"
            className="w-40 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input6}
            onChange={(e) => seteandoInputs(e, "input6")}
            type="number"
            placeholder="id"
            className="w-36 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
        </div>
        <button
          type="button"
          style={{ backgroundColor: currentColor, borderRadius: "10px" }}
          className="text-sm w-24  m-4 ml-20 p-2 hover:drop-shadow-xl text-white font-semibold relative"
          onClick={() => {
            (async () => {
              try {
                const urlPhoto = await getPhotoUser();
                newEmployeesData.push({
                  EmployeeID: initialState.input6,
                  Name: initialState.input1,
                  Title: initialState.input2,
                  Country: initialState.input3,
                  HireDate: initialState.input4,
                  ReportsTo: initialState.input5,
                  EmployeeImage: urlPhoto,
                });
                setConfirm(true);
                setInitialState(stateImput);
                setEmployeesDataRender((prev) => prev.concat(newEmployeesData));
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
        {employeesDataRender.map((item, index) => (
          <div className="flex" key={index}>
            <div className="flex justify-center w-16  h-20 text-center p-4">
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
            <div className="flex w-48 h-14 p-1 justify-center">
              <img
                className="w-16 h-16 object-cover rounded-xl"
                src={item.EmployeeImage}
                alt={item.Name}
              />
              <p className="w-16  h-20 text-center p-4">{item.Name}</p>
            </div>
            <p className="w-48 h-20 text-center p-4">{item.Title}</p>
            <p className="w-32 h-20 text-center p-4">{item.Country}</p>
            <p className="w-48 h-20 text-center p-4">{item.HireDate}</p>
            <p className="w-48 h-20 text-center p-4">{item.ReportsTo}</p>
            <p className="w-48 h-20 text-center p-4">{item.EmployeeID}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { ordersData, ordersGrid } from "../data/dummy";
import { Header } from "../components";

import { StateContext } from "../contexts/ContextProvider";

export default function Orders() {
  const { currentColor } = React.useContext(StateContext);
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
  const [initialState, setInitialState] = React.useState(stateImput);
  const [confirm, setConfirm] = React.useState(false);
  React.useEffect(() => {}, [initialState, confirm]);

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <div className="flex">
        {ordersGrid.map((item, index) => (
          <div className="w-48 h-12 flex flex-col items-center" key={index}>
            <div className="w-40 h-12 border-4 border-color text-center pt-1">
              {item.headerText}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="m-2 ml-4 flex justify-around gap-4">
          <input
            value={initialState.input1}
            onChange={(e) => seteandoInputs(e, "input1")}
            type="text"
            placeholder="order"
            className="w-36 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input2}
            onChange={(e) => seteandoInputs(e, "input2")}
            type="text"
            placeholder="order"
            className="w-36 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input3}
            onChange={(e) => seteandoInputs(e, "input3")}
            type="text"
            placeholder="order"
            className="w-36 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input4}
            onChange={(e) => seteandoInputs(e, "input4")}
            type="text"
            placeholder="order"
            className="w-36 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input5}
            onChange={(e) => seteandoInputs(e, "input5")}
            type="text"
            placeholder="order"
            className="w-36 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input6}
            onChange={(e) => seteandoInputs(e, "input6")}
            type="text"
            placeholder="order"
            className="w-36 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
          <input
            value={initialState.input7}
            onChange={(e) => seteandoInputs(e, "input7")}
            type="text"
            placeholder="order"
            className="w-36 h-8 text-center mt-6 border border-neutral-950 rounded-md"
          />
        </div>
        <button
          type="button"
          style={{ backgroundColor: currentColor, borderRadius: "10px" }}
          className="text-sm w-24  m-4 p-2 hover:drop-shadow-xl text-white font-semibold relative"
          onClick={() => {
            ordersData.push({
              OrderID: initialState.input6,
              CustomerName: initialState.input3,
              TotalAmount: initialState.input4,
              OrderItems: initialState.input2,
              Quantity: initialState.input7,
              Status: initialState.input5,
              StatusBg: "#03C9D7",
              ProductImage: initialState.input1,
            });
            setConfirm(true);
            setInitialState(stateImput);
            setTimeout(() => {
              setConfirm(false);
            }, 2000);
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
        {ordersData.map((item, index) => (
          <div className="flex" key={index}>
            <div className="flex w-48 h-14 pr-4 pl-4 justify-center">
              <img
                className="w-20 h-16 object-cover rounded-xl"
                src={item.ProductImage}
                alt={item.OrderItems}
              />
            </div>
            <p className="w-48 h-20 text-center pr-4 pl-4">{item.OrderItems}</p>
            <p className="w-48 h-20 text-center pr-4 pl-4">
              {item.CustomerName}
            </p>
            <p className="w-48 h-20 text-center pr-4 pl-4">
              ${item.TotalAmount}
            </p>
            <p className="w-48 h-20 text-center pr-4 pl-4">{item.Status}</p>
            <p className="w-48 h-20 text-center pr-4 pl-4">{item.OrderID}</p>
            <p className="w-48 h-20 text-center pr-4 pl-4">{item.Quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { GoDotFill } from "react-icons/go";

import { Button } from "../components";
import { earningData } from "../data/dummy";

import { StateContext } from "../contexts/ContextProvider";

export default function Ecommerce() {
  const {
    currentColor,
    totalEarnings,
    updateTotal,
    totalProducts,
    totalCoustomers,
    totalSalesCompleted,
    totalRefund,
  } = React.useContext(StateContext);
  updateTotal();
  return (
    <div className="mt-3 mr-10 ml-10">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">${totalEarnings}</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item, index) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-[0.9] rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">
                  {index == 1
                    ? totalProducts
                    : index == 0
                    ? totalCoustomers
                    : index == 2
                    ? totalSalesCompleted
                    : totalRefund}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-exl md:w-400">
          <div className="flex justify-between">
            <p>Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  {" "}
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div className="mt-5">
                <div className="mt-4">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

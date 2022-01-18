import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../util";

export default function MiniCalender() {
  const [currentMonthInX, setCurrentMonthInX] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex, setMiniCalenderMonth, setDaySelected, daySelected } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthInX));
  }, [currentMonthInX]);

  useEffect(() => {
    setCurrentMonthInX(monthIndex);
  }, [monthIndex]);

  const handlePreviousMonth = () => {
    setCurrentMonthInX(currentMonthInX - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonthInX(currentMonthInX + 1);
  };

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);

    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthInX)).format("MMMM YYYY")}
        </p>
        <div>
          <button onClick={handlePreviousMonth}>
            <span className="material-icons-outlined cursor cursor-pointer text-gray-600 mx-2">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor cursor-pointer text-gray-600 mx-2">
              chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span className="text-sm py-1 text-center" key={i}>
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <>
            {row.map((day, index) => (
              <button
                className={`py-1 w-full ${getDayClass(day)}`}
                key={index}
                onClick={() => {
                  setMiniCalenderMonth(currentMonthInX);
                  setDaySelected(day);
                }}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

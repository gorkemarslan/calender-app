import React, { useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [miniCalenderMonth, setMiniCalenderMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(null);

  useEffect(() => {
    if (miniCalenderMonth !== null) {
      setMonthIndex(miniCalenderMonth);
    }
  }, [miniCalenderMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        miniCalenderMonth,
        setMiniCalenderMonth,
        daySelected,
        setDaySelected,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

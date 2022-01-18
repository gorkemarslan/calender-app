import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  miniCalenderMonth: 0,
  setMiniCalenderMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
});

export default GlobalContext;

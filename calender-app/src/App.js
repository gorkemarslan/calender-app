import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import { getMonth } from "./util";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

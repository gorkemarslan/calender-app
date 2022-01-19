import React, { useContext } from "react";
import plusImage from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      className="border py-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
      onClick={() => setShowEventModal(true)}
    >
      <img src={plusImage} alt="create_event" className="h-7 w-7" />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
}

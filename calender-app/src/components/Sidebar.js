import React from "react";
import CreateEventButton from "./CreateEventButton";
import MiniCalender from "./MiniCalender";
import Labels from "./Labels";

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <MiniCalender />
      <Labels />
    </aside>
  );
}

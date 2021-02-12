import React from "react";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar__header"></div>

      <div className="sidebar__search"></div>

      <div className="sidebar__chatRooms"></div>
    </section>
  );
}

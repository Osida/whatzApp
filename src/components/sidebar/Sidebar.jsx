import React from "react";
import { SidebarChat } from "../index";
import "./Sidebar.scss";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar__header">
        <Avatar />

        <div className="sidebar__header--right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__search--container">
          <SearchIcon />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chatRooms">
        <SidebarChat addNewChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </section>
  );
}

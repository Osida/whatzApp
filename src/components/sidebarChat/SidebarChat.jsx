import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.scss";

export default function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  // Gets a random string for the avatar seed whenever the sidebarChat loads
  useEffect(() => {
    //   Generates random number between 0 - 5000 (inclusive)
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createNewChatRoom = () => {
    const roomName = prompt("Please enter a name for the new chat room.");

    if (roomName) {
      // do database (firestore) things
    }
  };

  const newChatRoom = () => {
    return (
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/4.5/api/bottts/${seed}.svg`}
        />

        <div className="sidebarChat__info">
          <h2>Room name</h2>
          <p>Recent message ...</p>
        </div>
      </div>
    );
  };

  const existingChatRoom = () => {
    return (
      <div className="sidebarChat" onClick={createNewChatRoom}>
        <h2>Add new chat</h2>
      </div>
    );
  };

  return !addNewChat ? newChatRoom() : existingChatRoom();
}

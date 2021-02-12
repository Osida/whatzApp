import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import "./Chat.scss";

export default function Chat() {
  const [seed, setSeed] = useState("");
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  // Stores the messages on firebase
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >> ", messageInput);

    // Clears input upon submission (enter)
    setMessageInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/4.5/api/bottts/${seed}.svg`}
        />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__msg ${true && "chat__msg--receiver"}`}>
          <span className="chat__msg--name">osida richards</span>
          <span className="chat__msg--wrap">
            Thank you for everything
            <span className="chat__msg--timeStamp">8:43 PM</span>
          </span>
        </p>

        <p className={`chat__msg ${false && "chat__msg--receiver"}`}>
          <span className="chat__msg--name">Aisha</span>
          <span>
            from sender
            <span className="chat__msg--timeStamp">8:43 PM</span>
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <form action="">
          <input
            type="text"
            placeholder="Type a message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

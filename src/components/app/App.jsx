import React from "react";
import "./App.scss";
import { Sidebar, Chat } from "../index";

export default function App() {
  return (
    // "aap" = BEM naming convention
    <main className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </main>
  );
}

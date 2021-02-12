import React from "react";
import "./App.scss";
import { Sidebar } from "../index";

export default function App() {
  return (
    // "aap" = BEM naming convention
    <main className="app">
      <div className="app__body">
        {/* App Body */}
        <Sidebar />
        {/* Chat */}
        {/* App Body */}
      </div>
    </main>
  );
}

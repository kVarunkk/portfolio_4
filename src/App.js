import "./index.css";
import React from "react";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col gap-10 p-5 py-10 md:w-1/2 m-auto text-xl">
      <Introduction />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

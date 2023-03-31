import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      ⟫{" "}
      <Link
        className="underline underline-offset-4"
        to={"https://www.linkedin.com/in/varun-kumawat-0a6b3a228"}
      >
        Connect with me on LinkedIn 🥰
      </Link>
      <br></br>⟫{" "}
      <Link
        className="underline underline-offset-4"
        to={"https://github.com/kVarunkk"}
      >
        <span className="italic">Git</span> with me 🧑🏽‍💻
      </Link>
      <br></br>⟫{" "}
      <Link
        className="underline underline-offset-4"
        to={"mailto:varunkumawatleap2@gmail.com"}
      >
        Mail(Electronic)⚡
      </Link>
    </div>
  );
}

export default Contact;

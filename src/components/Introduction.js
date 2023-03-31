import React from "react";
import { Link } from "react-router-dom";

function Introduction() {
  return (
    <>
      <div className="text-5xl ">
        <Link
          className="underline underline-offset-4"
          to={"https://www.linkedin.com/in/varun-kumawat-0a6b3a228"}
        >
          Varun 💎
        </Link>
      </div>
      <div>
        Currently developing 🛠️ at{" "}
        <Link
          className="underline underline-offset-4"
          to={"https://parentheses.co.in/"}
        >
          Parentheses labs
        </Link>{" "}
        using <Link className="underline underline-offset-4">Typescript</Link>,{" "}
        <Link className="underline underline-offset-4">GraphQL</Link> &{" "}
        <Link className="underline underline-offset-4">PostgreSQL</Link> &{" "}
        <Link className="underline underline-offset-4">Hasura</Link>
        <br></br>⟫ <span className="italic">Apart</span> from coding, I'm also a
        student at the{" "}
        <Link className="underline underline-offset-4">
          Indian Institute of Technology, Kharagpur 🎒
        </Link>
        <br></br>⟫{" "}
        <Link className="underline underline-offset-4">
          <span className="italic"> ¡Hala Madrid! ...y nada más ⚽</span>{" "}
        </Link>{" "}
        <br></br> ⟫ I <span className="italic">root</span> for the{" "}
        <Link className="underline underline-offset-4">GSW</Link> in the NBA 🏀
      </div>
    </>
  );
}

export default Introduction;

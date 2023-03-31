import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      I've built{" "}
      <Link
        className="underline underline-offset-4"
        to={"https://github.com/kVarunkk"}
      >
        multiple
      </Link>{" "}
      web and mobile applications, but here's the link to the ones that are{" "}
      <span className="italic">closer</span> to my heart 💕:
      <br></br>⟫ You might want to <span className="italic">edit</span> your
      tweets, select <span className="italic">custom</span> avatars and much
      more:{" "}
      <Link
        className="underline underline-offset-4"
        to={"https://varuns-twitter-clone.vercel.app/"}
      >
        A Social media app better than Twitter 👌
      </Link>
      <br></br>⟫ Chat with people in custom virtual rooms{" "}
      <span className="italic">securely</span>:{" "}
      <Link
        className="underline underline-offset-4"
        to={"https://github.com/kVarunkk/React-Native-chatApp"}
      >
        Native chat application which won't steal your data 😍
      </Link>
    </div>
  );
}

export default Projects;

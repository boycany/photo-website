import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/photo-website">Home</Link>
        </li>
        <li>
          <Link to="/photo-website/about">About</Link>
        </li>
        <li>
          <a
            href="https://magical-face-recognition-brain.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            B-JOY
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

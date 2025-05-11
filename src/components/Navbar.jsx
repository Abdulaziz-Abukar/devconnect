// Reusable UI Component
import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <header>
      <p>DevConnect</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="feed">Feed</Link>
          </li>
          <li>
            <Link to="createpost">Create Post</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

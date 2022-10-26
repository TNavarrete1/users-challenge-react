import React, { useState } from "react";
import UserPosts from "./UserPosts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCirclePlus,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function UserComponent({ users }) {
  const [dropdownOpen, setDropdownStatus] = useState(
    Array(Object.keys(users).length).fill(false)
  );

  function toggleDropdown(event) {
    const userId = event.currentTarget.getAttribute("data-key");
    if (dropdownOpen[userId]) {
      setDropdownStatus((prevState) => {
        return prevState.map((curr, index) => {
          if (index === parseInt(userId)) {
            return false;
          } else {
            return curr;
          }
        });
      });
    } else {
      setDropdownStatus((prevState) => {
        return prevState.map((curr, index) => {
          if (index === parseInt(userId)) {
            return true;
          } else {
            return curr;
          }
        });
      });
    }
  }

  return users.map((user) => {
    return (
      <div
        className="user-info-container"
        key={user.id}
        data-key={user.id}
        onClick={toggleDropdown}
      >
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <div className="username">{user.username}</div>
        <div className="email">{user.email}</div>
        <FontAwesomeIcon
          icon={faCirclePlus}
          className={`dropdown-icon-plus ${
            dropdownOpen[user.id] ? "dropdown-flip-icon" : ""
          }`}
        />
        <FontAwesomeIcon
          icon={faCircleMinus}
          className={`dropdown-icon-minus ${
            !dropdownOpen[user.id] ? "dropdown-flip-icon" : ""
          }`}
        />
        <div
          className={`user-post-container ${
            dropdownOpen[user.id] ? "dropdown-open" : ""
          }`}
        >
          <header className="posts-header">Posts</header>
          <UserPosts userId={user.id} />
        </div>
      </div>
    );
  });
}

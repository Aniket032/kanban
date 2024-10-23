import React, { useState } from "react";
import "./Navbar.css";
import { UIIcons } from "../constants/icons";

const Navbar = ({ grouping, sorting, setGrouping, setSorting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const DisplayIcon = UIIcons.display;

  return (
    <div className="navbar">
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="display-icon">
          <DisplayIcon />
        </span>
        <span>Display</span>
        <span className="chevron">{isOpen ? "▼" : "▲"}</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-row">
            <span className="label">Grouping</span>
            <select
              value={grouping}
              onChange={(e) => {
                setGrouping(e.target.value);
                localStorage.setItem("grouping", e.target.value);
              }}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-row">
            <span className="label">Ordering</span>
            <select
              value={sorting}
              onChange={(e) => {
                setSorting(e.target.value);
                localStorage.setItem("sorting", e.target.value);
              }}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

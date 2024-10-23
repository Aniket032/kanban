import React from "react";
import Card from "./Card";
import { UIIcons } from "../constants/icons";
import "./Column.css";

const Column = ({ title, Icon, available, tickets, users }) => {
  const { plus: PlusIcon, options: OptionsIcon } = UIIcons;

  return (
    <div className="column">
      <div className="column-header">
        <div className="header-left">
          {Icon && <Icon className="status-icon" />}
          {available !== undefined && (
            <div
              className={`availability-indicator ${
                available ? "available" : ""
              }`}
            />
          )}
          <span className="column-title">{title}</span>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="header-right">
          <button className="icon-button">
            <PlusIcon />
          </button>
          <button className="icon-button">
            <OptionsIcon />
          </button>
        </div>
      </div>
      <div className="cards-container">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            user={users.find((u) => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;

import React from "react";
import { StatusIcons, PriorityIcons, UIIcons } from "../constants/icons";
import "./Card.css";

const Card = ({ ticket, user }) => {
  const StatusIcon = StatusIcons[ticket.status] || StatusIcons.Todo;
  const PriorityIcon = PriorityIcons[ticket.priority] || PriorityIcons[0];
  const TagIcon = UIIcons.tag;

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="user-avatar">
          {user?.name.charAt(0)}
          <div
            className={`status-indicator ${user?.available ? "available" : ""}`}
          />
        </div>
      </div>
      <div className="card-title">
        <StatusIcon className="status-icon" />
        <p>{ticket.title}</p>
      </div>
      <div className="card-footer">
        <div className="priority-tag">
          <PriorityIcon />
        </div>
        {ticket.tag.map((tag, index) => (
          <div key={index} className="feature-tag">
            <TagIcon className="tag-icon" />
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

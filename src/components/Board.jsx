import React from "react";
import Column from "./Column";
import { StatusIcons, PriorityIcons } from "../constants/icons";
import "./Board.css";

const Board = ({ tickets, users, grouping, sorting }) => {
  const getPriorityInfo = (priority) => {
    return (
      {
        4: { name: "Urgent", Icon: PriorityIcons[4] },
        3: { name: "High", Icon: PriorityIcons[3] },
        2: { name: "Medium", Icon: PriorityIcons[2] },
        1: { name: "Low", Icon: PriorityIcons[1] },
        0: { name: "No priority", Icon: PriorityIcons[0] },
      }[priority] || { name: "No priority", Icon: PriorityIcons[0] }
    );
  };

  const groupTickets = () => {
    let grouped = {};

    if (grouping === "status") {
      tickets.forEach((ticket) => {
        if (!grouped[ticket.status]) {
          grouped[ticket.status] = {
            tickets: [],
            Icon: StatusIcons[ticket.status],
          };
        }
        grouped[ticket.status].tickets.push(ticket);
      });
    } else if (grouping === "user") {
      tickets.forEach((ticket) => {
        const user = users.find((u) => u.id === ticket.userId);
        if (!grouped[user.name]) {
          grouped[user.name] = {
            tickets: [],
            available: user.available,
          };
        }
        grouped[user.name].tickets.push(ticket);
      });
    } else if (grouping === "priority") {
      tickets.forEach((ticket) => {
        const priorityInfo = getPriorityInfo(ticket.priority);
        if (!grouped[priorityInfo.name]) {
          grouped[priorityInfo.name] = {
            tickets: [],
            Icon: priorityInfo.Icon,
          };
        }
        grouped[priorityInfo.name].tickets.push(ticket);
      });
    }

    // Sort tickets within groups
    Object.keys(grouped).forEach((key) => {
      grouped[key].tickets.sort((a, b) => {
        if (sorting === "priority") {
          return b.priority - a.priority;
        }
        return a.title.localeCompare(b.title);
      });
    });

    return grouped;
  };

  const grouped = groupTickets();

  return (
    <div className="board">
      {Object.entries(grouped).map(
        ([title, { tickets: groupTickets, icon, available }]) => (
          <Column
            key={title}
            title={title}
            icon={icon}
            available={available}
            tickets={groupTickets}
            users={users}
          />
        )
      )}
    </div>
  );
};

export default Board;

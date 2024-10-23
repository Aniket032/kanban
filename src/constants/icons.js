import { ReactComponent as TodoIcon } from "../assets/icons/To-do.svg";
import { ReactComponent as InProgressIcon } from "../assets/icons/in-progress.svg";
import { ReactComponent as DoneIcon } from "../assets/icons/Done.svg";
import { ReactComponent as BacklogIcon } from "../assets/icons/Backlog.svg";
import { ReactComponent as CanceledIcon } from "../assets/icons/Cancelled.svg";
import { ReactComponent as UrgentIcon } from "../assets/icons/SVG - Urgent Priority colour.svg";
import { ReactComponent as HighIcon } from "../assets/icons/Img - High Priority.svg";
import { ReactComponent as MediumIcon } from "../assets/icons/Img - Medium Priority.svg";
import { ReactComponent as LowIcon } from "../assets/icons/Img - Low Priority.svg";
import { ReactComponent as NoPriorityIcon } from "../assets/icons/No-priority.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/add.svg";
import { ReactComponent as OptionsIcon } from "../assets/icons/3 dot menu.svg";
import { ReactComponent as TagIcon } from "../assets/icons/To-do.svg";
import { ReactComponent as DisplayIcon } from "../assets/icons/Display.svg";

export const StatusIcons = {
  Todo: TodoIcon,
  "In progress": InProgressIcon,
  Done: DoneIcon,
  Backlog: BacklogIcon,
  Canceled: CanceledIcon,
};

export const PriorityIcons = {
  4: UrgentIcon, // Urgent
  3: HighIcon, // High
  2: MediumIcon, // Medium
  1: LowIcon, // Low
  0: NoPriorityIcon, // No priority
};

export const UIIcons = {
  plus: PlusIcon,
  options: OptionsIcon,
  tag: TagIcon,
  display: DisplayIcon,
};

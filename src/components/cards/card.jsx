import {
  CirclePlus
} from "lucide-react";
import "./card.css";


function card({
  title,
  icon: Icon,
  variant = "light",
  size = "normal",
  onClick,
  iconVariant = "light"
}) {
  return (
    <button
      className={`feature-card ${variant} ${size}`}
      onClick={onClick}
    >
      <Icon className="feature-card-icon" size={24} />

      <span className="feature-card-title">
        {title.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < title.split("\n").length - 1 && <br />}
          </span>
        ))}
      </span>

      <span className="feature-card-plus">
        <CirclePlus className={iconVariant == 'light' ? 'card-icon-light' : 'card-icon-white'} />
      </span>
    </button>
  );
}

export default card;
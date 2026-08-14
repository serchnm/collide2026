import Card from "../cards/card";
import { NavLink } from 'react-router-dom';
import "./featureGrid.css";

function grid({ cards }) {
  return (
    <section className="feature-grid">
      {cards.map((card) => (
        <NavLink
          key={card.path}
          to={card.path}
        >
          <Card
            key={card.id}
            title={card.title}
            icon={card.icon}
            variant={card.variant}
            size={card.size}
            onClick={card.onClick}
            iconVariant={card.iconVariant}
          />
        </NavLink>
        
      ))}
    </section>
  );
}

export default grid;
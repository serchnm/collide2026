import Card from "../cards/card";
import "./featureGrid.css";

function grid({ cards }) {
  return (
    <section className="feature-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          icon={card.icon}
          variant={card.variant}
          size={card.size}
          onClick={card.onClick}
          iconVariant={card.iconVariant}
        />
      ))}
    </section>
  );
}

export default grid;
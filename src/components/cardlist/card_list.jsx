import Card from "../monster-card/card";
import "../css_tyles/card/card-list.css";

const CardList = ({monsters}) => (
    <div className="card-list">
        {monsters.map((m) => {
            return <Card key={m.id} m={m} />;
        })}
    </div>
);

export default CardList;

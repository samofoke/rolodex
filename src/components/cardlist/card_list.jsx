import { Component } from "react";
import Card from "../monster-card/card";
import "../css_tyles/card/card-list.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((m) => {
          return <Card key={m.id} m={m} />;
        })}
      </div>
    );
  }
}

export default CardList;

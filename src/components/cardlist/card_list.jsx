import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((m) => (
          <div className="card-container" key={m.id}>
            <img
              alt={`monster ${m.name}`}
              src={`https://robohash.org/${m.id}?set=set2&size=180x180`}
            />
            <h2>{m.name}</h2>
            <p>{m.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
